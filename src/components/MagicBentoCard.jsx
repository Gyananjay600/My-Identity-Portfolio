'use client';

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagicBentoCard({
  children,
  className = "",
  glowColor = "rgba(217, 169, 75, 0.18)",
  borderColor = "rgba(217, 169, 75, 0.35)",
  ...rest
}) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: -200, y: -200 });
      }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-3xl border hairline bg-cream-soft p-6 sm:p-7 shadow-card transition-all duration-500 hover:shadow-premium ${className}`}
      {...rest}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 65%)`,
        }}
      />

      {/* Dynamic Border Glow Highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow: `inset 0 0 0 1px ${borderColor}`,
        }}
      />

      {/* Silver / Chrome Sheen Line on Top Border */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 dark:via-brass/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

