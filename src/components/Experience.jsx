import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { experience } from "../data/experience.js";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="02 · Timeline" title="Where the time went." />

        <div className="relative mt-14 pl-8">
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-line" />
          {experience.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-brass bg-cream" />
              <span className="section-label">{item.year}</span>
              <h3 className="mt-1 font-display text-xl font-semibold text-ink">{item.title}</h3>
              <p className="text-sm font-medium text-brass-dark">{item.org}</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
