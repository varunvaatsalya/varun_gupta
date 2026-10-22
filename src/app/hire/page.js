import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";
import { TbBrandFiverr } from "react-icons/tb";
import hire from "../../data/hire.json";
import resume from "../../data/resume.json";
import InquiryForm from "../../components/InquiryForm";
import { BASE_URL } from "../../lib/site";


const sectionClassName =
  "border bg-zinc-200 dark:bg-gray-950 border-gray-400 dark:border-gray-800 rounded-lg px-6 py-5 my-2";

export const metadata = {
  title: "Hire Me",
  description:
    "Hire Varun Gupta, a freelance full-stack developer from India, for web apps, admin panels, mobile apps, browser extensions and AI integrations.",
  alternates: {
    canonical: `${BASE_URL}/hire`,
  },
  openGraph: {
    title: "Hire Me | Varun Gupta",
    description:
      "Freelance full-stack developer for web apps, admin panels, mobile apps, browser extensions and AI integrations.",
    url: `${BASE_URL}/hire`,
    type: "website",
  },
};

export default function HirePage() {
  const { contact } = resume;
  const whatsappHref = `https://wa.me/${contact.phone.value.replace(/\D/g, "")}?text=${encodeURIComponent(hire.whatsappMessage)}`;
  const email = contact.emails[1].value;

  return (
    <main aria-label="Hire Varun Gupta" className="max-w-screen-lg mx-auto px-3 py-4">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink-500 hover:text-orange-500 hover:underline underline-offset-2 mb-2"
      >
        <ArrowLeft className="size-4 shrink-0" aria-hidden="true" />
        Back to portfolio
      </Link>

      {/* ─── Intro ─────────────────────────────────────────────────────── */}
      <header className={`${sectionClassName} text-center`}>
        <div className="w-32 p-1 bg-gradient text-slate-100 rounded-xl mx-auto font-semibold text-sm">
          Available for work
        </div>
        <h1 className="text-4xl font-semibold gradient w-fit mx-auto mt-3">
          {hire.headline}
        </h1>
        <p className="text-gray-700 dark:text-gray-400 mt-3 sm:w-3/4 mx-auto">
          {hire.intro}
        </p>
        <hr className="w-3/5 mx-auto my-8 border border-gray-400 dark:border-gray-800" />

        {/* ─── Process ─────────────────────────────────────────────────── */}
        <p className="text-gray-700 dark:text-gray-400 text-xs">No surprises</p>
        <h2 id="process-heading" className="text-2xl font-semibold gradient w-fit mx-auto mb-4">
          How we’ll work
        </h2>
        <ol className="grid sm:grid-cols-5 gap-4">
          {hire.process.map((step, index) => (
            <li key={step.title}>
              <span className="text-2xl font-bold gradient">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-100 mt-1">
                {step.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </header>

      {/* ─── Inquiry ───────────────────────────────────────────────────── */}
      <div id="inquiry" className="lg:grid lg:grid-cols-3 lg:gap-2 scroll-mt-4">
        <section className={`${sectionClassName} lg:col-span-2`} aria-labelledby="inquiry-heading">
          <p className="text-gray-700 dark:text-gray-400 text-xs">Tell me about it</p>
          <h2 id="inquiry-heading" className="text-2xl font-semibold gradient w-fit mb-4">
            Start a project
          </h2>
          <InquiryForm
            projectTypes={hire.form.projectTypes}
            whatsappHref={whatsappHref}
            ownEmails={contact.emails.map((item) => item.value)}
          />
        </section>

        <aside className={sectionClassName} aria-labelledby="direct-heading">
          <h2 id="direct-heading" className="text-xl font-semibold gradient w-fit mb-1">
            Prefer to talk directly?
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
            Reach me wherever is easiest for you.
          </p>
          <ul className="space-y-3">
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-gray-400 dark:border-gray-800 p-3 hover:border-emerald-500"
                aria-label="Chat on WhatsApp (opens in new tab)"
              >
                <MessageCircle className="size-5 text-emerald-500" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-zinc-800 dark:text-zinc-100">WhatsApp</span>
                  <span className="text-xs text-gray-700 dark:text-gray-400">{contact.phone.value}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 rounded-lg border border-gray-400 dark:border-gray-800 p-3 hover:border-pink-500"
                aria-label={`Send email to ${email}`}
              >
                <Mail className="size-5 text-pink-500" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block font-semibold text-zinc-800 dark:text-zinc-100">Email</span>
                  <span className="text-xs text-gray-700 dark:text-gray-400 break-all">{email}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={resume.fiverrProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-gray-400 dark:border-gray-800 p-3 hover:border-green-500"
                aria-label="Hire me on Fiverr (opens in new tab)"
              >
                <TbBrandFiverr className="size-5 text-green-500" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-zinc-800 dark:text-zinc-100">Fiverr</span>
                  <span className="text-xs text-gray-700 dark:text-gray-400">Pay through Fiverr’s protection</span>
                </span>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </main>
  );
}
