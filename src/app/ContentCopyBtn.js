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

  function copyToggle(content) {
    if ((content == "code")) {
      navigator.clipboard.writeText(codeText).then(() => {
        setIsCopy(!isCopy);
      });
    } else if ((content == "email1")) {
      navigator.clipboard.writeText("a.varungupta23@gmail.com").then(() => {
        setIsCopy(!isCopy);
      });
    } else if ((content == "email2")) {
      navigator.clipboard.writeText("varunvaatsalya@gmail.com").then(() => {
        setIsCopy(!isCopy);
      });
    } else if ((content == "phone")) {
      navigator.clipboard.writeText("+917800190130").then(() => {
        setIsCopy(!isCopy);
      });
    }
  }
  return (
    <>
      {isCopy ? (
        <FaCheck className="text-green-400" />
      ) : (
        <TbCopy
          className="cursor-pointer"
          onClick={() => {
            copyToggle(props.copy);
          }}
        />
      )}
    </>
  );
}

export default ContentCopyBtn;
