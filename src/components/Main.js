import Image from "next/image";
import Link from "next/link";
import { BiLogoPostgresql } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaExternalLinkAlt, FaGitAlt, FaGithub, FaHtml5, FaInstagram, FaLinkedin, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { GrDocker } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { RiNextjsLine, RiPhoneFill, RiTwitterXFill } from "react-icons/ri";
import {
  SiCanva,
  SiDjango,
  SiExpress,
  SiGmail,
  SiJavascript,
  SiMongodb,
  SiPrisma,
  SiReact,
  SiSelenium,
  SiSocketdotio,
  SiSqlite,
  SiTailwindcss,
  SiThealgorithms,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCpp, TbBrandFiverr, TbPointFilled } from "react-icons/tb";
import { ArrowRight } from "lucide-react";
import resume from "../data/resume.json";
import projectsData from "../data/projects.json";
import About from "./About";
import CoMain from "./CoMain";
import ContentCopyBtn from "./ContentCopyBtn";
import Dropdown from "./DropMenu";
import ProjectCover from "./ProjectCover";

const iconMap = {
  algorithm: SiThealgorithms,
  canva: SiCanva,
  cpp: TbBrandCpp,
  django: SiDjango,
  docker: GrDocker,
  express: SiExpress,
  fiverr: TbBrandFiverr,
  git: FaGitAlt,
  github: FaGithub,
  gmail: SiGmail,
  html: FaHtml5,
  instagram: FaInstagram,
  javascript: SiJavascript,
  linkedin: FaLinkedin,
  mongodb: SiMongodb,
  nextjs: RiNextjsLine,
  nodejs: FaNodeJs,
  postgresql: BiLogoPostgresql,
  prisma: SiPrisma,
  python: FaPython,
  react: FaReact,
  reactNative: SiReact,
  selenium: SiSelenium,
  socketio: SiSocketdotio,
  sqlite: SiSqlite,
  tailwind: SiTailwindcss,
  twitter: RiTwitterXFill,
  typescript: SiTypescript,
};

function Main() {
  const { profile, skills, education, projects, contact } = resume;
  const { caseStudies } = projectsData;

  return (
    <>
      {/* ─── Hero / Profile Card ───────────────────────────────────────── */}
      <section
        aria-labelledby="profile-heading"
        className="border bg-zinc-200 dark:bg-gray-950 border-gray-400 dark:border-gray-800 rounded-lg sm:my-2 px-4 py-4 my-2"
      >
        {/* Visually hidden H1 — satisfies heading hierarchy without affecting UI */}
        <h1 id="profile-heading" className="sr-only">
          Varun Gupta – Full-Stack Developer Portfolio
        </h1>

        <div className="w-full h-12 flex justify-between items-center">
          <div className="inline-flex items-center text-2xl font-bold text-gray-700 dark:text-gray-400 rounded-full pl-4">
            &#60;
            <Image
              height={800}
              width={800}
              src={profile.logoImage}
              alt="Varun Gupta profile logo"
              className="w-12 h-12"
              priority
            />
            /&#62;
          </div>
          <Dropdown />
        </div>

        <hr className="border-1 border-gray-400 dark:border-gray-800 my-2" />

        <div className="sm:flex">
          <div className="w-3/5 sm:w-1/4 py-8 mx-auto">
            <Image
              height={800}
              width={800}
              className="outline outline-2 outline-offset-4 outline-gray-400 dark:outline-gray-700 rounded-full aspect-square object-cover object-center w-4/5 mx-auto"
              src={profile.profileImage}
              alt={`${profile.name} – Full-Stack Developer`}
              priority
            />
          </div>
          <div className="sm:w-3/4">
            <p className="text-gray-700 dark:text-gray-400 my-1">
              {profile.greeting}
            </p>
            {/* Decorative name — displayed visually; semantic H1 is sr-only above */}
            <div
              className="text-4xl font-semibold text-orange-500 gradient"
              aria-hidden="true"
            >
              {profile.name}
            </div>
            <div
              className="text-2xl font-medium text-orange-500 gradient-invert"
              aria-hidden="true"
            >
              {profile.username}
            </div>
            <div className="text-gray-700 dark:text-gray-400 mt-1 mb-6">
              {profile.bio.map((paragraph, index) => (
                <span key={paragraph}>
                  {paragraph}
                  {index < profile.bio.length - 1 && <br />}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1 text-gray-700 dark:text-gray-400 my-1">
              <CiLocationOn className="text-lg" aria-hidden="true" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-700 dark:text-gray-400">
              <TbPointFilled className="text-green-400" aria-hidden="true" />
              <span>{profile.availability}</span>
            </div>
            <nav
              className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-400 my-6"
              aria-label="Varun Gupta's social profiles"
            >
              {profile.socials.map((social) => {
                const Icon = iconMap[social.icon];

                return (
                  <Link
                    key={social.label}
                    className="hover:text-orange-500"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Varun Gupta on ${social.label} (opens in new tab)`}
                    title={social.label}
                  >
                    <Icon aria-hidden="true" />
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </section>

      {/* ─── About / Code Section ──────────────────────────────────────── */}
      <About />

      {/* ─── Mobile Sidebar ────────────────────────────────────────────── */}
      <div className="lg:hidden" aria-label="Freelancing sidebar">
        <CoMain />
      </div>

      {/* ─── Skills ────────────────────────────────────────────────────── */}
      <section
        id="skills"
        aria-labelledby="skills-heading"
        className="border bg-zinc-200 dark:bg-gray-950 border-gray-400 dark:border-gray-800 rounded-lg sm:my-2 px-6 pt-4 pb-8 my-2"
      >
        <p className="text-gray-700 dark:text-gray-400 text-xs text-center">
          Explore my
        </p>
        <h2
          id="skills-heading"
          className="text-3xl font-semibold text-center gradient"
        >
          Skills
        </h2>
        <ul
          className="mt-8 px-6 flex flex-wrap justify-center gap-6 text-gray-700 dark:text-gray-300"
          aria-label="Technical skills"
        >
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];

            return (
              <li key={skill.name} className="text-center list-none">
                <Icon
                  className={`mx-auto text-6xl ${skill.iconClassName}`}
                  aria-hidden="true"
                  title={skill.name}
                />
                <span>{skill.name}</span>
              </li>
            );
          })}
        </ul>
      </section>

      {/* ─── Education ─────────────────────────────────────────────────── */}
      <section
        id="education"
        aria-labelledby="education-heading"
        className="border bg-zinc-200 dark:bg-gray-950 border-gray-400 dark:border-gray-800 rounded-lg sm:my-2 px-6 py-4 my-2"
      >
        <h2
          id="education-heading"
          className="text-2xl font-semibold text-center gradient"
        >
          Education
        </h2>
        {education.map((item) => (
          <div
            key={`${item.institution}-${item.duration}`}
            className="sm:flex gap-3 justify-center items-center"
          >
            <div className="w-1/4 my-2 sm:w-[12%] mx-auto sm:mx-0">
              <Image
                height={800}
                width={800}
                className="outline outline-2 outline-offset-2 outline-gray-400 dark:outline-gray-700 rounded-full aspect-square object-cover object-center w-4/5 mx-auto"
                src={item.image}
                alt={`${item.institution} logo`}
                loading="lazy"
              />
            </div>
            <div className="py-2 text-gray-700 dark:text-gray-400">
              <h3 className="font-semibold text-lg">{item.institution}</h3>
              <div className="flex flex-wrap">
                <span className="mr-2">{item.degree},</span>
                <span>{item.field}</span>
              </div>
              <time dateTime={item.duration}>{item.duration}</time>
            </div>
          </div>
        ))}
      </section>

      {/* ─── Projects ──────────────────────────────────────────────────── */}
      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="border bg-zinc-200 dark:bg-gray-950 border-gray-400 dark:border-gray-800 rounded-lg sm:my-2 px-6 py-4 my-2"
      >
        <p className="text-gray-700 dark:text-gray-400 text-xs text-center">
          Browse My
        </p>
        <h2
          id="projects-heading"
          className="text-3xl font-semibold text-center gradient"
        >
          Selected Work
        </h2>
        {caseStudies.map((project, index) => (
          <article key={project.slug} aria-label={project.name}>
            <div
              className={`sm:flex items-center gap-6 my-8 ${
                index % 2 ? "flex-row-reverse" : ""
              }`}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block w-full sm:w-1/2 my-4 transition-transform duration-150 hover:scale-[1.02]"
                aria-label={`Read the ${project.name} case study`}
              >
                <ProjectCover
                  project={project}
                  className="outline outline-2 outline-offset-4 outline-gray-400 dark:outline-gray-700"
                />
              </Link>
              <div className="w-full sm:w-1/2">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                  <span className="rounded-full bg-gradient text-slate-100 px-2 py-0.5">
                    {project.kindLabel}
                  </span>
                  <span className="text-gray-700 dark:text-gray-400">
                    {project.industry} · {project.statusLabel}
                  </span>
                </div>
                <h3 className="font-semibold text-3xl gradient my-2">
                  {project.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 my-2">
                  {project.tagline}
                </p>
                <dl className="grid grid-cols-4 gap-2 my-4">
                  {project.highlights.map((highlight) => (
                    <div key={highlight.label} className="text-center">
                      <dt className="sr-only">{highlight.label}</dt>
                      <dd className="text-lg font-bold text-zinc-800 dark:text-zinc-100">
                        {highlight.value}
                      </dd>
                      <dd className="text-[11px] leading-tight text-gray-700 dark:text-gray-400">
                        {highlight.label}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div>
                  {project.technologies.map((technology) => {
                    const Icon = iconMap[technology.icon];

                    return (
                      <span
                        key={`${project.slug}-${technology.name}`}
                        className="m-1 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 gap-1"
                        title={technology.name}
                      >
                        {Icon && (
                          <Icon
                            className={`text-lg ${technology.iconClassName}`}
                            aria-hidden="true"
                          />
                        )}
                        {technology.name}
                      </span>
                    );
                  })}
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-pink-500 hover:text-orange-500 hover:underline underline-offset-2"
                  >
                    Read case study
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                  {project.links[0] && (
                    <Link
                      href={project.links[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400 hover:text-blue-800 hover:underline underline-offset-1"
                      aria-label={`Visit ${project.name} (opens in new tab)`}
                    >
                      {project.links[0].label}
                      <FaExternalLinkAlt aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <hr className="border-1 border-gray-400 dark:border-gray-800 my-4" />
          </article>
        ))}

        <h3 className="text-xl font-semibold text-center text-gray-700 dark:text-gray-400 mt-6">
          Earlier projects
        </h3>
        <ul className="grid sm:grid-cols-2 gap-4 my-6" aria-label="Earlier projects">
          {projects.map((project) => (
            <li key={project.name} className="list-none">
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-gray-400 dark:border-gray-800 p-2 hover:border-pink-500"
                aria-label={`Visit ${project.name} – ${project.description} (opens in new tab)`}
              >
                <Image
                  height={400}
                  width={400}
                  className="rounded aspect-video object-cover object-center w-28 shrink-0"
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                />
                <div className="min-w-0">
                  <div className="font-semibold text-zinc-800 dark:text-zinc-100 group-hover:text-pink-500 flex items-center gap-2">
                    {project.name}
                    <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    {project.description}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {project.technologies.map((t) => t.name).join(" · ")}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ─── Contact ───────────────────────────────────────────────────── */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="border bg-zinc-200 dark:bg-gray-950 border-gray-400 dark:border-gray-800 rounded-lg sm:my-2 px-6 py-4 my-2"
      >
        <div className="w-32 p-1 bg-gradient text-slate-100 rounded-xl mx-auto text-center font-semibold mt-4">
          {contact.badge}
        </div>
        <h2
          id="contact-heading"
          className="text-gray-700 dark:text-gray-400 text-xs text-center mb-4 mt-1"
        >
          {contact.subtitle}
        </h2>
        <p className="text-gray-700 dark:text-gray-400 mt-4 mb-8 sm:w-3/5 mx-auto text-center">
          {contact.description}
        </p>
        <div className="text-center mb-6">
          <Link
            href="/hire"
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient px-4 py-2 font-semibold text-slate-100"
          >
            Start a project
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Email */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 text-lg sm:text-2xl font-semibold my-4">
          <div className="text-2xl sm:text-3xl" aria-hidden="true">
            <HiOutlineMail />
          </div>
          <address className="border-l-2 border-gray-400 dark:border-gray-800 px-2 sm:px-4 not-italic">
            {contact.emails.map((email, index) => (
              <div
                key={email.value}
                className={`flex items-center gap-3 ${index > 0 ? "pl-1" : ""}`}
              >
                <a
                  href={`mailto:${email.value}`}
                  className="hover:text-orange-500"
                  aria-label={`Send email to ${email.value}`}
                >
                  {email.value}
                </a>
                <ContentCopyBtn copy={email.copyKey} />
              </div>
            ))}
          </address>
        </div>

        <hr className="w-3/5 mx-auto border border-gray-400 dark:border-gray-800" />

        {/* Phone */}
        <div className="flex gap-4 items-center justify-center my-4 font-semibold text-2xl">
          <RiPhoneFill aria-hidden="true" />
          <a
            href={`tel:${contact.phone.value.replace(/\s/g, "")}`}
            className="hover:text-orange-500"
            aria-label={`Call Varun Gupta at ${contact.phone.value}`}
          >
            {contact.phone.value}
          </a>
          <ContentCopyBtn copy={contact.phone.copyKey} />
        </div>

        {/* Social links */}
        <div className="mx-auto pt-1 pb-6">
          <p className="text-center text-gray-700 dark:text-gray-400 my-4">
            {contact.socialHeading}
          </p>
          <nav
            className="flex items-center gap-6 justify-center text-gray-700 dark:text-gray-400 text-xl"
            aria-label="Contact social profiles"
          >
            {contact.socials.map((social) => {
              const Icon = iconMap[social.icon];

              return (
                <Link
                  key={social.label}
                  className="hover:text-orange-500"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Connect with Varun Gupta on ${social.label} (opens in new tab)`}
                  title={social.label}
                >
                  <Icon aria-hidden="true" />
                </Link>
              );
            })}
          </nav>
        </div>
      </section>
    </>
  );
}

export default Main;
