import { useEffect, useState } from "react";

/**
 * Types out an array of lines one character at a time, looping forever.
 * Returns the lines completed so far, plus the in-progress line.
 */
export function useTypewriter(lines, { speed = 28, pause = 1400 } = {}) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!lines.length) return;
    const currentLine = lines[lineIndex];

    if (charIndex < currentLine.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), speed);
      return () => clearTimeout(t);
    }

    if (lineIndex < lines.length - 1) {
      const t = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, pause / 3);
      return () => clearTimeout(t);
    }

    setDone(true);
    const resetTimer = setTimeout(() => {
      setLineIndex(0);
      setCharIndex(0);
      setDone(false);
    }, pause);
    return () => clearTimeout(resetTimer);
  }, [charIndex, lineIndex, lines, speed, pause, done]);

  const completedLines = lines.slice(0, lineIndex);
  const activeLine = lines[lineIndex]?.slice(0, charIndex) ?? "";

  return { completedLines, activeLine, lineIndex };
}
