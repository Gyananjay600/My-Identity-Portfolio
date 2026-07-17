import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { techStack } from "../data/techStack.js";

// Premium stagger animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function TechStack() {
  return (
    <section
      id="stack"
      className="relative overflow-hidden bg-cream-soft py-24 sm:py-32"
    >
      {/* Premium Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.10),transparent_65%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(197,160,89,0.03),transparent)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="03 · Stack"
          title="Tools I reach for."
          description="Every technology listed here has been used in real-world projects—from enterprise Java backends to AI-powered full-stack applications."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {techStack.map((group) => (
            <motion.div
              key={group.group}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35 }}
              className="group relative overflow-hidden rounded-[28px] border border-brass/20 bg-[#FCF9F4] p-8 shadow-[0_10px_35px_rgba(23,51,47,0.06)] transition-all duration-500 hover:border-brass/50 hover:shadow-[0_25px_70px_rgba(197,160,89,0.18)]"
            >
              {/* Glow */}
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brass/5 blur-3xl transition-all duration-500 group-hover:bg-brass/10" />

              {/* Top Accent */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-brass via-[#E2C48D] to-brass opacity-0 transition-all duration-500 group-hover:opacity-100" />

              {/* Heading */}
              <h3 className="relative text-xs font-semibold uppercase tracking-[0.28em] text-brass">
                {group.group}
              </h3>

              {/* Divider */}
              <div className="mt-4 mb-6 h-px w-14 bg-brass/30 transition-all duration-500 group-hover:w-24 group-hover:bg-brass" />

              {/* Skills */}
              <div className="relative flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-brass/20 bg-[#FFFDFC] px-4 py-2 text-sm font-medium text-deep transition-all duration-300 hover:-translate-y-1 hover:border-brass hover:bg-brass hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}