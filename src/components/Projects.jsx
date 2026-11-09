import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import SectionHeading from "./SectionHeading.jsx";
import LaptopFrame from "./LaptopFrame.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="projects" className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="04 · Featured Work"
          title="Projects, plugged into the line."
          description="Every project below runs on a real stack — open the repo to see the code, not just the screenshot."
        />

        <div ref={containerRef} className="relative mt-20">
          {/* the connecting line — grows as you scroll */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-line md:block" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-brass to-deep md:block"
          />

          <div className="space-y-16 md:space-y-24">
            {projects.map((project, i) => {
              const fromLeft = i % 2 === 0;
              return (
                <div key={project.id} className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-2">
                  {/* node dot on the central line */}
                  <span className="absolute left-1/2 top-1/2 z-10 hidden h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brass bg-cream md:block" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={fromLeft ? "md:order-1" : "md:order-2"}
                  >
                    <LaptopFrame image={project.image} title={project.title} className='object-contain' />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className={`rounded-2xl border hairline bg-cream-soft p-5 sm:p-8 shadow-card ${
                      fromLeft ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <span className="section-label">
                      {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{project.title}</h3>
                    <p className="mt-1 text-sm font-medium text-brass-dark">{project.tagline}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{project.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border hairline px-2.5 py-1 font-mono text-[0.68rem] text-ink-soft"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 rounded-xl border hairline bg-cream-soft px-3.5 py-2 font-mono text-xs text-ink shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brass hover:text-brass hover:shadow-card"
                      >
                        <FaGithub size={15} className="transition-transform duration-300 group-hover:scale-115" />
                        <span>Source Code</span>
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-center gap-2 rounded-xl bg-deep px-3.5 py-2 font-mono text-xs text-cream-soft shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-brass hover:shadow-card"
                        >
                          <FiExternalLink size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
