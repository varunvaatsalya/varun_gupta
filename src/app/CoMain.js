
import { TbBrandFiverr } from "react-icons/tb";
function CoMain() {
  return (
    <>
      <div className="bg-zinc-200 dark:bg-gray-950 w-full border border-gray-400 dark:border-gray-800 rounded-lg h-48 flex flex-col justify-center items-center">
          <TbBrandFiverr className="text-5xl text-green-200 dark:text-green-950"/>
<div className="text-3xl font-semibold text-zinc-400 dark:text-gray-800">Coming Soon</div>
      </div>
      <a
        href="https://drive.google.com/file/d/1vT4Hg6EnMgabccPks2AA8jb3fLt-fDJd/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full h-12 rounded-md text-lg border border-gray-400 dark:border-gray-800 font-semibold text-pink-500 hover:text-orange-500 my-2 bg-zinc-200 dark:bg-gray-950 flex justify-center items-center">
          Download CV
        </div>
      </a>
    </>
  );
}

export default CoMain;
