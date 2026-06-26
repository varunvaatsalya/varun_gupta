"use client";
import { useEffect, useState } from "react";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
});

const SentenceList = () => {
  const sentences = [
    "Location: Lucknow, India",
    "Passion: Dedicated to bringing the future of web development to life",
    "Expertise:",
    "     - Crafting cutting-edge backend systems",
    "     - Developing robust, scalable, and optimized web applications",
    "     - Ensuring top-tier performance and reliability",
    "Mission: Join me on a journey to build the digital backbone that powers tomorrow's most innovative experiences.",
    "Currently Learning: Machine Learning Development",
  ];
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  const handleTypingComplete = () => {
    if (currentSentenceIndex < sentences.length - 1) {
      setCurrentSentenceIndex(currentSentenceIndex + 1);
    }
  };

  return (
    <div className={robotoMono.className+ " px-4 py-8 font-semibold text-gray-400"}>
      {sentences.map((sentence, index) => (
        <div key={index} style={{ display: index <= currentSentenceIndex ? 'block' : 'none' }}>
          {index === currentSentenceIndex ? (
            <TypingEffect sentence={sentence} onComplete={handleTypingComplete} />
          ) : (
            <div style={{ whiteSpace: 'pre-wrap' }}>{sentence}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SentenceList;

const TypingEffect = ({ sentence, onComplete }) => {
    const [text, setText] = useState('');
    const typingSpeed = 20; 
  
    useEffect(() => {
      let currentText = '';
      let charIndex = 0;
  
      const type = () => {
        if (charIndex < sentence.length) {
          currentText += sentence.charAt(charIndex);
          setText(currentText);
          charIndex++;
          setTimeout(type, typingSpeed);
        } else {
          onComplete();
        }
      };
  
      type();
    }, [sentence]);
  
    return <div style={{ whiteSpace: 'pre-wrap' }}>{text}</div>;
  };
  
//   export default TypingEffect;

// export default TypingEffect;
