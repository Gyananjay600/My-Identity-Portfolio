import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiEnvelope } from "react-icons/hi2";
import { FiArrowUp } from "react-icons/fi";
import Logo from "./Logo.jsx";
import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="relative border-t hairline bg-cream-soft py-10 transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <Logo />

        <div className="flex items-center gap-3">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="flex h-9 w-9 items-center justify-center rounded-xl border hairline bg-cream text-ink shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brass hover:text-brass hover:shadow-card"
          >
            <FaGithub size={16} />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-9 w-9 items-center justify-center rounded-xl border hairline bg-cream text-ink shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brass hover:text-brass hover:shadow-card"
          >
            <FaLinkedinIn size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send Email"
            className="flex h-9 w-9 items-center justify-center rounded-xl border hairline bg-cream text-ink shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brass hover:text-brass hover:shadow-card"
          >
            <HiEnvelope size={16} />
          </a>
        </div>

        <a
          href="#home"
          className="group flex items-center gap-1.5 font-mono text-xs text-ink-faint transition-colors hover:text-brass"
        >
          <span>Back to top</span>
          <FiArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>
      <p className="mt-6 text-center font-mono text-[0.68rem] text-ink-faint">
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS &amp; Three.js.
      </p>
    </footer>
  );
}
