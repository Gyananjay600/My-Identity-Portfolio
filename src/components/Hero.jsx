import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { profile } from "../data/profile.js";
import CodeScreen from "./CodeScreen.jsx";

const Scene3D = lazy(() => import("./Scene3D.jsx"));

const badges = ["Java", "Spring Boot", "React", "MySQL", "AI Integration"];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-24 sm:pt-28">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brass/10 blur-[110px]" />
        <div className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-deep/10 blur-[100px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border hairline bg-cream-soft px-3 py-1.5 font-mono text-[0.72rem] text-ink-soft shadow-card">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brass" />
            </span>
            {profile.availability}
          </span>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            Hi, I'm {profile.name.split(" ")[0]} —
            <span className="block text-brass">I build with Java &amp; Spring.</span>
          </h1>

          <p className="mt-5 max-w-lg text-[0.98rem] sm:text-[1.05rem] leading-relaxed text-ink-soft">
            A {profile.role} from {profile.location}, shipping full-stack
            applications with Spring Boot, React and thoughtful AI
            integration — {profile.tagline.toLowerCase()}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-deep px-5 sm:px-6 py-3 font-mono text-sm text-cream-soft shadow-premium transition-transform hover:-translate-y-0.5 hover:bg-brass"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="rounded-full border hairline bg-cream-soft px-5 sm:px-6 py-3 font-mono text-sm text-ink transition-transform hover:-translate-y-0.5 hover:border-brass"
            >
              View Projects
            </a>
            <a
              href={profile.resumePath}
              download={profile.resumeDownloadName || "FinalResume(Gyananjay).pdf"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border hairline px-5 sm:px-6 py-3 font-mono text-sm text-ink transition-transform hover:-translate-y-0.5 hover:border-brass"
            >
              <Download size={15} /> Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full border hairline bg-cream-soft px-3 py-1 font-mono text-[0.7rem] text-ink-soft"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-ink-soft transition-colors hover:text-brass"
            >
              <Github size={19} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-ink-soft transition-colors hover:text-brass"
            >
              <Linkedin size={19} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-ink-soft transition-colors hover:text-brass"
            >
              <Mail size={19} />
            </a>
          </div>
        </motion.div>

        {/* 3D Scene on Desktop, Responsive Interactive Code Terminal on Tablet/Mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative w-full"
        >
          {/* Desktop 3D Scene */}
          <div className="hidden lg:block relative" style={{ minHeight: 520 }}>
            <div
              style={{
                position: "absolute",
                inset: "-80px -60px -80px -40px",
                zIndex: 0,
              }}
            >
              <Suspense
                fallback={
                  <div className="flex h-full w-full items-center justify-center font-mono text-sm text-ink-faint">
                    loading scene…
                  </div>
                }
              >
                <Scene3D />
              </Suspense>
            </div>
          </div>

          {/* Mobile & Tablet Terminal Window */}
          <div className="block lg:hidden mt-4 mx-auto w-full max-w-lg">
            <div className="rounded-2xl border hairline bg-[#0F1E1D] p-2.5 sm:p-3 shadow-premium">
              <div className="overflow-hidden rounded-xl">
                <CodeScreen is3D={false} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-ink-faint sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="section-label !text-ink-faint">Scroll</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
