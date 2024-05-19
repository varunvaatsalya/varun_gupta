import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import {
  SiCanva,
  SiDjango,
  SiExpress,
  SiGmail,
  SiJavascript,
  SiMongodb,
  SiSocketdotio,
  SiTailwindcss,
  SiThealgorithms,
} from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { TbBrandCpp, TbCopy, TbPointFilled } from "react-icons/tb";
import { RiNextjsLine, RiPhoneFill, RiTwitterXFill } from "react-icons/ri";
import {
  FaExternalLinkAlt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import Link from "next/link";
import Dropdown from "./DropMenu";
import ContentCopyBtn from "./ContentCopyBtn";
import About from "./About";

function Main() {
  return (
    <>
      {/* profile */}
      <div className="border bg-zinc-200 dark:bg-gray-950 border-gray-400 dark:border-gray-800 rounded-lg sm:my-2 px-4 py-4 my-2">
        <div className="w-full h-12 flex justify-between items-center">
          <div className=" inline-flex items-center text-2xl font-bold text-gray-700 dark:text-gray-400 rounded-full pl-4">
            &#60;
            <Image
              height={800}
              width={800}
              src="/images/profilelogo.png"
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
              src="/images/profile.jpg"
              alt="Varun"
            />
          </div>
          <div className="sm:w-3/4">
            <div className="text-gray-700 dark:text-gray-400 my-1">
              hey, this is
            </div>
            <div className="text-4xl font-semibold text-orange-500 gradient">
              Varun Gupta
            </div>
            <div className="text-2xl font-medium text-orange-500 gradient-invert">
              @varunvaatsalya
            </div>
            <div className="text-gray-700 dark:text-gray-400 mt-1 mb-6">
            One who knows frontend is a frontend developer, one who knows backend is a backend developer and one who doesn't know both is a full stack developer, - JK<br /> Hi there!👋 I'm a full-stack developer who enjoys dabbling in both frontend and backend, but let's be real – the backend is where the magic (and my heart) truly resides. I like my code like I like my coffee: strong, efficient, and keeping everything running smoothly behind the scenes.
            </div>
            <div className="flex items-center gap-1 text-gray-700 dark:text-gray-400 my-1">
              <CiLocationOn className="text-lg" /> Lucknow, India
            </div>
            <div className="flex items-center gap-1 text-gray-700 dark:text-gray-400">
              <TbPointFilled className="text-green-400" />
              Available for new projects
            </div>
            <div className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-400 my-6">
              <Link
                className="hover:text-orange-500"
                href="https://www.linkedin.com/in/varunvaatsalya/"
                target="_blank"
                rel="noopener"
              >
                <FaLinkedin />
              </Link>
              <Link
                className="hover:text-orange-500"
                href="https://www.instagram.com/varunvaatsalya/"
                target="_blank"
                rel="noopener"
              >
                <FaInstagram />
              </Link>
              <Link
                className="hover:text-orange-500"
                href="https://twitter.com/varunvaatsalya/"
                target="_blank"
                rel="noopener"
              >
                <RiTwitterXFill />
              </Link>
              <Link
                className="hover:text-orange-500"
                href="https://github.com/varunvaatsalya/"
                target="_blank"
                rel="noopener"
              >
                <FaGithub />
              </Link>
              <Link
                className="hover:text-orange-500"
                href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=varunvaatsalya@gmail.com&tf=1"
                target="_blank"
                rel="noopener"
              >
                <SiGmail />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* about */}
      <About/>
      {/* skills */}
      <div className="border bg-zinc-200 dark:bg-gray-950 border-gray-400 dark:border-gray-800 rounded-lg sm:my-2 px-6 pt-4 pb-8 my-2">
        <div className="text-gray-700 dark:text-gray-400 text-xs text-center">
          Explore my
        </div>
        <div className="text-3xl font-semibold text-center gradient">
          Skills
        </div>
        <div className="mt-8 px-6 flex flex-wrap justify-center gap-6 text-gray-700 dark:text-gray-300">
          <div className="text-center">
            <SiJavascript className="mx-auto text-6xl text-yellow-400" />
            JavaScript
          </div>
          <div className="text-center">
            <FaReact className="mx-auto text-6xl text-cyan-500" />
            React
          </div>
          <div className="text-center">
            <RiNextjsLine className="mx-auto text-6xl" />
            Nextjs
          </div>
          <div className="text-center">
            <FaNodeJs className="mx-auto text-6xl text-emerald-500" />
            NodeJs
          </div>
          <div className="text-center">
            <SiExpress className="mx-auto text-6xl" />
            ExpressJs
          </div>
          <div className="text-center">
            <SiSocketdotio className="mx-auto text-6xl" />
            Socket.io
          </div>
          <div className="text-center">
            <SiDjango className="mx-auto text-6xl text-emerald-800" />
            Django
          </div>
          <div className="text-center">
            <FaPython className="mx-auto text-6xl" />
            Python
          </div>
          <div className="text-center">
            <SiMongodb className="mx-auto text-6xl text-emerald-400" />
            Mongodb
          </div>
          <div className="text-center">
            <SiTailwindcss className="mx-auto text-6xl text-sky-400" />
            Tailwind CSS
          </div>
          <div className="text-center">
            <FaGitAlt className="mx-auto text-6xl text-red-500" />
            Git
          </div>
          <div className="text-center">
            <FaGithub className="mx-auto text-6xl" />
            Github
          </div>
          <div className="text-center">
            <TbBrandCpp className="mx-auto text-6xl" />
            C++
          </div>
          <div className="text-center">
            <SiCanva className="mx-auto text-6xl text-cyan-600" />
            Canva
          </div>
        </div>
      </div>
      {/* education */}
      <div className="border bg-zinc-200 dark:bg-gray-950 border-gray-400 dark:border-gray-800 rounded-lg sm:my-2 px-6 py-4 my-2">
        <div className="text-2xl font-semibold text-center gradient">
          Education
        </div>
        <div className="sm:flex gap-3 justify-center items-center">
          <div className="w-1/4 my-2 sm:w-[12%] mx-auto sm:mx-0">
            <Image
              height={800}
              width={800}
              className="outline outline-2 outline-offset-2 outline-gray-400 dark:outline-gray-700 rounded-full aspect-square object-cover object-center w-4/5 mx-auto "
              src="/images/ietlucknow.png"
              alt="IET"
            />
          </div>
          <div className="py-2 text-gray-700 dark:text-gray-400 ">
            <div className="font-semibold text-lg">
              Institute of Engineering & technology, Lucknow - 226021
            </div>
            <div className="flex flex-wrap">
              <div className="mr-2">Bachelor of Technology - BTech,</div>
              <div>Computer Science & Engineering</div>
            </div>
            <div>Nov 2022 - Sep 2026</div>
          </div>
        </div>
      </div>
      {/* projects */}
      <div id="projects" className="border bg-zinc-200 dark:bg-gray-950 border-gray-400 dark:border-gray-800 rounded-lg sm:my-2 px-6 py-4 my-2">
        <div className="text-gray-700 dark:text-gray-400 text-xs text-center">
          Browse My Recent
        </div>
        <div className="text-3xl font-semibold text-center gradient">
          Projects
        </div>
        <div className="sm:flex items-center my-8 rounded-lg">
          <div className="w-full sm:w-1/2 my-4">
            <Image
              height={800}
              width={800}
              className="outline outline-2 outline-offset-4 outline-gray-400 dark:outline-gray-700 rounded-lg aspect-video object-cover object-center w-11/12 mx-auto"
              src="/images/encore.png"
              alt="Varun"
            />
          </div>
          <div className="w-full sm:w-3/5 pl-6">
            <div className="font-semibold text-3xl gradient my-2">ENCORE</div>
            <div className="text-gray-700 dark:text-gray-400 my-2">
              IET Lucknow’s Biggest College Cultural Fest Website
            </div>
            <Link
              href="https://encore-iaxq.onrender.com/home"
              target="_blank"
              className=" flex items-center gap-2 hover:text-blue-800 hover:underline underline-offset-1"
            >
              https://encore-iaxq.onrender.com/home
              <FaExternalLinkAlt />
            </Link>
            <div className="mt-5">
              <div className="m-1 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900  dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 gap-1">
                <FaNodeJs className="text-emerald-500 text-lg" />
                NodeJS
              </div>
              <div className="m-1 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900  dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 gap-1">
                <SiExpress className="text-lg" />
                ExpressJs
              </div>
              <div className="m-1 mb-4 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900  dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 gap-1">
                <SiMongodb className="text-lg text-emerald-400" />
                MongoDB
              </div>
            </div>
          </div>
        </div>
        <hr className="border-1 border-gray-400 dark:border-gray-800 my-4" />
        <div className="sm:flex flex-row-reverse items-center my-8 rounded-lg">
          <div className="w-full sm:w-1/2 my-4">
            <Image
              height={800}
              width={800}
              className="outline outline-2 outline-offset-4 outline-gray-400 dark:outline-gray-700 rounded-lg aspect-video object-cover object-center w-11/12 mx-auto"
              src="/images/e_cell.png"
              alt="Varun"
            />
          </div>
          <div className="w-full sm:w-3/5 pl-6">
            <div className="font-semibold text-3xl gradient my-2">E-CELL</div>
            <div className="text-gray-700 dark:text-gray-400 my-2">
              IET Lucknow’s Official E-CELL Website
            </div>
            <Link
              href="https://e-cell-ebon.vercel.app/"
              target="_blank"
              className="flex items-center gap-2 hover:text-blue-800 hover:underline underline-offset-1"
            >
              https://e-cell-ebon.vercel.app/ <FaExternalLinkAlt />
            </Link>
            <div className="mt-5">
              <div className="m-1 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900  dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 gap-1">
                <RiNextjsLine className="text-lg" />
                Nextjs
              </div>
              <div className="m-1 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900  dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 gap-1">
                <SiTailwindcss className="text-lg text-sky-400" />
                Tailwind CSS
              </div>
              <div className="m-1 mb-4 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900  dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 gap-1">
                <SiMongodb className="text-lg text-emerald-400" />
                Mongodb
              </div>
            </div>
          </div>
        </div>
        <hr className="border-1 border-gray-400 dark:border-gray-800 my-4" />
        <div className="sm:flex items-center my-8 rounded-lg">
          <div className="w-full sm:w-1/2 my-4">
            <Image
              height={800}
              width={800}
              className="outline outline-2 outline-offset-4 outline-gray-400 dark:outline-gray-700 rounded-lg aspect-video object-cover object-center w-11/12 mx-auto"
              src="/images/audiometer.png"
              alt="Varun"
            />
          </div>
          <div className="w-full sm:w-3/5 pl-6">
            <div className="font-semibold text-3xl gradient my-2">
              Audiometer
            </div>
            <div className="text-gray-700 dark:text-gray-400 my-2">
              App Based Digital audiometer
            </div>
            <Link
              href="https://digital-audimeter.vercel.app/"
              target="_blank"
              className=" flex items-center gap-2 hover:text-blue-800 hover:underline underline-offset-1"
            >
              https://digital-audimeter.vercel.app/
              <FaExternalLinkAlt />
            </Link>
            <div className="mt-5">
              <div className="m-1 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900  dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 gap-1">
                <FaReact className="text-lg text-cyan-500" />
                React
              </div>
              <div className="m-1 mb-4 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900  dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 gap-1">
                <SiMongodb className="text-lg text-emerald-400" />
                MongoDB
              </div>
            </div>
          </div>
        </div>
        <hr className="border-1 border-gray-400 dark:border-gray-800 my-4" />
        <div className="sm:flex flex-row-reverse items-center my-8 rounded-lg">
          <div className="w-full sm:w-1/2 my-4">
            <Image
              height={800}
              width={800}
              className="outline outline-2 outline-offset-4 outline-gray-400 dark:outline-gray-700 rounded-lg aspect-video object-cover object-center w-11/12 mx-auto"
              src="/images/game.png"
              alt="Varun"
            />
          </div>
          <div className="w-full sm:w-3/5 pl-6">
            <div className="font-semibold text-3xl gradient my-2">
              The Never Winning Game
            </div>
            <div className="text-gray-700 dark:text-gray-400 my-2">
              AI Algorithm Based never winning tic tac toe game
            </div>
            <Link
              href="https://encore-iaxq.onrender.com/home"
              target="_blank"
              className=" flex items-center gap-2 hover:text-blue-800 hover:underline underline-offset-1"
            >
              https://encore-iaxq.onrender.com/home
              <FaExternalLinkAlt />
            </Link>
            <div className="mt-5">
              <div className="m-1 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900  dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 gap-1">
                <FaHtml5 className="text-red-700 text-lg" />
                HTML
              </div>
              <div className="m-1 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900  dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 gap-1">
                <SiJavascript className="text-lg text-yellow-400" />
                JavaScript
              </div>
              <div className="m-1 mb-4 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900  dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 gap-1">
                <SiThealgorithms className="text-lg text-sky-400" />
                AI Algorithm
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact */}
      <div id="contact" className="border bg-zinc-200 dark:bg-gray-950 border-gray-400 dark:border-gray-800 rounded-lg sm:my-2 px-6 py-4 my-2">
        <div className="w-32 p-1 bg-gradient text-slate-100 rounded-xl mx-auto text-center font-semibold mt-4">
          Get in touch
        </div>
        <div className="text-gray-700 dark:text-gray-400 text-xs text-center mb-4 mt-1">
          With Me
        </div>
        <div className="text-gray-700 dark:text-gray-400 mt-4 mb-8 sm:w-3/5 mx-auto text-center">
          What&#39;s next? Feel free to reach out me if you&#39;re looking for a
          developer, have aquery, or simply want to connect.
        </div>
        <div className="flex items-center justify-center gap-2 sm:gap-4 text-lg sm:text-2xl font-semibold my-4">
          <div className="text-2xl sm:text-3xl">
            <HiOutlineMail />
          </div>
          <div className="border-l-2 border-gray-400 dark:border-gray-800 px-2 sm:px-4">
            <div className="flex items-center gap-3">
              a.varungupta23@gmail.com <ContentCopyBtn copy={"email1"} />
            </div>
            <div className="flex items-center gap-3 pl-1">
              varunvaatsalya@gmail.com <ContentCopyBtn copy={"email2"} />
            </div>
          </div>
        </div>
        <hr className="w-3/5 mx-auto border border-gray-400 dark:border-gray-800" />
        <div className="flex gap-4 items-center justify-center my-4 font-semibold text-2xl">
          <RiPhoneFill />
          +91 7800190130 <ContentCopyBtn copy={"phone"} />
        </div>
        <div className="mx-auto pt-1 pb-6">
          <div className="text-center text-gray-700 dark:text-gray-400 my-4">
            You may also find me on these Platforms!
          </div>
          <div className="flex items-center gap-6 justify-center text-gray-700 dark:text-gray-400 text-xl ">
            <Link
              className="hover:text-orange-500"
              href="https://www.linkedin.com/in/varunvaatsalya/"
              target="_blank"
              rel="noopener"
            >
              <FaLinkedin />
            </Link>
            <Link
              className="hover:text-orange-500"
              href="https://www.instagram.com/varunvaatsalya/"
              target="_blank"
              rel="noopener"
            >
              <FaInstagram />
            </Link>
            <Link
              className="hover:text-orange-500"
              href="https://twitter.com/varunvaatsalya/"
              target="_blank"
              rel="noopener"
            >
              <RiTwitterXFill />
            </Link>
            <Link
              className="hover:text-orange-500"
              href="https://github.com/varunvaatsalya/"
              target="_blank"
              rel="noopener"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
