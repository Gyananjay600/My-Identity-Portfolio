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
    title: "MERN Stack Development",
    issuer: "Qlith Innovation Pvt. Ltd.",
    verifyLabel: "View Certificate",
    href: "/assets/certificate/QIS0140.pdf",
  },
  {
    title: "DATA ANALYTICS WITH PYTHON",
    issuer: "Central Tool Room & Training Centre, Bhubaneswar",
    verifyLabel: "View Certificate",
    href: "/assets/certificate/dataAnalytics.png",
  },
  {
    title: "CORE JAVA",
    issuer: "Central Tool Room & Training Centre, Bhubaneswar",
    verifyLabel: "View Certificate",
    href: "/assets/certificate/core_java.png",
  },
  {
    title: "Java Development",
    issuer: "TechnoHacks Solutions Pvt. Ltd.",
    verifyLabel: "View Certificate",
    href: "/assets/images/projects/java_development.pdf",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Thairanex",
    verifyLabel: "View Certificate",
    href: "/assets/images/projects/full_stack_development.pdf",
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="05 · Recognition" title="Achievements & certifications." />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
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
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col justify-between gap-4 rounded-2xl border hairline bg-cream-soft p-5 shadow-card sm:flex-row sm:items-center sm:px-6"
            >
              <div className="flex items-start gap-3">
                <BadgeCheck size={20} className="mt-0.5 shrink-0 text-brass" />
                <div>
                  <h4 className="font-display text-sm font-semibold text-ink leading-snug">{cert.title}</h4>
                  <p className="mt-0.5 text-xs text-ink-faint leading-relaxed">{cert.issuer}</p>
                </div>
              </div>
              <a
                href={cert.href}
                target="_blank"
                rel="noreferrer"
                className="self-start shrink-0 rounded-full border hairline px-3.5 py-1.5 font-mono text-[0.68rem] text-ink-soft transition-colors hover:border-brass hover:text-brass sm:self-center"
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
