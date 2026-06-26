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
import { TbBrandCpp, TbPointFilled } from "react-icons/tb";
import resume from "../data/resume.json";
import About from "./About";
import CoMain from "./CoMain";
import ContentCopyBtn from "./ContentCopyBtn";
import Dropdown from "./DropMenu";

const iconMap = {
  algorithm: SiThealgorithms,
  canva: SiCanva,
  cpp: TbBrandCpp,
  django: SiDjango,
  docker: GrDocker,
  express: SiExpress,
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

  return (
    <>
      <div className="border bg-zinc-200 dark:bg-gray-950 border-gray-400 dark:border-gray-800 rounded-lg sm:my-2 px-4 py-4 my-2">
        <div className="w-full h-12 flex justify-between items-center">
          <div className=" inline-flex items-center text-2xl font-bold text-gray-700 dark:text-gray-400 rounded-full pl-4">
            &#60;
            <Image
              height={800}
              width={800}
              src={profile.logoImage}
              alt="pfp"
              className="w-12 h-12"
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
              className="outline outline-2 outline-offset-4 outline-gray-400 dark:outline-gray-700 rounded-full aspect-square object-cover object-center w-4/5 mx-auto "
              src={profile.profileImage}
              alt={profile.name}
            />
          </div>
          <div className="sm:w-3/4">
            <div className="text-gray-700 dark:text-gray-400 my-1">
              {profile.greeting}
            </div>
            <div className="text-4xl font-semibold text-orange-500 gradient">
              {profile.name}
            </div>
            <div className="text-2xl font-medium text-orange-500 gradient-invert">
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
              <CiLocationOn className="text-lg" /> {profile.location}
            </div>
            <div className="flex items-center gap-1 text-gray-700 dark:text-gray-400">
              <TbPointFilled className="text-green-400" />
              {profile.availability}
            </div>
            <div className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-400 my-6">
              {profile.socials.map((social) => {
                const Icon = iconMap[social.icon];

                return (
                  <Link
                    key={social.label}
                    className="hover:text-orange-500"
                    href={social.href}
                    target="_blank"
                    rel="noopener"
                    aria-label={social.label}
                  >
                    <Icon />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <About />

      <div className="lg:hidden">
        <CoMain />
      </div>

      <div className="border bg-zinc-200 dark:bg-gray-950 border-gray-400 dark:border-gray-800 rounded-lg sm:my-2 px-6 pt-4 pb-8 my-2">
        <div className="text-gray-700 dark:text-gray-400 text-xs text-center">
          Explore my
        </div>
        <div className="text-3xl font-semibold text-center gradient">
          Skills
        </div>
        <div className="mt-8 px-6 flex flex-wrap justify-center gap-6 text-gray-700 dark:text-gray-300">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];

            return (
              <div key={skill.name} className="text-center">
                <Icon className={`mx-auto text-6xl ${skill.iconClassName}`} />
                {skill.name}
              </div>
            );
          })}
        </div>
      </div>

      <div className="border bg-zinc-200 dark:bg-gray-950 border-gray-400 dark:border-gray-800 rounded-lg sm:my-2 px-6 py-4 my-2">
        <div className="text-2xl font-semibold text-center gradient">
          Education
        </div>
        {education.map((item) => (
          <div
            key={`${item.institution}-${item.duration}`}
            className="sm:flex gap-3 justify-center items-center"
          >
            <div className="w-1/4 my-2 sm:w-[12%] mx-auto sm:mx-0">
              <Image
                height={800}
                width={800}
                className="outline outline-2 outline-offset-2 outline-gray-400 dark:outline-gray-700 rounded-full aspect-square object-cover object-center w-4/5 mx-auto "
                src={item.image}
                alt={item.imageAlt}
              />
            </div>
            <div className="py-2 text-gray-700 dark:text-gray-400 ">
              <div className="font-semibold text-lg">{item.institution}</div>
              <div className="flex flex-wrap">
                <div className="mr-2">{item.degree},</div>
                <div>{item.field}</div>
              </div>
              <div>{item.duration}</div>
            </div>
          </div>
        ))}
      </div>

      <div
        id="projects"
        className="border bg-zinc-200 dark:bg-gray-950 border-gray-400 dark:border-gray-800 rounded-lg sm:my-2 px-6 py-4 my-2"
      >
        <div className="text-gray-700 dark:text-gray-400 text-xs text-center">
          Browse My Recent
        </div>
        <div className="text-3xl font-semibold text-center gradient">
          Projects
        </div>
        {projects.map((project, index) => (
          <div key={project.name}>
            <div
              className={`sm:flex items-center my-8 rounded-lg ${
                project.reverse ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-full sm:w-1/2 my-4">
                <Image
                  height={800}
                  width={800}
                  className="outline outline-2 outline-offset-4 outline-gray-400 dark:outline-gray-700 rounded-lg aspect-video object-cover object-center w-11/12 mx-auto"
                  src={project.image}
                  alt={project.imageAlt}
                />
              </div>
              <div className="w-full sm:w-3/5 pl-6">
                <div className="font-semibold text-3xl gradient my-2">
                  {project.name}
                </div>
                <div className="text-gray-700 dark:text-gray-400 my-2">
                  {project.description}
                </div>
                <Link
                  href={project.href}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-800 hover:underline underline-offset-1"
                >
                  {project.href}
                  <FaExternalLinkAlt />
                </Link>
                <div className="mt-5">
                  {project.technologies.map((technology, techIndex) => {
                    const Icon = iconMap[technology.icon];
                    const marginClass =
                      techIndex === project.technologies.length - 1
                        ? "mb-4"
                        : "";

                    return (
                      <div
                        key={`${project.name}-${technology.name}`}
                        className={`m-1 ${marginClass} inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 gap-1`}
                      >
                        <Icon className={`text-lg ${technology.iconClassName}`} />
                        {technology.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {index < projects.length - 1 && (
              <hr className="border-1 border-gray-400 dark:border-gray-800 my-4" />
            )}
          </div>
        ))}
      </div>

      <div
        id="contact"
        className="border bg-zinc-200 dark:bg-gray-950 border-gray-400 dark:border-gray-800 rounded-lg sm:my-2 px-6 py-4 my-2"
      >
        <div className="w-32 p-1 bg-gradient text-slate-100 rounded-xl mx-auto text-center font-semibold mt-4">
          {contact.badge}
        </div>
        <div className="text-gray-700 dark:text-gray-400 text-xs text-center mb-4 mt-1">
          {contact.subtitle}
        </div>
        <div className="text-gray-700 dark:text-gray-400 mt-4 mb-8 sm:w-3/5 mx-auto text-center">
          {contact.description}
        </div>
        <div className="flex items-center justify-center gap-2 sm:gap-4 text-lg sm:text-2xl font-semibold my-4">
          <div className="text-2xl sm:text-3xl">
            <HiOutlineMail />
          </div>
          <div className="border-l-2 border-gray-400 dark:border-gray-800 px-2 sm:px-4">
            {contact.emails.map((email, index) => (
              <div
                key={email.value}
                className={`flex items-center gap-3 ${index > 0 ? "pl-1" : ""}`}
              >
                {email.value} <ContentCopyBtn copy={email.copyKey} />
              </div>
            ))}
          </div>
        </div>
        <hr className="w-3/5 mx-auto border border-gray-400 dark:border-gray-800" />
        <div className="flex gap-4 items-center justify-center my-4 font-semibold text-2xl">
          <RiPhoneFill />
          {contact.phone.value} <ContentCopyBtn copy={contact.phone.copyKey} />
        </div>
        <div className="mx-auto pt-1 pb-6">
          <div className="text-center text-gray-700 dark:text-gray-400 my-4">
            {contact.socialHeading}
          </div>
          <div className="flex items-center gap-6 justify-center text-gray-700 dark:text-gray-400 text-xl ">
            {contact.socials.map((social) => {
              const Icon = iconMap[social.icon];

              return (
                <Link
                  key={social.label}
                  className="hover:text-orange-500"
                  href={social.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={social.label}
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
