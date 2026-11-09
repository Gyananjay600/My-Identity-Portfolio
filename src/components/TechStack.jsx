'use client';

import { motion } from "framer-motion";
import { FaJava, FaReact, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa6";
import {
  SiSpringboot,
  SiSpring,
  SiHibernate,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiPostman,
  SiVite,
} from "react-icons/si";
import { HiSparkles, HiServerStack, HiCpuChip, HiCircleStack, HiWrenchScrewdriver } from "react-icons/hi2";
import { TbApi } from "react-icons/tb";
import SectionHeading from "./SectionHeading.jsx";
import MagicBentoCard from "./MagicBentoCard.jsx";

export default function TechStack() {
  return (
    <section id="stack" className="relative overflow-hidden py-16 sm:py-20">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(185,133,46,0.08),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="03 · Stack"
          title="Tools I reach for."
          description="Every technology listed here has been used to build and ship real-world systems — from robust Spring Boot microservices to AI-powered full-stack applications."
        />

        {/* Magic Bento Grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {/* Bento Card 1: Core Backend & Architecture (Large / Featured - Spans 2 Cols) */}
          <MagicBentoCard className="md:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-deep text-cream-soft shadow-sm">
                    <HiServerStack size={19} className="text-brass" />
                  </span>
                  <div>
                    <span className="section-label !text-[0.68rem]">Core Backend</span>
                    <h3 className="font-display text-xl font-bold text-ink">Java &amp; Spring Boot Architecture</h3>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-full bg-brass/10 text-brass border border-brass/25">
                  <span className="h-1.5 w-1.5 rounded-full bg-brass animate-pulse" />
                  Production Ready
                </span>
              </div>

              <p className="mt-4 text-sm text-ink-soft leading-relaxed max-w-xl">
                Enterprise-grade architecture built with strongly-typed Java 21, RESTful Spring Boot services, Spring Security authentication, and JPA/Hibernate database abstractions.
              </p>

              {/* Skill Badges with React Icons */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                {[
                  { name: "Java 21", icon: FaJava, color: "text-[#f89820]" },
                  { name: "Spring Boot", icon: SiSpringboot, color: "text-[#6db33f]" },
                  { name: "Spring Security", icon: SiSpring, color: "text-[#6db33f]" },
                  { name: "REST APIs", icon: TbApi, color: "text-brass" },
                  { name: "Hibernate & JPA", icon: SiHibernate, color: "text-[#bcae79]" },
                  { name: "Microservices", icon: HiServerStack, color: "text-brass" },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <span
                      key={s.name}
                      className="group/pill inline-flex items-center gap-2 rounded-xl border hairline bg-cream px-3.5 py-2 font-mono text-xs text-ink shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brass hover:text-brass"
                    >
                      <Icon size={16} className={`transition-transform duration-300 group-hover/pill:scale-120 ${s.color}`} />
                      <span>{s.name}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Simulated Live Throughput Bar (Bento Metric Element) */}
            <div className="mt-8 pt-4 border-t hairline flex items-center justify-between text-xs font-mono text-ink-faint">
              <span>99.9% Uptime Architecture</span>
              <span className="text-brass">Zero Memory Leaks · Spring Boot 3.x</span>
            </div>
          </MagicBentoCard>

          {/* Bento Card 2: Modern Frontend (1 Col) */}
          <MagicBentoCard className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-deep text-cream-soft shadow-sm">
                  <FaReact size={19} className="text-[#61dafb]" />
                </span>
                <div>
                  <span className="section-label !text-[0.68rem]">Frontend</span>
                  <h3 className="font-display text-lg font-bold text-ink">Modern React</h3>
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-ink-soft leading-relaxed">
                Responsive, highly interactive SPAs with React, Tailwind CSS, Vite, and smooth micro-interactions.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  { name: "React 18", icon: FaReact, color: "text-[#61dafb]" },
                  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#38bdf8]" },
                  { name: "JavaScript", icon: SiJavascript, color: "text-[#f7df1e]" },
                  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178c6]" },
                  { name: "Vite", icon: SiVite, color: "text-[#646cff]" },
                  { name: "HTML5 / CSS3", icon: FaHtml5, color: "text-[#e34f26]" },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <span
                      key={s.name}
                      className="group/pill inline-flex items-center gap-1.5 rounded-xl border hairline bg-cream px-3 py-1.5 font-mono text-[0.72rem] text-ink transition-all duration-300 hover:border-brass hover:text-brass hover:scale-105"
                    >
                      <Icon size={14} className={s.color} />
                      <span>{s.name}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t hairline flex items-center justify-between text-[0.7rem] font-mono text-ink-faint">
              <span>Mobile-first &amp; A11y</span>
              <span className="text-emerald-500">60 FPS Smooth</span>
            </div>
          </MagicBentoCard>

          {/* Bento Card 3: Databases & Storage (1 Col) */}
          <MagicBentoCard className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-deep text-cream-soft shadow-sm">
                  <HiCircleStack size={19} className="text-brass-light" />
                </span>
                <div>
                  <span className="section-label !text-[0.68rem]">Databases</span>
                  <h3 className="font-display text-lg font-bold text-ink">Storage Layer</h3>
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-ink-soft leading-relaxed">
                Relational schemas, ACID transactions, indexing, and scalable NoSQL document stores.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  { name: "MySQL", icon: SiMysql, color: "text-[#00758f]" },
                  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#336791]" },
                  { name: "MongoDB", icon: SiMongodb, color: "text-[#47a248]" },
                  { name: "Query Tuning", icon: HiCircleStack, color: "text-brass" },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <span
                      key={s.name}
                      className="group/pill inline-flex items-center gap-1.5 rounded-xl border hairline bg-cream px-3 py-1.5 font-mono text-[0.72rem] text-ink transition-all duration-300 hover:border-brass hover:text-brass hover:scale-105"
                    >
                      <Icon size={14} className={s.color} />
                      <span>{s.name}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t hairline flex items-center justify-between text-[0.7rem] font-mono text-ink-faint">
              <span>Indexed &amp; Optimized</span>
              <span className="text-brass">ACID Compliant</span>
            </div>
          </MagicBentoCard>

          {/* Bento Card 4: AI Integration & Intelligence (1 Col) */}
          <MagicBentoCard className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-deep text-cream-soft shadow-sm">
                  <HiSparkles size={19} className="text-brass animate-spin-slow" />
                </span>
                <div>
                  <span className="section-label !text-[0.68rem]">AI Systems</span>
                  <h3 className="font-display text-lg font-bold text-ink">Spring AI &amp; LLMs</h3>
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-ink-soft leading-relaxed">
                Deliberate integration of AI APIs, Groq inference, prompt engineering, and structured output parsing.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  { name: "Spring AI", icon: HiSparkles, color: "text-brass" },
                  { name: "Groq API", icon: HiCpuChip, color: "text-orange-400" },
                  { name: "Prompt Eng", icon: HiSparkles, color: "text-brass-light" },
                  { name: "Predictive Scoring", icon: HiCpuChip, color: "text-emerald-500" },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <span
                      key={s.name}
                      className="group/pill inline-flex items-center gap-1.5 rounded-xl border hairline bg-cream px-3 py-1.5 font-mono text-[0.72rem] text-ink transition-all duration-300 hover:border-brass hover:text-brass hover:scale-105"
                    >
                      <Icon size={14} className={s.color} />
                      <span>{s.name}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t hairline flex items-center justify-between text-[0.7rem] font-mono text-ink-faint">
              <span>Low Latency Inference</span>
              <span className="text-emerald-500">Groq Acceleration</span>
            </div>
          </MagicBentoCard>

          {/* Bento Card 5: DevOps, Tools & Workflow (1 Col) */}
          <MagicBentoCard className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-deep text-cream-soft shadow-sm">
                  <HiWrenchScrewdriver size={19} className="text-brass" />
                </span>
                <div>
                  <span className="section-label !text-[0.68rem]">Tooling</span>
                  <h3 className="font-display text-lg font-bold text-ink">DevOps &amp; Workflow</h3>
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-ink-soft leading-relaxed">
                Modern developer environment, version control, containerization basics, and API testing suites.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  { name: "Git & GitHub", icon: FaGitAlt, color: "text-[#f05032]" },
                  { name: "Docker", icon: FaDocker, color: "text-[#2496ed]" },
                  { name: "Postman", icon: SiPostman, color: "text-[#ff6c37]" },
                  { name: "IntelliJ IDEA", icon: FaJava, color: "text-brass" },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <span
                      key={s.name}
                      className="group/pill inline-flex items-center gap-1.5 rounded-xl border hairline bg-cream px-3 py-1.5 font-mono text-[0.72rem] text-ink transition-all duration-300 hover:border-brass hover:text-brass hover:scale-105"
                    >
                      <Icon size={14} className={s.color} />
                      <span>{s.name}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t hairline flex items-center justify-between text-[0.7rem] font-mono text-ink-faint">
              <span>CI/CD &amp; Testing</span>
              <span className="text-brass">Agile Shipping</span>
            </div>
          </MagicBentoCard>
        </div>
      </div>
    </section>
  );
}
