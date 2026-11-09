'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import TechStack from "./components/TechStack.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Education from "./components/Education.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import SkeletonLoader from "./components/SkeletonLoader.jsx";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth skeleton preloader for page and section initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-cream text-ink transition-colors duration-300">
        <div className="grain-overlay" aria-hidden="true" />

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="skeleton"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <SkeletonLoader />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Navbar />
              <main className="relative">
                <Hero />
                <About />
                <Experience />
                <TechStack />
                <Projects />
                <Achievements />
                <Education />
                <Resume />
                <Contact />
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}
