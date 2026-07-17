import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const education = [
  {
    stage: "B.Tech, Computer Science & Engineering",
    org: "Gandhi Institute of Excellent Technocrats, Bhubaneswar",
    period: "2023 — 2027",
    note: "Batch of 2023–27, under the guidance of Prof. Sakti Mishra.",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="06 · Education" title="Academic background." />
        <div className="mt-12 space-y-5">
          {education.map((item, i) => (
            <motion.div
              key={item.stage}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-4 rounded-2xl border hairline bg-cream-soft p-6 shadow-card"
            >
              <GraduationCap size={22} className="mt-1 shrink-0 text-brass" strokeWidth={1.75} />
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">{item.stage}</h3>
                <p className="text-sm font-medium text-brass-dark">{item.org}</p>
                <p className="section-label mt-1">{item.period}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
