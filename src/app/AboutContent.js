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
              <span className="text-orange-700">&#34;Lucknow, India&#34;</span>
            </div>
            <div className="text-sky-400">
              self<span className="text-white">.</span>passion{" "}
              <span className="text-white"> = </span>
              <span className="text-orange-700">
                &#34;Dedicated to bringing the future of web development to
                life&#34;
              </span>
            </div>
            <div className="text-sky-400">
              self<span className="text-white">.</span>expertise{" "}
              <span className="text-white"> = </span>
              <span className="text-yellow-500">[</span>
            </div>
            <div className="pl-8 border-l border-white">
              <div className="text-orange-700">
                &#34;Crafting cutting-edge backend systems&#34;
                <span className="text-white">,</span>
              </div>
              <div className="text-orange-700">
                &#34;Developing robust, scalable, and optimized web
                applications&#34;
                <span className="text-white">,</span>
              </div>
              <div className="text-orange-700">
                &#34;Ensuring top-tier performance and reliability&#34;
              </div>
            </div>
            <div className="text-yellow-500">]</div>
            <div className="text-sky-400">
              self<span className="text-white">.</span>mission{" "}
              <span className="text-white"> = </span>
              <span className="text-orange-700">
                &#34;Join me on a journey to build the digital backbone that
                powers tomorrow&#39;s most innovative experiences.&#34;
              </span>
            </div>
            <div className="text-sky-400">
              self<span className="text-white">.</span>learning{" "}
              <span className="text-white"> = </span>
              <span className="text-orange-700">
                &#34;Machine Learning Development&#34;
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
              profile <span className="text-white"> = </span>
              <span className="text-yellow-500">(</span>
            </div>
            <div className="pl-8 border-l border-white">
              <div className="">
                <span className="text-blue-500">f</span>
                <span className="text-orange-700">&#34;Location: </span>
                <span className="text-pink-500">
                  &#123;
                  <span className="text-sky-400">
                    self<span className="text-white">.</span>location
                  </span>
                  &#125;
                </span>
                <span className="text-blue-500">\n</span>
                <span className="text-orange-700">&#34;</span>
              </div>
              <div className="">
                <span className="text-blue-500">f</span>
                <span className="text-orange-700">&#34;Passion: </span>
                <span className="text-pink-500">
                  &#123;
                  <span className="text-sky-400">
                    self<span className="text-white">.</span>passion
                  </span>
                  &#125;
                </span>
                <span className="text-blue-500">\n</span>
                <span className="text-orange-700">&#34;</span>
              </div>
              <div className="text-white">
                <span className="text-orange-700">
                  &#34;Misson:<span className="text-blue-500">\n</span> - &#34;{" "}
                  <span className="text-white"> + </span>&#34;
                  <span className="text-blue-500">\n</span> - &#34;
                </span>
                <span> .</span>
                <span className="text-yellow-200">join</span>
                <span className="text-pink-500">
                  (
                  <span className="text-sky-400">
                    self<span className="text-white">.</span>expertise
                  </span>
                  )
                </span>{" "}
                +{" "}
                <span className="text-orange-700">
                  &#34;<span className="text-blue-500">\n</span>&#34;
                </span>
              </div>
              <div className="">
                <span className="text-blue-500">f</span>
                <span className="text-orange-700">&#34;Misson: </span>
                <span className="text-pink-500">
                  &#123;
                  <span className="text-sky-400">
                    self<span className="text-white">.</span>mission
                  </span>
                  &#125;
                </span>
                <span className="text-blue-500">\n</span>
                <span className="text-orange-700">&#34;</span>
              </div>
              <div className="">
                <span className="text-blue-500">f</span>
                <span className="text-orange-700">
                  &#34;Curently Learning:{" "}
                </span>
                <span className="text-pink-500">
                  &#123;
                  <span className="text-sky-400">
                    self<span className="text-white">.</span>learning
                  </span>
                  &#125;
                </span>
                <span className="text-blue-500">\n</span>
                <span className="text-orange-700">&#34;</span>
              </div>
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
        <div className="mt-4 text-white">
          <span className="text-pink-500">if </span>
          <span className="text-sky-400">__name__ </span> =={" "}
          <span className="text-orange-700">&#34;__main__&#34;</span>:
        </div>
        <div className="pl-8 border-l border-white text-white">
          <div>
            <span className="text-sky-400">freelancer</span> ={" "}
            <span className="text-emerald-500">Freelancer</span>
            <span className="text-yellow-500">()</span>
          </div>
          <div>
            <span className="text-sky-400">freelancer</span>.
            <span className="text-yellow-200">display_profile</span>
            <span className="text-yellow-500">()</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutContent;
