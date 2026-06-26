"use client";
import { useEffect, useState } from "react";
import { TbCopy } from "react-icons/tb";
import { FaCheck } from "react-icons/fa";

function ContentCopyBtn(props) {
  const [isCopy, setIsCopy] = useState(false);

  useEffect(() => {
    if (isCopy) {
      setTimeout(() => {
        setIsCopy(!isCopy);
      }, 2000);
    }
  }, [isCopy]);

  let codeText = `
class Freelancer:
    def __init__(self):
        self.location = "Lucknow, India"
        self.passion = "Dedicated to bringing the future of web development to life"
        self.expertise = [
            "Crafting cutting-edge backend systems",
            "Developing robust, scalable, and optimized web applications",
            "Ensuring top-tier performance and reliability"
        ]
        self.mission = "Join me on a journey to build the digital backbone that powers tomorrow's most innovative experiences."
        self.learning = "Machine Learning Development"

    def display_profile(self):
        profile = (
            f"Location: {self.location}\\n"
            f"Passion: {self.passion}\\n"
            "Expertise:\\n  - " + "\\n  - ".join(self.expertise) + "\\n"
            f"Mission: {self.mission}\\n"
            f"Currently Learning: {self.learning}"
        )
        print(profile)

if __name__ == "__main__":
    freelancer = Freelancer()
    freelancer.display_profile()
`;

  const contentMap = {
    code: codeText,
    email1: "a.varungupta23@gmail.com",
    email2: "varunvaatsalya@gmail.com",
    phone: "+917800190130",
  };

  function copyToggle(content) {
    const text = contentMap[content];
    if (text) {
      navigator.clipboard.writeText(text).then(() => {
        setIsCopy(true);
      });
    }
  }

  return (
    <button
      type="button"
      onClick={() => copyToggle(props.copy)}
      aria-label={isCopy ? "Copied to clipboard" : "Copy to clipboard"}
      aria-pressed={isCopy}
      className="inline-flex items-center"
      title={isCopy ? "Copied!" : "Copy to clipboard"}
    >
      {isCopy ? (
        <FaCheck className="text-green-400" aria-hidden="true" />
      ) : (
        <TbCopy className="cursor-pointer" aria-hidden="true" />
      )}
    </button>
  );
}

export default ContentCopyBtn;
