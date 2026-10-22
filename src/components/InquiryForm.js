"use client";

import { useEffect, useRef, useState } from "react";
import { CircleCheck, Loader2, Send } from "lucide-react";
import normalizeEmail from "../lib/normalizeEmail";

const inputClassName =
  "w-full rounded-lg border border-gray-400 dark:border-gray-700 bg-zinc-100 dark:bg-gray-900 px-3 py-2 text-sm text-zinc-800 dark:text-zinc-100 outline-none focus:border-pink-500";
const labelClassName = "block text-xs font-semibold text-gray-700 dark:text-gray-400 mb-1";

function InquiryForm({ projectTypes, whatsappHref, ownEmails = [] }) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const startedAt = useRef(0);

  const isOwnEmail =
    email.includes("@") &&
    ownEmails.some((own) => normalizeEmail(own) === normalizeEmail(email));

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (isOwnEmail) return;
    setStatus("sending");
    setError("");

    const body = Object.fromEntries(new FormData(event.currentTarget));
    body.startedAt = startedAt.current;

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      setStatus("sent");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <div className="text-center py-10" role="status">
        <CircleCheck className="size-12 mx-auto text-emerald-500" aria-hidden="true" />
        <p className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-3">
          Message sent!
        </p>
        <p className="text-gray-700 dark:text-gray-400 mt-1">
          Thanks for reaching out. I’ll reply to your email within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
      {/* Honeypot: hidden from people, filled in by bots */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="inquiry-name" className={labelClassName}>
          Name *
        </label>
        <input id="inquiry-name" name="name" required minLength={2} maxLength={80} className={inputClassName} />
      </div>
      <div>
        <label htmlFor="inquiry-email" className={labelClassName}>
          Email *
        </label>
        <input
          id="inquiry-email"
          name="email"
          type="email"
          required
          maxLength={120}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={isOwnEmail}
          aria-describedby={isOwnEmail ? "inquiry-email-warning" : undefined}
          className={`${inputClassName} ${isOwnEmail ? "!border-amber-500" : ""}`}
        />
        {isOwnEmail && (
          <p id="inquiry-email-warning" className="mt-1 text-xs text-amber-600 dark:text-amber-400" role="alert">
            That’s my email address. Please enter your own email so I can reply to you.
          </p>
        )}
      </div>
      <div>
        <label htmlFor="inquiry-phone" className={labelClassName}>
          Phone / WhatsApp
        </label>
        <input id="inquiry-phone" name="phone" type="tel" maxLength={20} className={inputClassName} />
      </div>
      <div>
        <label htmlFor="inquiry-type" className={labelClassName}>
          Project type *
        </label>
        <select id="inquiry-type" name="projectType" required defaultValue="" className={inputClassName}>
          <option value="" disabled>
            Choose one
          </option>
          {projectTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="inquiry-message" className={labelClassName}>
          About your project *
        </label>
        <textarea
          id="inquiry-message"
          name="message"
          required
          minLength={20}
          maxLength={3000}
          rows={5}
          placeholder="What are you building, who is it for, and what should it do?"
          className={inputClassName}
        />
      </div>

      {error && (
        <p className="sm:col-span-2 text-sm text-red-500" role="alert">
          {error}{" "}
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="underline">
            Message me on WhatsApp
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending" || isOwnEmail}
        className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient px-4 py-2.5 font-semibold text-slate-100 disabled:opacity-60"
      >
        {status === "sending" ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="size-4" aria-hidden="true" />
        )}
        {status === "sending" ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}

export default InquiryForm;
