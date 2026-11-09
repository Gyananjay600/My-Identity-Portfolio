'use client';

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiEnvelope, HiDocumentArrowDown, HiArrowDownRight, HiSparkles } from "react-icons/hi2";
import { FiArrowDown } from "react-icons/fi";
import { profile } from "../data/profile.js";
import LetterGlitch from "./LetterGlitch.jsx";
import Lanyard from "./Lanyard.jsx";
import TextType from "./TextType.jsx";
import LogoLoop from "./LogoLoop.jsx";
import { useTheme } from "../context/ThemeContext.jsx";

const badges = ["Java", "Spring Boot", "React", "MySQL", "AI Integration"];

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section id="home" className="relative isolate flex min-h-screen flex-col justify-between pt-24 sm:pt-28 overflow-hidden">
      {/* LetterGlitch background with calm, elegant ambient pulses to eliminate flickering */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <LetterGlitch
          className="absolute inset-0 w-full h-full"
          glitchColors={
            isDark
              ? ["#D9A94B", "#61DCA3", "#38BDF8", "#F472B6", "#A78BFA"]
              : ["#B9852E", "#0F9F6E", "#17302F", "#D9A94B", "#211A12"]
          }
          baseColor={isDark ? "#8497B0" : "#211A12"}
          fontFamily="'JetBrains Mono', monospace"
          fontSize={15}
          spacing={0.5}
          density={0.75}
          baseOpacity={isDark ? 0.16 : 0.10}
          glitchAmount={0.08}
          speed={0.25}
          flow={0.15}
          centerFade={0.45}
          edgeFade={0.15}
          clickEffect="tear"
          lightMode={!isDark}
        />
        {/* Soft bottom gradient to blend seamlessly into next section */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-cream via-cream/60 to-transparent pointer-events-none transition-colors duration-300" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-10 px-6 pb-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="relative z-10 rounded-3xl p-2 sm:p-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Frosted veil behind hero text to guarantee 100% readability */}
          <div className="absolute -inset-2 -z-10 rounded-3xl bg-cream/75 dark:bg-cream/80 backdrop-blur-[2px] transition-colors duration-300 pointer-events-none" />

          <span className="inline-flex items-center gap-2 rounded-full border hairline bg-cream-soft px-3 py-1.5 font-mono text-[0.72rem] text-ink-soft shadow-card">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brass" />
            </span>
            {profile.availability}
          </span>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-[1.15] text-ink sm:text-5xl lg:text-6xl">
            Hi, I'm {profile.name.split(" ")[0]} —
            <span className="block text-brass mt-1 min-h-[1.2em]">
              <TextType
                phrases={[
                  "I build with Java & Spring.",
                  "Enterprise Spring Boot APIs.",
                  "Full-Stack React & Spring.",
                  "Thoughtful AI Integration.",
                  "Scalable Microservices."
                ]}
              />
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-[0.98rem] sm:text-[1.05rem] leading-relaxed text-ink-soft">
            A {profile.role} from {profile.location}, shipping full-stack
            applications with Spring Boot, React and thoughtful AI
            integration — {profile.tagline.toLowerCase()}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="btn-silver-line group inline-flex items-center gap-2 rounded-full bg-deep px-5 sm:px-6 py-3 font-mono text-sm text-cream-soft shadow-premium hover:bg-brass"
            >
              <HiSparkles size={16} className="text-brass-light transition-transform duration-300 group-hover:rotate-12" />
              <span>Hire Me</span>
            </a>
            <a
              href="#projects"
              className="btn-silver-line group inline-flex items-center gap-2 rounded-full bg-cream-soft px-5 sm:px-6 py-3 font-mono text-sm text-ink hover:text-brass"
            >
              <span>View Projects</span>
              <HiArrowDownRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href={profile.resumePath}
              download={profile.resumeDownloadName || "FinalResume(Gyananjay).pdf"}
              target="_blank"
              rel="noreferrer"
              className="btn-silver-line group inline-flex items-center gap-2 rounded-full bg-cream-soft px-5 sm:px-6 py-3 font-mono text-sm text-ink hover:text-brass"
            >
              <HiDocumentArrowDown size={17} className="text-brass transition-transform duration-300 group-hover:translate-y-0.5" />
              <span>Resume</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full border hairline bg-cream-soft px-3 py-1 font-mono text-[0.7rem] text-ink-soft transition-colors hover:border-brass hover:text-ink"
              >
                {b}
              </span>
            ))}
          </div>

          {/* Social Icons with authentic brand colors and hover style move */}
          <div className="mt-8 flex items-center gap-3">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              title="GitHub Profile"
              className="btn-silver-line group flex h-10 w-10 items-center justify-center rounded-xl bg-cream-soft text-[#24292e] dark:text-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-premium hover:text-brass"
            >
              <FaGithub size={18} className="transition-transform duration-300 group-hover:scale-115" />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              className="btn-silver-line group flex h-10 w-10 items-center justify-center rounded-xl bg-cream-soft text-[#0a66c2] shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-premium hover:text-[#0a66c2]"
            >
              <FaLinkedinIn size={17} className="transition-transform duration-300 group-hover:scale-115" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send an Email"
              title="Send an Email"
              className="btn-silver-line group flex h-10 w-10 items-center justify-center rounded-xl bg-cream-soft text-[#ea4335] shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-premium hover:text-[#ea4335]"
            >
              <HiEnvelope size={18} className="transition-transform duration-300 group-hover:scale-115" />
            </a>
          </div>
        </motion.div>

        {/* Interactive 3D Lanyard Component replacing 3D Monitor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative w-full flex items-center justify-center pt-2 sm:pt-4"
        >
          <Lanyard
            name={profile.name}
            role="Java Full Stack Developer"
            location={profile.location}
            image="/assets/images/gyananjay.png"
          />
        </motion.div>
      </div>

      {/* Infinite Logo Loop Ribbon from React Bits (no border line after hero) */}
      <div className="relative z-10 w-full pt-4 pb-4 bg-cream-soft/30 backdrop-blur-[2px]">
        <LogoLoop />
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-0.5 text-ink-faint transition-colors hover:text-brass sm:flex z-20"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="section-label !text-[0.62rem] !text-ink-faint">Scroll</span>
        <FiArrowDown size={14} />
      </motion.a>
    </section>
  );
}
