/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "var(--color-cream)",
        "cream-soft": "var(--color-cream-soft)",
        "cream-dim": "var(--color-cream-dim)",
        ink: "var(--color-ink)",
        "ink-soft": "var(--color-ink-soft)",
        "ink-faint": "var(--color-ink-faint)",
        brass: "var(--color-brass)",
        "brass-light": "var(--color-brass-light)",
        "brass-dark": "var(--color-brass-dark)",
        deep: "var(--color-deep)",
        "deep-light": "var(--color-deep-light)",
        line: "var(--color-line)",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        premium: "var(--shadow-premium)",
        card: "var(--shadow-card)",
      },
    },
  },
  plugins: [],
};
