import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={align === "center" ? "mx-auto max-w-xl text-center" : "max-w-xl"}
    >
      <span className="section-label">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-ink-soft">{description}</p>}
    </motion.div>
  );
}
