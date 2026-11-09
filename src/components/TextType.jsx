'use client';

import { useState, useEffect } from "react";

export default function TextType({
  phrases = [
    "I build with Java & Spring.",
    "Enterprise Spring Boot APIs.",
    "Full-Stack React & Spring.",
    "Thoughtful AI Integration.",
    "Scalable Microservices."
  ],
  typingSpeed = 65,
  deletingSpeed = 35,
  pauseDuration = 2200,
  className = ""
}) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer;

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayText}</span>
      <span className="inline-block w-[3px] h-[0.9em] ml-1 bg-brass animate-pulse rounded-sm align-middle" />
    </span>
  );
}

