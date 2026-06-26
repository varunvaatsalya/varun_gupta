import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongoose";
import RedirectEvent from "@/models/RedirectEvent";
import links from "@/data/links.json";

const fallbackUrls = {
  github: process.env.PUBLIC_GITHUB_URL,
  linkedin: process.env.PUBLIC_LINKEDIN_URL,
  instagram: process.env.PUBLIC_INSTAGRAM_URL,
  resume: process.env.PUBLIC_RESUME_URL,
};

function normalizeTarget(target) {
  if (!target) return null;
  if (target.startsWith("http://") || target.startsWith("https://")) {
    return target;
  }
  return `https://${target}`;
}

export async function GET(request, { params }) {
  const slug = params.slug?.toString();
  if (!slug) {
    return NextResponse.json({ success: false, message: "Missing slug." }, { status: 400 });
  }

  const link = links.find((item) => item.slug === slug);
  let target = link?.target ?? fallbackUrls[slug];
  if (!target) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  await connectMongo();
  target = normalizeTarget(target);
  if (!target) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  try {
    new URL(target);
  } catch (error) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const event = {
    slug,
    target,
    linkTitle: link?.title ?? slug,
    userAgent: request.headers.get("user-agent") ?? "",
    ip: request.headers.get("x-forwarded-for") ?? request.headers.get("x-real-ip") ?? "unknown",
    referrer: request.headers.get("referer") ?? "",
  };

  await RedirectEvent.create(event);
  return NextResponse.redirect(target);
}
