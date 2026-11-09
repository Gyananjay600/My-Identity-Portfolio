'use client';

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink, FiGlobe, FiCode, FiCheckCircle } from "react-icons/fi";
import { HiSparkles, HiServerStack } from "react-icons/hi2";
import SectionHeading from "./SectionHeading.jsx";
import LaptopFrame from "./LaptopFrame.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(185,133,46,0.06),transparent_70%)]" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="04 · Featured Work"
          title="Projects in depth."
          description="Every project below is built to production standards — real databases, stateless authentication, AI integrations, and full source code."
        />

        {/* Narrative Architectural Introduction */}
        <div className="mt-8 rounded-2xl border hairline bg-cream-soft/70 dark:bg-[#111726]/70 p-5 sm:p-6 backdrop-blur-sm shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-deep text-cream-soft shadow-xs">
              <HiServerStack size={20} className="text-brass" />
            </span>
            <div>
              <p className="font-display text-sm sm:text-base font-bold text-ink">
                Full-Stack Systems Architecture Showcase
              </p>
              <p className="font-mono text-xs text-ink-soft">
                Explore the engineering details, database models, and live deployments stacked below.
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 self-start sm:self-center font-mono text-xs text-brass font-semibold">
            <HiSparkles size={14} /> Scroll to Stack Cards
          </span>
        </div>

        {/* Sticky Scroll Stack Container */}
        <div className="relative mt-12 pb-24 space-y-12 sm:space-y-16">
          {projects.map((project, i) => {
            // Progressive top offset for the sticky stack effect
            const topOffset = `calc(4.5rem + ${i * 1.5}rem)`;
            const isVercelLive = project.live && project.live.includes("vercel.app");

            return (
              <div
                key={project.id}
                style={{ top: topOffset }}
                className="sticky z-[10]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-3xl border hairline bg-cream-soft/95 dark:bg-[#111726]/95 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-[0_-12px_40px_-5px_rgba(0,0,0,0.15)] dark:shadow-[0_-12px_40px_-5px_rgba(0,0,0,0.55)] overflow-hidden transition-all duration-300 hover:border-brass/50"
                >
                  {/* Subtle decorative gradient glow behind card */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brass/10 blur-3xl" />

                  {/* Card Header Bar */}
                  <div className="flex items-center justify-between border-b hairline pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-deep text-cream-soft font-mono text-xs font-bold shadow-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-xs text-ink-faint">
                        / {String(projects.length).padStart(2, "0")} System
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {isVercelLive ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[0.68rem] font-semibold text-emerald-600 dark:text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Live on Vercel
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full border hairline bg-cream/70 dark:bg-deep/70 px-3 py-1 font-mono text-[0.68rem] text-ink-soft">
                          <span className="h-1.5 w-1.5 rounded-full bg-brass animate-pulse" />
                          Production Code
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content Grid */}
                  <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                    {/* Left: Project Details & Story (7 Cols) */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                          {project.title}
                        </h3>
                        <p className="mt-1.5 font-mono text-xs sm:text-sm font-semibold text-brass">
                          {project.tagline}
                        </p>

                        {/* Architectural description text */}
                        <div className="mt-4 rounded-2xl bg-cream/50 dark:bg-deep/40 p-4 border hairline">
                          <p className="text-xs font-mono uppercase tracking-wider text-brass font-semibold mb-1">
                            Architecture &amp; Engineering:
                          </p>
                          <p className="text-sm sm:text-[0.93rem] leading-relaxed text-ink-soft">
                            {project.description}
                          </p>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.stack.map((s) => (
                            <span
                              key={s}
                              className="rounded-full border hairline bg-cream/80 dark:bg-[#172033]/80 px-3 py-1 font-mono text-[0.7rem] text-ink-soft transition-colors hover:border-brass hover:text-ink"
                            >
                              {s}
                            </span>
                          ))}
                        </div>

                        {/* Key Metrics / Highlights */}
                        {project.metrics && project.metrics.length > 0 && (
                          <div className="mt-5 flex flex-wrap gap-4 pt-4 border-t hairline">
                            {project.metrics.map((m) => (
                              <div key={m.label} className="flex items-baseline gap-2">
                                <span className="font-mono text-[0.68rem] uppercase tracking-wider text-ink-faint">
                                  {m.label}:
                                </span>
                                <span className="font-mono text-xs font-bold text-ink">
                                  {m.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Action Buttons: Both Source Code and Live Demo */}
                      <div className="mt-7 flex flex-wrap items-center gap-3">
                        {/* Live Demo Link Button */}
                        <a
                          href={project.live || "#"}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-silver-line group inline-flex items-center gap-2 rounded-full bg-brass px-5 py-2.5 font-mono text-xs sm:text-sm font-semibold text-cream-soft hover:bg-brass-dark transition-all duration-300 shadow-md"
                        >
                          <FiGlobe size={15} className="transition-transform duration-300 group-hover:rotate-12" />
                          <span>{isVercelLive ? "Visit Live Site" : "Live Demo"}</span>
                          <FiExternalLink size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>

                        {/* GitHub Source Code Button */}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-silver-line group inline-flex items-center gap-2 rounded-full bg-deep px-5 py-2.5 font-mono text-xs sm:text-sm text-cream-soft hover:bg-brass transition-all duration-300"
                        >
                          <FaGithub size={15} className="text-white transition-transform duration-300 group-hover:rotate-12" />
                          <span>View Source</span>
                        </a>
                      </div>
                    </div>

                    {/* Right: Mockup Preview (5 Cols) */}
                    <div className="lg:col-span-5 flex items-center justify-center">
                      <div className="w-full transform transition-transform duration-500 hover:scale-[1.02]">
                        <LaptopFrame image={project.image} title={project.title} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
