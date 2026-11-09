import { motion } from "framer-motion";
import { FiDownload, FiEye, FiFileText } from "react-icons/fi";
import SectionHeading from "./SectionHeading.jsx";
import { profile } from "../data/profile.js";

export default function Resume() {
  return (
    <section id="resume" className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="07 · Resume" title="One PDF, everything on it." />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-center gap-6 rounded-3xl border hairline bg-cream-soft p-8 text-center shadow-premium sm:p-10 transition-colors duration-300"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-deep text-cream-soft shadow-card">
            <FiFileText size={28} />
          </span>
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">Gyananjay Sahoo — Resume</h3>
            <p className="mt-1 text-sm text-ink-soft">
              Java Full Stack Developer · Spring Boot · React · AI Integration
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={profile.resumePath}
              download={profile.resumeDownloadName || "FinalResume(Gyananjay).pdf"}
              className="group inline-flex items-center gap-2 rounded-full bg-deep px-6 py-3 font-mono text-sm text-cream-soft shadow-premium transition-all duration-300 hover:-translate-y-0.5 hover:bg-brass hover:shadow-brass/30"
            >
              <FiDownload size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              <span>Download Resume</span>
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border hairline bg-cream px-6 py-3 font-mono text-sm text-ink shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brass hover:text-brass"
            >
              <FiEye size={16} className="transition-transform duration-300 group-hover:scale-110" />
              <span>Preview</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
