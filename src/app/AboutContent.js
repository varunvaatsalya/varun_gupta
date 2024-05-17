import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
});

function AboutContent() {
  return (
    <>
      <div className={robotoMono.className + " p-4 text-sm font-semibold"}>
        <div className="">
          <span className="text-blue-500">class</span>{" "}
          <span className="text-emerald-500">AboutMe</span>:
        </div>
        <div className="px-8"><span className="text-blue-500">def</span> <span className="text-yellow-200">__init__</span><span className="text-yellow-500">(<span className="text-sky-400">self</span>)</span>:</div>
      </div>
    </>
  );
}

export default AboutContent;
