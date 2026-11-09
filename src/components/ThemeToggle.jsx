import { useTheme } from "../context/ThemeContext.jsx";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-xl border hairline bg-cream-soft text-ink transition-all duration-300 hover:scale-105 hover:border-brass hover:text-brass hover:shadow-card focus-visible:outline-none ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -8, opacity: 0, rotate: -40 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 8, opacity: 0, rotate: 40 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <FiSun size={17} className="text-brass" />
          ) : (
            <FiMoon size={17} className="text-ink" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

