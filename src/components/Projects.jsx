'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink, FiGlobe, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import SectionHeading from "./SectionHeading.jsx";
import { projects } from "../data/projects.js";
import "./Projects3DDeck.css";

// Distinct bright tech colors matching the reference design (Python, PyTorch, Computer Vision style)
const techColorMap = {
  React: "text-[#61DAFB]",
  "Tailwind CSS": "text-[#38BDF8]",
  "Web Speech API": "text-[#F472B6]",
  "react-i18next": "text-[#A78BFA]",
  "Node.js": "text-[#4ADE80]",
  Express: "text-[#E2E8F0]",
  MySQL: "text-[#38BDF8]",
  "Spring Boot": "text-[#6DB33F]",
  "Spring AI": "text-[#C084FC]",
  "Groq API": "text-[#FB923C]",
  "Spring Security": "text-[#34D399]",
  Thymeleaf: "text-[#22C55E]",
  "Chart.js": "text-[#F43F5E]",
  JWT: "text-[#FB7185]",
  Vite: "text-[#C084FC]",
  Sequelize: "text-[#38BDF8]",
  "Framer Motion": "text-[#F472B6]",
  "Three.js": "text-[#FBBF24]",
};

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const count = projects.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? count - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === count - 1 ? 0 : prev + 1));
  };

  // Keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="projects" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_70%)]" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeading
            eyebrow="04 · Featured Work"
            title="Engineered Systems."
            description="A grand 3D showcase of full-stack Spring Boot, React, and targeted AI applications, layered in depth."
          />

          {/* Quick Counter Pill */}
          <div className="hidden sm:flex items-center gap-2 mb-2 font-mono text-xs text-ink-faint">
            <span className="font-bold text-ink">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span>/</span>
            <span>{String(count).padStart(2, "0")} Systems</span>
          </div>
        </div>

        {/* Grand 3D Depth Deck Container */}
        <div className="projects-deck-wrapper mt-10">
          <div className="projects-deck-stage">
            {projects.map((project, i) => {
              // Calculate relative wrapped offset for circular 3D depth layering
              let diff = (i - currentIndex + count) % count;
              if (diff > count / 2) diff -= count;

              const isActive = diff === 0;
              const isLeft = diff === -1;
              const isRight = diff === 1;
              const isVisible = Math.abs(diff) <= 1;

              // 3D transform calculations: Active card is strictly in FRONT with zIndex 50 and translateZ(80px)
              let translateX = "0%";
              let translateZ = 80;
              let scale = 1;
              let zIndex = 50;
              let opacity = 1;
              let blur = "0px";

              if (isLeft) {
                translateX = "-48%";
                translateZ = -140;
                scale = 0.86;
                zIndex = 10;
                opacity = 0.35;
                blur = "3px";
              } else if (isRight) {
                translateX = "48%";
                translateZ = -140;
                scale = 0.86;
                zIndex = 10;
                opacity = 0.35;
                blur = "3px";
              } else if (!isActive) {
                translateX = diff > 0 ? "70%" : "-70%";
                translateZ = -220;
                scale = 0.72;
                zIndex = 5;
                opacity = 0;
                blur = "6px";
              }

              const indexStr = String(i + 1).padStart(2, "0");
              const isVercelLive = project.live && project.live.includes("vercel.app");

              return (
                <div
                  key={project.id}
                  onClick={() => {
                    if (isLeft) handlePrev();
                    if (isRight) handleNext();
                  }}
                  style={{
                    transform: `translate3d(${translateX}, 0, ${translateZ}px) scale(${scale})`,
                    zIndex,
                    opacity,
                    filter: `blur(${blur})`,
                    cursor: isActive ? "default" : "pointer",
                    pointerEvents: isVisible ? "auto" : "none",
                  }}
                  className={`projects-deck-card border border-indigo-500/30 dark:border-indigo-400/25 bg-[#0B0F19] text-white p-6 sm:p-9 md:p-11 flex flex-col justify-between overflow-hidden transition-all duration-500 ${
                    isActive
                      ? "shadow-[0_35px_90px_-15px_rgba(0,0,0,0.95)] ring-1 ring-white/10"
                      : "shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:opacity-60"
                  }`}
                >
                  {/* Top neon sheen line */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />

                  {/* Card Content Grid */}
                  <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                    {/* Left Column: Number, Title, Description, Colored Tech Tags & Actions (7 Cols) */}
                    <div className="lg:col-span-7 flex flex-col justify-between order-2 lg:order-1">
                      <div>
                        {/* Big Card Number matching reference (01, 02, 03...) */}
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-400/80 tracking-tight">
                            {indexStr}
                          </span>

                          {isVercelLive ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[0.68rem] font-semibold text-emerald-400">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Live Deployment
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/60 bg-slate-800/50 px-3 py-1 font-mono text-[0.68rem] text-slate-300">
                              <span className="h-1.5 w-1.5 rounded-full bg-brass animate-pulse" />
                              Production Code
                            </span>
                          )}
                        </div>

                        {/* Project Title */}
                        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
                          {project.title}
                        </h3>

                        {/* Concise Project Description */}
                        <p className="mt-3 text-sm sm:text-[0.98rem] leading-relaxed text-slate-300 max-w-xl font-normal">
                          {project.description}
                        </p>

                        {/* Distinct Colored Tech Tags matching reference (Python, PyTorch style) */}
                        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                          {project.stack.map((tech) => {
                            const colorClass = techColorMap[tech] || "text-brass";
                            return (
                              <span
                                key={tech}
                                className={`font-mono text-xs sm:text-sm font-bold tracking-wide ${colorClass} transition-transform hover:scale-105`}
                              >
                                {tech}
                              </span>
                            );
                          })}
                        </div>

                        {/* Architectural Metrics */}
                        {project.metrics && project.metrics.length > 0 && (
                          <div className="mt-5 flex flex-wrap gap-4 pt-4 border-t border-slate-800">
                            {project.metrics.map((m) => (
                              <div key={m.label} className="flex items-baseline gap-2">
                                <span className="font-mono text-[0.68rem] uppercase tracking-wider text-slate-400">
                                  {m.label}:
                                </span>
                                <span className="font-mono text-xs font-bold text-white">
                                  {m.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Action Buttons: GitHub Icon & Live Demo */}
                      <div className="mt-7 flex flex-wrap items-center gap-3">
                        {/* GitHub Source Code Icon Button */}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`${project.title} GitHub Source Code`}
                          title="View Source on GitHub"
                          className="btn-silver-line group flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900/90 text-white shadow-md hover:bg-slate-800 transition-all duration-300 hover:scale-110"
                        >
                          <FaGithub size={20} className="text-white transition-transform duration-300 group-hover:rotate-12" />
                        </a>

                        {/* Live Site / Live Demo Button */}
                        <a
                          href={project.live || "#"}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="btn-silver-line group inline-flex items-center gap-2 rounded-full bg-deep px-5 py-2.5 font-mono text-xs sm:text-sm font-semibold text-white shadow-card hover:bg-brass transition-all duration-300"
                        >
                          <FiGlobe size={15} className="text-brass-light transition-transform duration-300 group-hover:rotate-12" />
                          <span>{isVercelLive ? "Visit Live Site" : "Live Demo"}</span>
                          <FiExternalLink size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </div>
                    </div>

                    {/* Right Column: Large Rounded Image Preview (5 Cols) */}
                    <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2">
                      <div className="w-full aspect-[16/10] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#070A12] shadow-2xl relative group-hover:border-indigo-400/30 transition-all duration-300">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={`${project.title} Preview`}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center font-mono text-xs text-slate-500">
                            No preview available
                          </div>
                        )}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3D Deck Controls (Arrows & Dot Indicators) */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous Project"
              className="btn-silver-line flex h-11 w-11 items-center justify-center rounded-full bg-cream-soft text-ink shadow-sm transition-all duration-300 hover:text-brass hover:scale-110"
            >
              <FiChevronLeft size={20} />
            </button>

            {/* Indicator dots */}
            <div className="flex items-center gap-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to project ${idx + 1}`}
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
              aria-label="Next Project"
              className="btn-silver-line flex h-11 w-11 items-center justify-center rounded-full bg-cream-soft text-ink shadow-sm transition-all duration-300 hover:text-brass hover:scale-110"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
