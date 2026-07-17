import { TerminalSquare } from "lucide-react";

export default function Logo({ className = "" }) {
  return (
    <a
      href="#home"
      className={`group flex items-center gap-2 select-none ${className}`}
      aria-label="Gyananjay Sahoo — home"
    >
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-deep text-cream-soft shadow-card transition-transform duration-300 group-hover:-rotate-6">
        <span className="font-display text-lg font-semibold tracking-tight">GS</span>
        <TerminalSquare
          size={14}
          strokeWidth={2.25}
          className="absolute -bottom-1.5 -right-1.5 rounded-full bg-brass p-[3px] text-cream-soft"
        />
      </span>
      <span className="hidden flex-col leading-tight sm:flex">
        <span className="font-display text-sm font-semibold text-ink">Gyananjay Sahoo</span>
        <span className="section-label !text-[0.6rem] text-ink-faint">Java Full Stack</span>
      </span>
    </a>
  );
}
