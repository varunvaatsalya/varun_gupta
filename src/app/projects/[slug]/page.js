import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Download,
  ExternalLink,
  ImageOff,
  Lock,
  Star,
} from "lucide-react";
import projectsData from "../../../data/projects.json";
import resume from "../../../data/resume.json";
import ProjectCover from "../../../components/ProjectCover";
import { BASE_URL } from "../../../lib/site";

const { caseStudies } = projectsData;

const sectionClassName =
  "border bg-zinc-200 dark:bg-gray-950 border-gray-400 dark:border-gray-800 rounded-lg px-6 py-5 my-2";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = caseStudies.find((item) => item.slug === params.slug);
  if (!project) return {};

  const title = `${project.name} – Case Study`;
  const url = `${BASE_URL}/projects/${project.slug}`;

  return {
    title,
    description: project.oneLiner,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Varun Gupta`,
      description: project.oneLiner,
      url,
      type: "article",
    },
  };
}

function SectionHeading({ eyebrow, children }) {
  return (
    <>
      {eyebrow && (
        <p className="text-gray-700 dark:text-gray-400 text-xs">{eyebrow}</p>
      )}
      <h2 className="text-2xl font-semibold gradient w-fit mb-4">{children}</h2>
    </>
  );
}

export default function ProjectPage({ params }) {
  const project = caseStudies.find((item) => item.slug === params.slug);
  if (!project) notFound();

  const otherProjects = caseStudies.filter((item) => item.slug !== project.slug);
  const facts = [
    { label: "Role", value: project.role },
    { label: "Timeline", value: project.timeline },
    { label: "Industry", value: project.industry },
    { label: "Platforms", value: project.platforms.join(", ") },
  ];

  return (
    <main
      aria-label={`${project.name} case study`}
      className="max-w-screen-lg mx-auto px-3 py-4"
    >
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink-500 hover:text-orange-500 hover:underline underline-offset-2 mb-2"
      >
        <ArrowLeft className="size-4 shrink-0" aria-hidden="true" />
        Back to portfolio
      </Link>

      {/* ─── Header ────────────────────────────────────────────────────── */}
      <header className={sectionClassName}>
        <div className="md:flex gap-6 items-center">
          <div className="md:w-1/2">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="rounded-full bg-gradient text-slate-100 px-2 py-0.5">
                {project.kindLabel}
              </span>
              <span className="text-gray-700 dark:text-gray-400">
                {project.statusLabel}
              </span>
            </div>
            <h1 className="text-4xl font-semibold gradient my-2 w-fit">
              {project.name}
            </h1>
            <p className="text-gray-700 dark:text-gray-400">{project.oneLiner}</p>
            <dl className="grid grid-cols-2 gap-3 my-5 text-sm">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs text-gray-500">{fact.label}</dt>
                  <dd className="text-zinc-800 dark:text-zinc-200">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => {
                const LinkIcon = link.kind === "download" ? Download : ExternalLink;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-gradient px-3 py-1.5 text-sm font-semibold text-slate-100"
                    aria-label={`${link.label} (opens in new tab)`}
                  >
                    {link.label}
                    <LinkIcon className="size-4" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <ProjectCover project={project} />
          </div>
        </div>

        {project.confidential && (
          <p className="mt-5 flex gap-2 rounded-lg border border-gray-400 dark:border-gray-800 p-3 text-sm text-gray-700 dark:text-gray-400">
            <Lock className="size-4 shrink-0 mt-0.5" aria-hidden="true" />
            {project.confidentialNote}
          </p>
        )}

        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          {project.highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="rounded-lg border border-gray-400 dark:border-gray-800 p-3 text-center"
            >
              <dt className="sr-only">{highlight.label}</dt>
              <dd className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                {highlight.value}
              </dd>
              <dd className="text-xs text-gray-700 dark:text-gray-400">
                {highlight.label}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      {/* ─── Problem & Users ───────────────────────────────────────────── */}
      <div className="md:grid md:grid-cols-5 md:gap-2">
        <section className={`${sectionClassName} md:col-span-3`} aria-labelledby="problem-heading">
          <SectionHeading eyebrow="Why it exists">
            <span id="problem-heading">The problem</span>
          </SectionHeading>
          {project.problem.map((paragraph) => (
            <p key={paragraph} className="text-gray-700 dark:text-gray-400 mb-3">
              {paragraph}
            </p>
          ))}
        </section>
        <section className={`${sectionClassName} md:col-span-2`} aria-labelledby="users-heading">
          <SectionHeading eyebrow="Built for">
            <span id="users-heading">Who uses it</span>
          </SectionHeading>
          <ul className="space-y-2 text-sm">
            {project.roles.map((role) => (
              <li key={role.name}>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  {role.name}
                </span>
                <span className="text-gray-700 dark:text-gray-400"> – {role.does}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* ─── Screenshots ───────────────────────────────────────────────── */}
      <section className={sectionClassName} aria-labelledby="screens-heading">
        <SectionHeading eyebrow="A look inside">
          <span id="screens-heading">Screenshots</span>
        </SectionHeading>
        {project.gallery.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-4">
            {project.gallery.map((shot) => (
              <figure key={shot.src}>
                <Image
                  height={800}
                  width={1280}
                  className="rounded-lg border border-gray-400 dark:border-gray-800 w-full"
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                />
                {shot.caption && (
                  <figcaption className="text-xs text-gray-700 dark:text-gray-400 mt-1">
                    {shot.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        ) : (
          <p className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400">
            <ImageOff className="size-4 shrink-0" aria-hidden="true" />
            {project.confidential
              ? "Anonymized screenshots are being prepared."
              : "Screenshots are coming soon."}
          </p>
        )}
      </section>

      {/* ─── Features ──────────────────────────────────────────────────── */}
      <section className={sectionClassName} aria-labelledby="features-heading">
        <SectionHeading eyebrow="What it does">
          <span id="features-heading">Features</span>
        </SectionHeading>
        <div className="grid sm:grid-cols-2 gap-4">
          {project.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-gray-400 dark:border-gray-800 p-4"
            >
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-100 flex items-start gap-1.5 mb-2">
                {feature.star && (
                  <Star
                    className="size-4 shrink-0 mt-1 text-orange-500 fill-orange-500"
                    aria-label="Highlight"
                  />
                )}
                {feature.title}
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-400">
                {feature.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Engineering ───────────────────────────────────────────────── */}
      <section className={sectionClassName} aria-labelledby="engineering-heading">
        <SectionHeading eyebrow="Under the hood">
          <span id="engineering-heading">Engineering highlights</span>
        </SectionHeading>
        <div className="space-y-5">
          {project.engineering.map((item, index) => (
            <div key={item.title} className="flex gap-4">
              <span className="text-2xl font-bold gradient shrink-0 w-8">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-semibold text-zinc-800 dark:text-zinc-100">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Architecture & Stack ──────────────────────────────────────── */}
      <section className={sectionClassName} aria-labelledby="architecture-heading">
        <SectionHeading eyebrow="How it fits together">
          <span id="architecture-heading">Architecture</span>
        </SectionHeading>
        <ol className="flex flex-col md:flex-row md:items-stretch gap-2">
          {project.architecture.map((layer, index) => (
            <li key={layer.label} className="contents">
              <div className="flex-1 rounded-lg border border-gray-400 dark:border-gray-800 p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-pink-500 mb-2">
                  {layer.label}
                </h3>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  {layer.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              {index < project.architecture.length - 1 && (
                <div className="flex items-center justify-center text-gray-500" aria-hidden="true">
                  <ArrowRight className="size-5 max-md:hidden" />
                  <ArrowDown className="size-5 md:hidden" />
                </div>
              )}
            </li>
          ))}
        </ol>

        <h3 className="font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-3">
          Tech stack
        </h3>
        <dl className="grid sm:grid-cols-2 gap-3">
          {project.stack.map((group) => (
            <div key={group.group}>
              <dt className="text-xs text-gray-500 mb-1">{group.group}</dt>
              <dd className="flex flex-wrap gap-1">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 text-sm text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <section className={`${sectionClassName} text-center`} aria-labelledby="cta-heading">
        <h2 id="cta-heading" className="text-2xl font-semibold gradient w-fit mx-auto">
          Need something like this built?
        </h2>
        <p className="text-gray-700 dark:text-gray-400 my-3 sm:w-3/5 mx-auto">
          I design and build complete products end to end: web apps, mobile
          apps, APIs and the admin tools behind them.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/hire"
            className="rounded-lg bg-gradient px-4 py-2 font-semibold text-slate-100"
          >
            Start a project
          </Link>
          <Link
            href={resume.fiverrProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-400 dark:border-gray-800 px-4 py-2 font-semibold text-pink-500 hover:text-orange-500"
            aria-label="Hire me on Fiverr (opens in new tab)"
          >
            Hire me on Fiverr
          </Link>
        </div>
      </section>

      {/* ─── More work ─────────────────────────────────────────────────── */}
      <nav className="grid sm:grid-cols-2 gap-2 my-2" aria-label="More case studies">
        {otherProjects.map((item) => (
          <Link
            key={item.slug}
            href={`/projects/${item.slug}`}
            className="group flex items-center gap-4 border bg-zinc-200 dark:bg-gray-950 border-gray-400 dark:border-gray-800 rounded-lg p-3 hover:border-pink-500"
          >
            <ProjectCover project={item} compact className="w-28 shrink-0" />
            <div>
              <div className="text-xs text-gray-500">{item.kindLabel}</div>
              <div className="font-semibold text-zinc-800 dark:text-zinc-100 group-hover:text-pink-500">
                {item.name}
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-400">
                {item.tagline}
              </div>
            </div>
          </Link>
        ))}
      </nav>
    </main>
  );
}
