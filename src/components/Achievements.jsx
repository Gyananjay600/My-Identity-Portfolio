import { motion } from "framer-motion";
import { Award, Trophy, Users, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import DepthCarousel from "./DepthCarousel.jsx";

// Achievements cards
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

// Certifications presented in 3D Depth Carousel
const certifications = [
  {
    title: "MERN Stack Development",
    issuer: "Qlith Innovation Pvt. Ltd.",
    verifyLabel: "View Certificate",
    href: "/assets/certificate/QIS0140.pdf",
    tag: "Full Stack MERN",
  },
  {
    title: "Data Analytics with Python",
    issuer: "Central Tool Room & Training Centre, Bhubaneswar",
    verifyLabel: "View Certificate",
    href: "/assets/certificate/dataAnalytics.png",
    tag: "Python & Analytics",
  },
  {
    title: "Core Java Certified",
    issuer: "Central Tool Room & Training Centre, Bhubaneswar",
    verifyLabel: "View Certificate",
    href: "/assets/certificate/core_java.png",
    tag: "Core Java Architecture",
  },
  {
    title: "Java Development",
    issuer: "TechnoHacks Solutions Pvt. Ltd.",
    verifyLabel: "View Certificate",
    href: "/assets/images/projects/java_development.pdf",
    tag: "Enterprise Java",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Thairanex",
    verifyLabel: "View Certificate",
    href: "/assets/images/projects/full_stack_development.pdf",
    tag: "Web Systems",
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(185,133,46,0.06),transparent_70%)]" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="05 · Recognition"
          title="Achievements & certifications."
          description="Recognitions from competitive hackathons, college leadership, and accredited institutional certifications."
        />

        {/* Milestone Cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border hairline bg-cream-soft p-6 shadow-card hover:border-brass transition-colors duration-300"
            >
              <item.icon size={20} className="text-brass" strokeWidth={1.75} />
              <h3 className="mt-3 font-display text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Depth Carousel for Certifications */}
        <div className="mt-14">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <span className="section-label !text-[0.68rem]">Accredited Credentials</span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                3D Certificate Deck
              </h3>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs text-ink-faint">
              <ShieldCheck size={14} className="text-brass" /> Click side cards or arrows to browse
            </span>
          </div>

          <DepthCarousel items={certifications} />
        </div>
      </div>
    </section>
  );
}
