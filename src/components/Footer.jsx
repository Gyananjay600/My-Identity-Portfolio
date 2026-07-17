import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import Logo from "./Logo.jsx";
import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="relative border-t hairline bg-cream-soft py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <Logo />

        <div className="flex items-center gap-4">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-soft transition-colors hover:text-brass"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-soft transition-colors hover:text-brass"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-ink-soft transition-colors hover:text-brass"
          >
            <Mail size={18} />
          </a>
        </div>

        <a
          href="#home"
          className="flex items-center gap-1.5 font-mono text-xs text-ink-faint transition-colors hover:text-brass"
        >
          Back to top <ArrowUp size={14} />
        </a>
      </div>
      <p className="mt-6 text-center font-mono text-[0.68rem] text-ink-faint">
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS &amp; Three.js.
      </p>
    </footer>
  );
}
