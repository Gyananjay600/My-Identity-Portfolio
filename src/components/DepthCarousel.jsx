'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BadgeCheck, ExternalLink, ChevronLeft, ChevronRight, Award, ShieldCheck } from "lucide-react";
import "./DepthCarousel.css";

export default function DepthCarousel({ items = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!items || items.length === 0) return null;

  const count = items.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? count - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === count - 1 ? 0 : prev + 1));
  };

  return (
    <div className="depth-carousel-wrapper">
      <div className="depth-carousel-stage">
        {items.map((item, i) => {
          // Calculate relative wrapped offset
          let diff = (i - currentIndex + count) % count;
          if (diff > count / 2) diff -= count;

          const isActive = diff === 0;
          const isLeft = diff === -1;
          const isRight = diff === 1;
          const isVisible = Math.abs(diff) <= 1;

          // 3D transform properties based on offset
          let translateX = "0%";
          let rotateY = 0;
          let scale = 1;
          let zIndex = 30;
          let opacity = 1;

          if (isLeft) {
            translateX = "-48%";
            rotateY = 22;
            scale = 0.86;
            zIndex = 20;
            opacity = 0.65;
          } else if (isRight) {
            translateX = "48%";
            rotateY = -22;
            scale = 0.86;
            zIndex = 20;
            opacity = 0.65;
          } else if (!isActive) {
            translateX = diff > 0 ? "80%" : "-80%";
            rotateY = diff > 0 ? -35 : 35;
            scale = 0.7;
            zIndex = 10;
            opacity = 0;
          }

          return (
            <div
              key={item.title}
              onClick={() => {
                if (isLeft) handlePrev();
                if (isRight) handleNext();
              }}
              style={{
                transform: `translateX(${translateX}) scale(${scale}) rotateY(${rotateY}deg)`,
                zIndex,
                opacity,
                cursor: isActive ? "default" : "pointer",
                pointerEvents: isVisible ? "auto" : "none",
              }}
              className="depth-carousel-card rounded-3xl border hairline bg-cream-soft/95 dark:bg-[#111726]/95 backdrop-blur-xl p-6 sm:p-8 shadow-card dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between border-b hairline pb-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brass/30 bg-brass/10 px-3 py-1 font-mono text-xs font-semibold text-brass">
                    <ShieldCheck size={14} />
                    Verified Credential
                  </span>
                  <span className="font-mono text-xs text-ink-faint">
                    {String(i + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex items-start gap-3 mt-2">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-deep text-cream-soft shadow-sm">
                    <BadgeCheck size={22} className="text-brass" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg sm:text-xl font-bold text-ink leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-1 font-mono text-xs text-ink-soft">
                      {item.issuer}
                    </p>
                  </div>
                </div>

                {/* Tag pill if available */}
                {item.tag && (
                  <div className="mt-4 flex items-center gap-2">
                    <span className="rounded-full border hairline bg-cream/70 dark:bg-deep/70 px-3 py-0.5 font-mono text-[0.68rem] text-ink-faint">
                      Field: {item.tag}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Footer with Proper View Certificate Button */}
              <div className="pt-4 border-t hairline flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1.5 text-xs font-mono text-ink-faint">
                  <Award size={14} className="text-brass" />
                  <span>Official Certificate</span>
                </div>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => {
                    // Prevent card switch when clicking directly on view button
                    e.stopPropagation();
                  }}
                  className="btn-silver-line group inline-flex items-center gap-2 rounded-full bg-deep px-5 py-2.5 font-mono text-xs font-semibold text-cream-soft shadow-card hover:bg-brass transition-all duration-300"
                >
                  <span>{item.verifyLabel || "View Certificate"}</span>
                  <ExternalLink size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Carousel Navigation Controls */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          aria-label="Previous Certificate"
          className="btn-silver-line flex h-10 w-10 items-center justify-center rounded-full bg-cream-soft text-ink shadow-sm transition-all duration-300 hover:text-brass hover:scale-110"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Indicator dots */}
        <div className="flex items-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-brass"
                  : "w-2.5 bg-line hover:bg-ink-faint"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next Certificate"
          className="btn-silver-line flex h-10 w-10 items-center justify-center rounded-full bg-cream-soft text-ink shadow-sm transition-all duration-300 hover:text-brass hover:scale-110"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

