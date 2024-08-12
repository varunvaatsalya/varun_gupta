import Image from "next/image";
import { TbBrandFiverr } from "react-icons/tb";
function CoMain() {
  return (
    <>
      <div id="freelancing"
        className="bg-zinc-200 dark:bg-gray-950 w-full border border-gray-400 dark:border-gray-800 rounded-lg flex flex-col justify-center items-center"
      >
        <div className="flex gap-1 w-full items-center px-2 my-1">
          <TbBrandFiverr className="text-2xl text-green-200 dark:text-green-800 outline outline-2 outline-offset-2 outline-gray-400 dark:outline-gray-700 rounded-full m-2" />
          <div className="font-bold text-gray-400 dark:text-gray-700 ">
            fiverr.com
          </div>
        </div>
        <div className="w-full border-y border-gray-400 dark:border-gray-700 overflow-hidden">
          <Image
            height={800}
            width={800}
            src="/images/fiverr.png"
            alt="pfp"
            className="w-full py-2 lg:hover:scale-110 delay-150 ease-in duration-150"
          />
        </div>
        <a href="https://www.fiverr.com/s/8z5y2Y4"
        target="_blank"
        rel="noopener noreferrer" className="text-lg font-bold text-pink-500 hover:text-orange-500 hover:underline underline-offset-2 py-2">
          Hire! me for your Project
        </a>
      </div>
      <div className="bg-zinc-200 dark:bg-gray-950 w-full border border-gray-400 dark:border-gray-800 rounded-lg h-48 flex flex-col justify-center items-center my-2 max-lg:hidden">
        <TbBrandFiverr className="text-5xl text-green-200 dark:text-green-950" />
        <div className="text-2xl font-bold text-zinc-400 dark:text-gray-800 hover:scale-105">
          App Developement
        </div>
        <div className="text-3xl font-semibold text-zinc-400 dark:text-gray-800">
          Coming Soon
        </div>
      </div>

      <a
        href="https://drive.google.com/file/d/1vT4Hg6EnMgabccPks2AA8jb3fLt-fDJd/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full h-12 rounded-md text-lg border border-gray-400 dark:border-gray-800 font-semibold text-pink-500 hover:text-orange-500 my-2 bg-zinc-200 dark:bg-gray-950 flex justify-center items-center max-lg:hidden">
          Download CV
        </div>
      </a>
    </>
  );
}

export default CoMain;
