import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { profile } from "../data/profile.js";

const Scene3D = lazy(() => import("./Scene3D.jsx"));

const badges = ["Java", "Spring Boot", "React", "MySQL", "AI Integration"];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brass/10 blur-[110px]" />
        <div className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-deep/10 blur-[100px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
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

          <h1 className="mt-6 font-display text-[2.75rem] font-semibold leading-[1.05] text-ink sm:text-6xl">
            Hi, I'm {profile.name.split(" ")[0]} —
            <span className="block text-brass">I build with Java &amp; Spring.</span>
          </h1>

          <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-ink-soft">
            A {profile.role} from {profile.location}, shipping full-stack
            applications with Spring Boot, React and thoughtful AI
            integration — {profile.tagline.toLowerCase()}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-deep px-6 py-3 font-mono text-sm text-cream-soft shadow-premium transition-transform hover:-translate-y-0.5 hover:bg-brass"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="rounded-full border hairline bg-cream-soft px-6 py-3 font-mono text-sm text-ink transition-transform hover:-translate-y-0.5 hover:border-brass"
            >
              View Projects
            </a>
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-full border hairline px-6 py-3 font-mono text-sm text-ink transition-transform hover:-translate-y-0.5 hover:border-brass"
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

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative h-[380px] sm:h-[460px] lg:h-[520px]"
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
