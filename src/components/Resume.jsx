import { motion } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { profile } from "../data/profile.js";

export default function Resume() {
  return (
    <section id="resume" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="07 · Resume" title="One PDF, everything on it." />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-center gap-6 rounded-3xl border hairline bg-cream-soft p-10 text-center shadow-premium"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-deep text-cream-soft">
            <FileText size={28} />
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
              download
              className="inline-flex items-center gap-2 rounded-full bg-deep px-6 py-3 font-mono text-sm text-cream-soft transition-transform hover:-translate-y-0.5 hover:bg-brass"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border hairline px-6 py-3 font-mono text-sm text-ink transition-transform hover:-translate-y-0.5 hover:border-brass"
            >
              <Eye size={16} /> Preview
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
