// HOW TO ADD A NEW PROJECT
// 1. Drop a screenshot into: public/assets/images/projects/your-project.png
// 2. Copy one object below, change every field.
// 3. image path must start with "/assets/..." (that maps to the public/assets folder).
// 4. Save the file — the new laptop card appears automatically on the line.
export const projects = [
  {
    id: "autoguard-ai",
    title: "Auto Guard AI",
    tagline: "AI-assisted vehicle maintenance prediction platform",
    description:
      "Spring Boot 3 + Spring AI application that integrates the Groq API (LLaMA 3) for predictive vehicle maintenance. Includes heuristic risk scoring, scheduled data simulation, and role-based access for Owner / Engineer / Admin.",
    stack: ["Spring Boot", "Spring AI", "Groq API", "Spring Security", "Thymeleaf", "Chart.js", "MySQL"],
    image: "/public/assets/images/projects/autoguard-ai.png",
    github: "https://github.com/Gyananjay600",
    live: "",
    metrics: [
      { label: "JPA Entities", value: "7" },
      { label: "Roles", value: "3" },
    ],
  },
  {
    id: "blog-platform",
    title: "Full-Stack Blog Platform",
    tagline: "Secure blogging platform with JWT authentication",
    description:
      "A blog platform built with Spring Boot and MySQL, secured end-to-end with stateless JWT auth. Solved real CORS preflight and Spring Security edge cases along the way.",
    stack: ["Spring Boot", "Spring Security", "JWT", "MySQL", "React"],
    image: "/assets/images/projects/blog-platform.png",
    github: "https://github.com/Gyananjay600",
    live: "",
    metrics: [
      { label: "Auth", value: "JWT" },
      { label: "Type", value: "Full Stack" },
    ],
  },
  {
    id: "task-manager",
    title: "Task Management App",
    tagline: "Team task tracker with a MERN-style stack",
    description:
      "A task management application built on React (Vite) for the UI and Node.js/Express with Sequelize ORM on MySQL for the backend, with full CRUD and status tracking.",
    stack: ["React", "Vite", "Node.js", "Express", "Sequelize", "MySQL"],
    image: "/assets/images/projects/task-manager.png",
    github: "https://github.com/Gyananjay600",
    live: "",
    metrics: [
      { label: "ORM", value: "Sequelize" },
      { label: "Type", value: "Full Stack" },
    ],
  },
  {
    id: "ai-portfolio",
    title: "AI-Integrated Portfolio",
    tagline: "This very site — Java-flavoured, AI-aware",
    description:
      "A personal portfolio built with a strong Java Full Stack foundation and AI integration woven into the experience, from the code-typing hero to project storytelling.",
    stack: ["React", "Tailwind CSS", "Framer Motion", "Three.js"],
    image: "/assets/images/projects/ai-portfolio.png",
    github: "https://github.com/Gyananjay600",
    live: "",
    metrics: [
      { label: "Status", value: "Live" },
      { label: "Type", value: "Personal" },
    ],
  },
];
