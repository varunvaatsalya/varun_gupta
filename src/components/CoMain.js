import Link from "next/link";
import { TbBrandFiverr } from "react-icons/tb";
import resume from "../data/resume.json";
import FiverrGigsCarousel from "./FiverrGigsCarousel";

function CoMain() {
  const gigs = resume.fiverrGigs ?? [];

  return (
    <>
      <div
        id="freelancing"
        className="bg-zinc-200 dark:bg-gray-950 w-full border border-gray-400 dark:border-gray-800 rounded-lg flex flex-col justify-center items-center"
      >
        <Link
          href={resume.fiverrProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="View Fiverr profile"
          aria-label="View my Fiverr profile (opens in new tab)"
          className="group flex gap-1 w-full items-center px-2 my-1 font-bold text-gray-700 dark:text-gray-300"
        >
          <TbBrandFiverr
            className="text-2xl text-green-600 dark:text-green-500 outline outline-2 outline-offset-2 outline-gray-400 dark:outline-gray-700 rounded-full m-2"
            aria-hidden="true"
          />
          <span className="group-hover:text-green-600 dark:group-hover:text-green-500 group-hover:underline underline-offset-2">
            {resume.fiverrLabel}
          </span>
        </Link>

        <FiverrGigsCarousel gigs={gigs} />

        <Link
          href="/hire"
          className="text-lg font-bold py-2 text-center text-pink-500 hover:text-orange-500 hover:underline underline-offset-2"
        >
          Hire Me
        </Link>
      </div>

      <Link
        href="/resume"
        aria-label="View Varun Gupta's resume"
        className="group my-2 w-full border border-gray-400 dark:border-gray-800 rounded-lg overflow-hidden bg-zinc-200 dark:bg-gray-950 block"
      >
        <div className="relative w-full aspect-[16/9] max-h-56 max-lg:px-4 max-lg:pt-4 overflow-hidden bg-zinc-300 dark:bg-gray-900">
          {/* Drive thumbnail – unoptimized because Drive redirects */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resume.cvThumbnailUrl}
            alt="Preview of Varun Gupta's resume"
            className="h-full w-full rounded-t-lg object-cover object-top transition-transform duration-150 ease-in group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex h-12 items-center justify-center text-lg font-semibold text-pink-500 group-hover:text-orange-500">
          View Resume
        </div>
      </Link>
    </>
  );
}

export default CoMain;
