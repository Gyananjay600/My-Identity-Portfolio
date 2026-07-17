/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F6EFE2",
        "cream-soft": "#FBF6EC",
        "cream-dim": "#EFE6D2",
        ink: "#211A12",
        "ink-soft": "#5B5041",
        "ink-faint": "#8A7F6C",
        brass: "#B9852E",
        "brass-light": "#D9A94B",
        "brass-dark": "#8C651E",
        deep: "#17302F",
        "deep-light": "#1F423F",
        line: "#E1D5B8",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        premium: "0 20px 60px -20px rgba(33, 26, 18, 0.25)",
        card: "0 10px 30px -12px rgba(33, 26, 18, 0.18)",
      },
    },
  },
  plugins: [],
};
