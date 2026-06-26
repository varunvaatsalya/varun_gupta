import Image from "next/image";
import Link from "next/link";
import { TbBrandFiverr } from "react-icons/tb";

function CoMain() {
  return (
    <>
      <div
        id="freelancing"
        className="bg-zinc-200 dark:bg-gray-950 w-full border border-gray-400 dark:border-gray-800 rounded-lg flex flex-col justify-center items-center"
      >
        <div className="flex gap-1 w-full items-center px-2 my-1">
          <TbBrandFiverr
            className="text-2xl text-green-200 dark:text-green-800 outline outline-2 outline-offset-2 outline-gray-400 dark:outline-gray-700 rounded-full m-2"
            aria-hidden="true"
          />
          <span className="font-bold text-gray-400 dark:text-gray-700">
            fiverr.com
          </span>
        </div>
        <div className="w-full border-y border-gray-400 dark:border-gray-700 overflow-hidden">
          <Image
            height={800}
            width={800}
            src="/images/fiverr.png"
            alt="Varun Gupta's Fiverr profile – freelance full-stack web development services"
            className="w-full py-2 lg:hover:scale-110 delay-150 ease-in duration-150"
            loading="lazy"
          />
        </div>
        <Link
          href="https://www.fiverr.com/s/8z5y2Y4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-bold text-pink-500 hover:text-orange-500 hover:underline underline-offset-2 py-2"
          aria-label="Hire Varun Gupta on Fiverr for your web development project (opens in new tab)"
        >
          Hire! me for your Project
        </Link>
      </div>

      <div className="bg-zinc-200 dark:bg-gray-950 w-full border border-gray-400 dark:border-gray-800 rounded-lg h-48 flex flex-col justify-center items-center my-2 max-lg:hidden">
        <TbBrandFiverr
          className="text-5xl text-green-200 dark:text-green-950"
          aria-hidden="true"
        />
        <p className="text-2xl font-bold text-zinc-400 dark:text-gray-800 hover:scale-105">
          App Developement
        </p>
        <p className="text-3xl font-semibold text-zinc-400 dark:text-gray-800">
          Coming Soon
        </p>
      </div>

      <a
        href="https://drive.google.com/file/d/1vT4Hg6EnMgabccPks2AA8jb3fLt-fDJd/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Varun Gupta's CV (opens Google Drive in new tab)"
      >
        <div className="w-full h-12 rounded-md text-lg border border-gray-400 dark:border-gray-800 font-semibold text-pink-500 hover:text-orange-500 my-2 bg-zinc-200 dark:bg-gray-950 flex justify-center items-center max-lg:hidden">
          Download CV
        </div>
      </a>
    </>
  );
}

export default CoMain;
