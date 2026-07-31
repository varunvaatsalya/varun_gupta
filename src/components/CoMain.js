import Image from "next/image";
import Link from "next/link";
import { TbBrandFiverr } from "react-icons/tb";
import resume from "../data/resume.json";

function CoMain() {
  const gigs = resume.fiverrGigs ?? [];

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
          <Link
            href={resume.fiverrProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View Fiverr profile"
            aria-label="View Fiverr profile"
            className="font-bold text-gray-400 dark:text-gray-700 hover:text-pink-500 hover:underline underline-offset-2"
          >
            {resume.fiverrLabel}
          </Link>
        </div>

        {gigs.map((gig) => (
          <div key={gig.id} className="w-full flex flex-col items-center">
            <div className="w-full border-y border-gray-400 dark:border-gray-700 overflow-hidden">
              <Image
                height={800}
                width={800}
                src={gig.image}
                alt={gig.imageAlt}
                className="w-full py-2 lg:hover:scale-110 delay-150 ease-in duration-150"
                loading="lazy"
              />
            </div>
            <Link
              href={gig.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-pink-500 hover:text-orange-500 hover:underline underline-offset-2 py-2"
              aria-label={gig.ariaLabel}
            >
              {gig.cta}
            </Link>
          </div>
        ))}
      </div>

      <Link
        href="/resume"
        aria-label="View Varun Gupta's resume"
      >
        <div className="w-full h-12 rounded-md text-lg border border-gray-400 dark:border-gray-800 font-semibold text-pink-500 hover:text-orange-500 my-2 bg-zinc-200 dark:bg-gray-950 flex justify-center items-center max-lg:hidden">
          View Resume
        </div>
      </Link>
    </>
  );
}

export default CoMain;
