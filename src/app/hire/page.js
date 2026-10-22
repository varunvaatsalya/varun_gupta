import Image from "next/image";
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

          <div className="flex items-center gap-3 my-5 text-xs text-gray-500" aria-hidden="true">
            <span className="h-px flex-1 bg-gray-400 dark:bg-gray-800" />
            or reach me directly
            <span className="h-px flex-1 bg-gray-400 dark:bg-gray-800" />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-400 dark:border-gray-700 px-4 py-2.5 font-semibold text-zinc-800 dark:text-zinc-100 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400"
              aria-label="Chat on WhatsApp (opens in new tab)"
            >
              <MessageCircle className="size-4 text-emerald-500" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-400 dark:border-gray-700 px-4 py-2.5 font-semibold text-zinc-800 dark:text-zinc-100 hover:border-pink-500 hover:text-pink-500"
              aria-label={`Send email to ${email}`}
            >
              <Mail className="size-4 text-pink-500" aria-hidden="true" />
              Email
            </a>
          </div>
        </section>

        <aside className={sectionClassName} aria-labelledby="fiverr-heading">
          <h2 id="fiverr-heading" className="text-xl font-semibold gradient w-fit mb-1">
            Prefer Fiverr?
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
            Order through Fiverr and pay with its buyer protection.
          </p>
          <ul className="space-y-4">
            {resume.fiverrGigs.map((gig) => (
              <li key={gig.id}>
                <a
                  href={gig.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-lg border border-gray-400 dark:border-gray-800 hover:border-green-500"
                  aria-label={gig.ariaLabel}
                >
                  <Image
                    height={800}
                    width={800}
                    src={gig.image}
                    alt={gig.imageAlt}
                    className="w-full"
                    loading="lazy"
                  />
                  <span className="flex items-center justify-between gap-2 px-3 py-2">
                    <span className="font-semibold text-zinc-800 dark:text-zinc-100">
                      {gig.title}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-green-600 dark:text-green-500 group-hover:underline underline-offset-2">
                      <TbBrandFiverr aria-hidden="true" />
                      View gig
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  );
}
