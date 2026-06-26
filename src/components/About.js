"use client";

import { TiArrowUnsorted } from "react-icons/ti";
import { GoFileDirectoryFill } from "react-icons/go";
// import ContentCopyBtn from "../app/ContentCopyBtn";
import SentenceList from "./CodeRun";
import AboutContent from "./AboutContent";
import { FaCircle, FaCode, FaMinus, FaPlay, FaPlus } from "react-icons/fa";
import { useState } from "react";

function About() {
  const [showRes, setShowRes] = useState(false);

  return (
    <section aria-labelledby="about-file-label">
      <div className="border bg-gray-950 border-gray-400 dark:border-gray-800 rounded-lg sm:my-2 my-2">
        <div className="h-10 bg-zinc-900 rounded-t-lg px-4 flex justify-between">
          <div className="flex gap-2 items-center h-full" aria-hidden="true">
            <div className="relative">
              <FaCircle className="text-red-500" />
              <FaPlus className="absolute rotate-45 top-0 text-red-500 hover:text-red-900" />
            </div>
            <div className="relative">
              <FaCircle className="text-yellow-500" />
              <FaMinus className="absolute top-0 text-yellow-500 hover:text-yellow-900" />
            </div>
            <div className="relative">
              <FaCircle className="text-green-500" />
              <TiArrowUnsorted className="absolute rotate-45 top-0 text-green-500 hover:text-green-900" />
            </div>
          </div>
          <div
            id="about-file-label"
            className="flex gap-2 items-center text-lg text-gray-100"
          >
            <GoFileDirectoryFill className="text-sky-500" aria-hidden="true" />
            <span>About_Me.py</span>
          </div>
          <div className="text-gray-100 flex items-center gap-2">
            <button
              type="button"
              className="h-6 px-2 rounded-lg text-sm flex gap-2 items-center border border-gray-500"
              onClick={() => {
                setShowRes(!showRes);
              }}
              aria-pressed={showRes}
              aria-label={showRes ? "Switch to code view" : "Run code and see output"}
            >
              {showRes ? (
                <>
                  <FaCode aria-hidden="true" /> <span>CODE</span>
                </>
              ) : (
                <>
                  <FaPlay aria-hidden="true" /> <span>RUN</span>
                </>
              )}
            </button>
          </div>
        </div>
        {showRes ? <SentenceList /> : <AboutContent />}
      </div>
    </section>
  );
}

export default About;
