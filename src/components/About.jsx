import { motion } from "framer-motion";
import {
  Coffee,
  Code2,
  Sparkles,
  GraduationCap,
  Layers,
  Quote,
} from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { profile } from "../data/profile.js";

const facts = [
  {
    icon: Code2,
    title: "Why Java Full Stack",
    text: "Java gave me the discipline of strongly-typed, structured systems. Spring Boot turned that into APIs people can actually use.",
  },
  {
    icon: Layers,
    title: "Also fluent in MERN",
    text: "Spring Boot is home base, but I ship just as comfortably on MongoDB, Express, React and Node.js when a project calls for it.",
  },
  {
    icon: Sparkles,
    title: "AI, deliberately",
    text: "I integrate AI where it earns its place — like Spring AI + Groq for predictive scoring, not for decoration.",
  },
  {
    icon: GraduationCap,
    title: "Currently learning",
    text: "Docker, Spring Cloud (Eureka, Gateway, Config Server) and distributed patterns — building toward banking-grade microservices.",
  }
];

const orbitBadges = [
  { label: "Java", position: "-top-4 -left-6" },
  { label: "Spring Boot", position: "top-10 -right-9" },
  { label: "MERN", position: "-bottom-5 -left-8" },
  { label: "MySQL", position: "-bottom-8 right-2" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      {/* ambient premium glow */}
      <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-[28rem] w-[28rem] rounded-full bg-brass/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-[22rem] w-[22rem] rounded-full bg-deep/10 blur-[110px]" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="01 · About"
          title="Full-stack fundamentals, built the slow way."
          description="I care about understanding systems end to end — from a JVM garbage collector to a CORS preflight request — over shipping things I can't explain."
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* portrait — ultra premium framed photo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm lg:sticky lg:top-28"
          >
            {/* rotating conic-gradient ring */}
            <motion.div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] opacity-70"
              style={{
                background:
                  "conic-gradient(from 0deg, #B9852E, transparent 30%, transparent 70%, #B9852E)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative rounded-[1.75rem] border hairline bg-cream-soft p-3 shadow-premium">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-deep">
                <img
                  src="/public/assets/images/profile/profile.png"
                  alt={profile.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextSibling.style.display = "flex";
                  }}
                />
                <img
                  src="/src/assets/images/profile/profile.png"
                  alt="Gyananjay Sahoo"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300 sha"
                  loading="lazy"
                />

                {/* corner brackets — premium frame detail */}
                <span className="absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-brass-light/80" />
                <span className="absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-brass-light/80" />
                <span className="absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-brass-light/80" />
                <span className="absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-brass-light/80" />
              </div>

              <div className="flex items-center justify-between px-2 pb-1 pt-3">
                <div>
                  <p className="font-display text-sm font-semibold text-ink">
                    {profile.name}
                  </p>
                  <p className="section-label !text-[0.62rem]">
                    {profile.role}
                  </p>
                </div>
                <Quote size={18} className="text-brass" />
              </div>
            </div>

            {/* floating orbit badges */}
            {orbitBadges.map((badge, i) => (
              <motion.span
                key={badge.label}
                className={`absolute ${badge.position} hidden rounded-full border hairline bg-cream-soft px-3 py-1.5 font-mono text-[0.65rem] text-ink-soft shadow-card sm:block`}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3.4 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              >
                {badge.label}
              </motion.span>
            ))}
          </motion.div>

          {/* facts grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {facts.map((fact, i) => (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-2xl border hairline bg-cream-soft p-6 shadow-card transition-all hover:-translate-y-1 hover:border-brass hover:shadow-premium"
              >
                {/* premium hover sheen */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-brass/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-deep text-brass-light transition-colors group-hover:bg-brass group-hover:text-deep">
                  <fact.icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="relative mt-4 font-display text-lg font-semibold text-ink">
                  {fact.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-soft">
                  {fact.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
