import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
});

function AboutContent() {
  return (
    <>
      <div className={robotoMono.className + " p-4 pb-8 text-sm font-semibold"}>
        <div className="">
          <span className="text-blue-500">class</span>{" "}
          <span className="text-emerald-500">Freelancer</span>:
        </div>
        <div className="pl-8 border-l border-white">
          <div className="">
            <span className="text-blue-500">def</span>{" "}
            <span className="text-yellow-200">__init__</span>
            <span className="text-yellow-500">
              (<span className="text-sky-400">self</span>)
            </span>
            :
          </div>
          <div className="pl-8 border-l border-white">
            <div className="text-sky-400">
              self<span className="text-white">.</span>location{" "}
              <span className="text-white"> = </span>
              <span className="text-orange-700">"Lucknow, India"</span>
            </div>
            <div className="text-sky-400">
              self<span className="text-white">.</span>passion{" "}
              <span className="text-white"> = </span>
              <span className="text-orange-700">
                "Dedicated to bringing the future of web development to life"
              </span>
            </div>
            <div className="text-sky-400">
              self<span className="text-white">.</span>expertise{" "}
              <span className="text-white"> = </span>
              <span className="text-yellow-500">[</span>
            </div>
            <div className="pl-8 border-l border-white">
              <div className="text-orange-700">
                "Crafting cutting-edge backend systems"
                <span className="text-white">,</span>
              </div>
              <div className="text-orange-700">
                "Developing robust, scalable, and optimized web applications"
                <span className="text-white">,</span>
              </div>
              <div className="text-orange-700">
                "Ensuring top-tier performance and reliability"
              </div>
            </div>
            <div className="text-yellow-500">]</div>
            <div className="text-sky-400">
              self<span className="text-white">.</span>mission{" "}
              <span className="text-white"> = </span>
              <span className="text-orange-700">
                "Join me on a journey to build the digital backbone that powers
                tomorrow's most innovative experiences."
              </span>
            </div>
            <div className="text-sky-400">
              self<span className="text-white">.</span>learning{" "}
              <span className="text-white"> = </span>
              <span className="text-orange-700">
                "Machine Learning Development"
              </span>
            </div>
          </div>
          <div className=" mt-4">
            <span className="text-blue-500">def</span>{" "}
            <span className="text-yellow-200">display_profile</span>
            <span className="text-yellow-500">
              (<span className="text-sky-400">self</span>)
            </span>
            :
          </div>
          <div className="pl-8 border-l border-white">
            <div className="text-sky-400">
              profile{" "}
              <span className="text-white"> = </span>
              <span className="text-yellow-500">(</span>
            </div>
            <div className="pl-8 border-l border-white">
              <div className=""><span className="text-blue-500">f</span><span className="text-orange-700">"Location: </span><span className="text-pink-500">&#123;<span className="text-sky-400">self<span className="text-white">.</span>location</span>&#125;</span><span className="text-blue-500">\n</span><span className="text-orange-700">"</span></div>
              <div className=""><span className="text-blue-500">f</span><span className="text-orange-700">"Passion: </span><span className="text-pink-500">&#123;<span className="text-sky-400">self<span className="text-white">.</span>passion</span>&#125;</span><span className="text-blue-500">\n</span><span className="text-orange-700">"</span></div>
              <div className="text-white">
              <span className="text-orange-700">"Misson:<span className="text-blue-500">\n</span>  - " <span className="text-white"> + </span>"<span className="text-blue-500">\n</span> - "</span><span> .</span><span className="text-yellow-200">join</span><span className="text-pink-500">(<span className="text-sky-400">self<span className="text-white">.</span>expertise</span>)</span> + <span className="text-orange-700">"<span className="text-blue-500">\n</span>"</span>
              </div>
              <div className=""><span className="text-blue-500">f</span><span className="text-orange-700">"Misson: </span><span className="text-pink-500">&#123;<span className="text-sky-400">self<span className="text-white">.</span>mission</span>&#125;</span><span className="text-blue-500">\n</span><span className="text-orange-700">"</span></div>
              <div className=""><span className="text-blue-500">f</span><span className="text-orange-700">"Curently Learning: </span><span className="text-pink-500">&#123;<span className="text-sky-400">self<span className="text-white">.</span>learning</span>&#125;</span><span className="text-blue-500">\n</span><span className="text-orange-700">"</span></div>
            </div>
            <div className="text-yellow-500">)</div>
            <div className="">
            <span className="text-yellow-200">print</span>
            <span className="text-yellow-500">
              (<span className="text-sky-400">profile</span>)
            </span>
          </div>
          </div>
        </div>
        <div className="mt-4 text-white"><span className="text-pink-500">if </span><span className="text-sky-400">__name__ </span>  == <span className="text-orange-700">"__main__"</span>:</div>
        <div className="pl-8 border-l border-white text-white">
          <div ><span className="text-sky-400">freelancer</span> = <span className="text-emerald-500">Freelancer</span><span className="text-yellow-500">()</span></div>
          <div ><span className="text-sky-400">freelancer</span>.<span className="text-yellow-200">display_profile</span><span className="text-yellow-500">()</span></div>
        </div>
      </div>
    </>
  );
}

export default AboutContent;
