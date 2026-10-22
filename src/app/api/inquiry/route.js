import { NextResponse } from "next/server";
import hire from "../../../data/hire.json";
import resume from "../../../data/resume.json";
import connectToDatabase from "../../../lib/mongodb";
import { BASE_URL } from "../../../lib/site";
import normalizeEmail from "../../../lib/normalizeEmail";
import Inquiry from "../../../models/Inquiry";

// Required: MONGODB_URI (where every inquiry is stored)
// Optional: DISCORD_WEBHOOK_URL (a private channel that pings your phone for each new inquiry)
const PROJECT_TYPES = hire.form.projectTypes;
const OWN_EMAILS = resume.contact.emails.map((item) => normalizeEmail(item.value));

const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const MIN_FILL_MS = 3000;

// Best effort only: serverless instances don't share memory, but this still
// stops one tab from flooding the database and the Discord channel.
const recentByIp = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const hits = (recentByIp.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  hits.push(now);
  recentByIp.set(ip, hits);
  return hits.length > RATE_LIMIT;
}

function clean(value, max) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function validate(body) {
  const data = {
    name: clean(body.name, 80),
    email: clean(body.email, 120),
    phone: clean(body.phone, 20),
    projectType: clean(body.projectType, 60),
    message: clean(body.message, 3000),
  };

  if (data.name.length < 2) return { error: "Please enter your name." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return { error: "Please enter a valid email address." };
  if (OWN_EMAILS.includes(normalizeEmail(data.email)))
    return { error: "That's my email address. Please enter your own email so I can reply to you." };
  if (!PROJECT_TYPES.includes(data.projectType))
    return { error: "Please pick a project type." };
  if (data.message.length < 20)
    return { error: "Tell me a little more about the project (at least 20 characters)." };

  return { data };
}

const EMBED_COLOR = 0xec4899;

// Visitor text must show up literally: no bold tricks, no disguised [links](…).
function escapeMarkdown(text) {
  return text.replace(/([\\*_~`|>#\[\]()-])/g, "\\$1");
}

function whatsappLink(phone) {
  let digits = phone.replace(/\D/g, "");
  if (digits.length === 10) digits = `91${digits}`;
  return digits.length >= 11 ? `https://wa.me/${digits}` : null;
}

async function notifyDiscord(data, savedId) {
  if (!process.env.DISCORD_WEBHOOK_URL) return false;

  const name = escapeMarkdown(data.name);
  const gmailReply = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(data.email)}&su=${encodeURIComponent("Re: your project inquiry")}`;
  const whatsapp = data.phone && whatsappLink(data.phone);
  const actions = [`[Reply by email](${gmailReply})`];
  if (whatsapp) actions.push(`[WhatsApp](${whatsapp})`);

  const quotedMessage = escapeMarkdown(data.message.slice(0, 3500))
    .split("\n")
    .map((line) => `> ${line}`)
    .join("\n");

  const fields = [
    { name: "Email", value: escapeMarkdown(data.email), inline: true },
    { name: "Phone", value: data.phone ? escapeMarkdown(data.phone) : "–", inline: true },
    { name: "Project", value: data.projectType, inline: true },
    { name: "Respond", value: actions.join("  ·  ") },
  ];
  if (!savedId) {
    fields.push({ name: "Not saved", value: "Database write failed, this message is the only copy." });
  }

  const res = await fetch(process.env.DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "Portfolio",
      // Shown in the phone's push notification, which doesn't preview embeds.
      content: `New inquiry from **${name}** · ${data.projectType}`,
      // Visitors type this text, so never let it trigger @everyone or user pings.
      allowed_mentions: { parse: [] },
      embeds: [
        {
          author: {
            name: "Portfolio · Hire page",
            url: `${BASE_URL}/hire`,
            icon_url: `${BASE_URL}/images/profilelogo.png`,
          },
          title: name,
          description: quotedMessage,
          color: EMBED_COLOR,
          fields,
          footer: { text: savedId ? `Status: new  ·  ID ${savedId}` : "Status: not saved" },
          timestamp: new Date().toISOString(),
        },
      ],
    }),
  });

  if (!res.ok) {
    throw new Error(`Discord ${res.status}: ${await res.text()}`);
  }
  return true;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden field or submit instantly; pretend it worked so they don't retry.
  const filledTooFast = Date.now() - Number(body.startedAt || 0) < MIN_FILL_MS;
  if (body.website || filledTooFast) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const { data, error } = validate(body);
  if (error) {
    return NextResponse.json({ success: false, message: error }, { status: 400 });
  }

  // Counted after validation so a visitor fixing typos doesn't get locked out.
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, message: "Too many messages. Please try again later or email me directly." },
      { status: 429 }
    );
  }

  // The database is the source of truth; Discord is only the doorbell.
  // Either one succeeding means the inquiry reached me.
  let saved = null;
  try {
    await connectToDatabase();
    saved = await Inquiry.create(data);
  } catch (err) {
    console.error("Inquiry form: database save failed", err);
  }

  let notified = false;
  try {
    notified = await notifyDiscord(data, saved?._id?.toString());
  } catch (err) {
    console.error("Inquiry form: Discord notification failed", err);
  }

  if (!saved && !notified) {
    return NextResponse.json(
      { success: false, message: "Couldn't send your message. Please email me directly." },
      { status: 502 }
    );
  }

  if (saved && notified) {
    await Inquiry.updateOne({ _id: saved._id }, { notified: true }).catch(() => {});
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
