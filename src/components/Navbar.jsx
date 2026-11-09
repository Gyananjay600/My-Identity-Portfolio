import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Logo from "./Logo.jsx";
import GooeyNav from "./GooeyNav.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-3 sm:px-4 transition-all duration-300 ${
          scrolled
            ? "hairline bg-cream-soft/90 py-2 shadow-card backdrop-blur-md"
            : "border-transparent bg-cream-soft/75 py-2 backdrop-blur-sm shadow-sm"
        }`}
      >
        <Logo />

        {/* Desktop Gooey Navigation */}
        <div className="hidden lg:block">
          <GooeyNav items={LINKS} />
        </div>

        {/* Right side: Theme Toggle & CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <a
            href="#contact"
            className="hidden rounded-full bg-deep px-5 py-2 font-mono text-[0.78rem] text-cream-soft shadow-premium transition-all duration-300 hover:-translate-y-0.5 hover:bg-brass hover:shadow-brass/25 sm:inline-block"
          >
            Hire Me
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl border hairline bg-cream-soft p-2 text-ink hover:text-brass hover:border-brass lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 flex flex-col overflow-hidden rounded-2xl border hairline bg-cream-soft shadow-card backdrop-blur-lg lg:hidden"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b hairline px-5 py-3 font-mono text-sm text-ink-soft transition-colors hover:bg-cream-dim hover:text-ink last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <div className="p-4 pt-3 border-t hairline bg-cream-dim/40 flex items-center justify-between gap-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex-1 text-center rounded-full bg-deep px-5 py-2.5 font-mono text-xs text-cream-soft transition-transform hover:bg-brass"
              >
                Hire Me
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
