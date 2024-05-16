"use client";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
export default function Dropdown() {
  const [open, setOpen] = useState(false);
  useEffect(()=>{},[open]);
  return (
    <>
    <div className="relative">
      <button className="p-2 border border-gray-400 dark:border-gray-700 text-slate-500 dark:text-slate-400 w-10 h-10 rounded-lg">
        <FaBars
          className="mx-auto"
          onClick={() => {
            setOpen(!open);
          }}
        />
      </button>
      {open ? 
      <>
      <div className="absolute w-44 p-2 rounded-lg border border-gray-400 dark:border-gray-700 bg-zinc-300 dark:bg-black my-2 right-0">
        <button className="w-full h-8 rounded-lg hover:bg-gray-400 hover:dark:bg-gray-700">Copy</button>
        <button className="w-full h-8 rounded-lg hover:bg-gray-400 hover:dark:bg-gray-700">Paste</button>
        <button className="w-full h-8 rounded-lg hover:bg-gray-400 hover:dark:bg-gray-700">Theme</button>
        <button className="w-full h-8 rounded-lg hover hover:bg-red-500 text-red-500 hover:text-gray-50">Delete</button>
      </div>
      </> : <></>}</div>
    </>
  );
}
