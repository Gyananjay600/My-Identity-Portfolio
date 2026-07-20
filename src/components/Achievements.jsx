import { motion } from "framer-motion";
import { Award, BadgeCheck, Trophy, Users } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

// Add / edit freely — each card just needs an icon, title and description.
const achievements = [
  {
    icon: Trophy,
    title: "Smart India Hackathon",
    text: "Participated with a team, building a working prototype under a strict deadline.",
  },
  {
    icon: Users,
    title: "Workshops & Leadership",
    text: "Took part in technical workshops and led small project teams during coursework.",
  },
  {
    icon: Award,
    title: "College Recognition",
    text: "Recognised for project work within the CSE department at GIET.",
  },
];

const certifications = [
  {
    title: "DATA ANALYTICS WITH PYTHON",
    issuer: "Self-paced / Project-based",
    verifyLabel: "View Certificate",
    href: "/assets/certificate/dataAnalytics.png",
  },
  {
    title: "CORE JAVA",
    issuer: "Self-paced / Project-based",
    verifyLabel: "View Certificate",
    href: "/assets/certificate/core_java.png",
  },
  {
    title: "Spring Boot & REST APIs",
    issuer: "Self-paced / Project-based",
    verifyLabel: "View Certificate",
    href: "#",
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="05 · Recognition" title="Achievements & certifications." />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border hairline bg-cream-soft p-6 shadow-card"
            >
              <item.icon size={20} className="text-brass" strokeWidth={1.75} />
              <h3 className="mt-3 font-display text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center justify-between gap-4 rounded-2xl border hairline bg-cream-soft px-6 py-5 shadow-card"
            >
              <div className="flex items-center gap-3">
                <BadgeCheck size={20} className="shrink-0 text-brass" />
                <div>
                  <h4 className="font-display text-sm font-semibold text-ink">{cert.title}</h4>
                  <p className="text-xs text-ink-faint">{cert.issuer}</p>
                </div>
              </div>
              <a
                href={cert.href}
                className="shrink-0 rounded-full border hairline px-3 py-1.5 font-mono text-[0.68rem] text-ink-soft transition-colors hover:border-brass hover:text-brass"
              >
                {cert.verifyLabel}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
