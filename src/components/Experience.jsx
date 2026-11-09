'use client';

import { motion } from "framer-motion";
import { ExternalLink, Briefcase, GraduationCap, Sparkles, Calendar, Building2 } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import FadeContent from "./FadeContent.jsx";
import { experience } from "../data/experience.js";

// Specific milestone icons and tech tags for each experience
const experienceMeta = {
  "MERN Stack Intern": {
    icon: Briefcase,
    type: "Industry Internship",
    tech: ["React (Vite)", "Node.js", "Express", "MongoDB", "JWT Auth", "REST API"],
    badgeColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  },
  "B.Tech CSE, 7th Semester": {
    icon: GraduationCap,
    type: "Academic Foundation",
    tech: ["Java Architecture", "Spring Framework", "Distributed Systems", "Database Design"],
    badgeColor: "text-brass bg-brass/10 border-brass/20",
  },
  "Independent Projects": {
    icon: Sparkles,
    type: "Production Engineering",
    tech: ["Spring Boot 3", "Spring AI", "Groq LLaMA 3", "Docker", "Microservices"],
    badgeColor: "text-sky-500 bg-sky-500/10 border-sky-500/20",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_left_center,rgba(185,133,46,0.06),transparent_65%)]" />

      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="02 · Timeline"
          title="Where the time went."
          description="A chronological timeline of production internships, engineering coursework, and intensive full-stack systems building."
        />

        {/* Modern Interactive Timeline */}
        <div className="relative mt-16 pl-6 sm:pl-10">
          {/* Animated gradient vertical line stem */}
          <div className="absolute left-[11px] sm:left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-brass via-brass/40 to-line" />

          <div className="space-y-12">
            {experience.map((item, i) => {
              const meta = experienceMeta[item.title] || {
                icon: Briefcase,
                type: "Experience",
                tech: [],
                badgeColor: "text-brass bg-brass/10 border-brass/20",
              };
              const IconComponent = meta.icon;

              return (
                <div key={item.title} className="relative">
                  {/* Glowing Milestone Node */}
                  <div className="absolute -left-6 sm:-left-10 top-6 flex items-center justify-center">
                    <span className="relative flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-cream-soft border-2 border-brass shadow-md dark:bg-deep">
                      <span className="h-2 w-2 rounded-full bg-brass animate-ping opacity-75" />
                      <span className="absolute h-2 w-2 rounded-full bg-brass" />
                    </span>
                  </div>

                  {/* FadeContent Card from React Bits */}
                  <FadeContent
                    blur={true}
                    duration={800}
                    delay={i * 120}
                    displacement={20}
                    className="w-full"
                  >
                    <div className="relative rounded-3xl border hairline bg-cream-soft/90 dark:bg-[#111726]/90 backdrop-blur-xl p-6 sm:p-8 shadow-card transition-all duration-300 hover:border-brass/50 hover:shadow-premium">
                      {/* Top Header Row */}
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b hairline pb-4 mb-5">
                        <div className="flex items-center gap-2">
                          <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 font-mono text-[0.7rem] font-semibold ${meta.badgeColor}`}>
                            <IconComponent size={13} />
                            {meta.type}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 font-mono text-xs text-ink-faint">
                          <Calendar size={13} className="text-brass" />
                          <span>{item.year}</span>
                        </div>
                      </div>

                      {/* Main Title & Organization */}
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-ink tracking-tight">
                          {item.title}
                        </h3>

                        <div className="mt-1.5 flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold text-brass">
                          <Building2 size={14} className="shrink-0" />
                          <span>{item.org}</span>
                        </div>

                        <p className="mt-3 text-sm sm:text-[0.95rem] leading-relaxed text-ink-soft">
                          {item.description}
                        </p>
                      </div>

                      {/* Tech stack highlights */}
                      {meta.tech.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t hairline">
                          {meta.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border hairline bg-cream/70 dark:bg-deep/70 px-2.5 py-0.5 font-mono text-[0.68rem] text-ink-soft"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Certificate Verification Button */}
                      {item.certificate && (
                        <div className="mt-5 pt-3">
                          <a
                            href={item.certificate}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-silver-line group inline-flex items-center gap-2 rounded-full bg-deep px-4 py-2 font-mono text-xs text-cream-soft hover:bg-brass transition-all duration-300"
                          >
                            <ExternalLink size={13} className="text-brass transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            <span>View Internship Certificate (PDF)</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </FadeContent>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
