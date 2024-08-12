"use client";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
export default function Dropdown() {
  const [open, setOpen] = useState(false);

  useEffect(() => {}, [open]);

  function toggleOpen() {
    setOpen(!open);
  }
  return (
    <>
      <div className="relative">
        <button className="p-2 border border-gray-400 dark:border-gray-700 text-slate-500 dark:text-slate-400 w-10 h-10 rounded-lg">
          <FaBars className="mx-auto" onClick={toggleOpen} />
        </button>
        <>
          <div
            className={`absolute w-44 p-2 rounded-lg border border-gray-400 dark:border-gray-700 bg-zinc-200 dark:bg-black my-2 right-0 transition-transform duration-500 ${
              open
                ? "transform scale-100"
                : "transform scale-0 -translate-y-full"
            }`}
          >
            <a href="#projects">
              <button
                className="w-full h-8 rounded-lg hover:bg-gray-300 hover:dark:bg-gray-900"
                onClick={toggleOpen}
              >
                Projects
              </button>
            </a>
            <a href="#contact">
              <button
                className="w-full h-8 rounded-lg hover:bg-gray-300 hover:dark:bg-gray-900"
                onClick={toggleOpen}
              >
                Contacts
              </button>
            </a>
            <hr className="border-gray-400 dark:border-gray-700 w-4/5 mx-auto block max-lg:hidden" />
            <a href="#freelancing">
              <button
                className="w-full h-8 rounded-lg hover hover:bg-green-5000 text-green-500 hover:text-green-700 flex justify-center items-center gap-2 pr-2 opacity-60 "
                onClick={toggleOpen}
              >
                <TbBrandFiverr /> Fiverr Profile
              </button>
            </a>
            <hr className="border-gray-400 dark:border-gray-700 w-4/5 mx-auto hidden max-lg:block" />
            <a
              href="https://drive.google.com/file/d/1vT4Hg6EnMgabccPks2AA8jb3fLt-fDJd/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="w-full h-8 rounded-lg hover hover:bg-pink-500 text-pink-500 hover:text-gray-50 hidden max-lg:block"
                onClick={toggleOpen}
              >
                Download CV
              </button>
            </a>
          </div>
        </>
      </div>
    </>
  );
}
