export const data = {
  name: "Ernest Bernard T. Lazatin",
  title: "Full Stack Developer",
  location: "San Fernando, Pampanga",
  phone: "09354681910",
  email: "ernestlazatin69@gmail.com",
  github: "https://github.com/lilernestooo",
  linkedin: "https://linkedin.com/in/lazatin-ernest-bernard-t/",
  resumeUrl: '/Ernest Lazatin (Resume).pdf', // place your resume.pdf inside the /public folder

  about:
    "Full Stack Developer specializing in frontend development, with hands-on experience building modern and responsive web applications. Proficient in frontend technologies such as ReactJS, Vite and TypeScript with a strong focus on clean UI and user experience. Experienced in backend development using Laravel, Node.js and Express, along with database management using PostgreSQL. Skilled in developing RESTful APIs, integrating full-stack systems, and delivering end-to-end solutions.",

  experience: [
    {
      role: "Fullstack Developer Intern",
      company: "Shore360, Inc.",
      period: "January 2026 – April 2026",
      bullets: [
        "Refactored legacy codebases to improve code quality, readability, and maintainability while aligning with modern development standards.",
        "Contributed to debugging, issue resolution, and feature enhancements for an internal intranet system within an active development workflow.",
        "Developed multiple projects by applying architectural patterns, coding best practices, and optimization techniques introduced by senior developers.",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Pampanga State University",
      period: "2022 – 2026",
      honors: ["Dean's Lister: SY 2023–2024 (1st Sem)", "Dean's Lister: SY 2024–2025 (2nd Sem)"],
    },
  ],

  skills: {
    Frontend: ["React.js", "Vite", "TypeScript", "Vue.js"],
    Backend: ["Laravel", "Node.js", "Express", "Firebase"],
    Database: ["MySQL", "PostgreSQL", "Firestore"],
    "Deployment & VCS": ["Vercel", "Render", "GitHub", "Bitbucket"],
    "Soft Skills": ["Problem Solving", "Communication", "Multitasking", "Logic & Decision Making", "Works Under Pressure"],
  },

  projects: [
    {
      name: "FloodWatch",
      description:
        "A Solar-Powered IoT Water Level and Flood Monitoring System in Apalit, Pampanga. Real-time monitoring with alert system.",
      stack: ["JavaScript", "Firebase"],
      icon: "🌊",
    },
    {
      name: "Galang Elementary School Dashboard",
      description:
        "Admin dashboard for Galang Elementary School — manages school data, reports, and administrative workflows.",
      stack: ["Vite", "Node.js", "Express", "PostgreSQL"],
      icon: "🏫",
    },
    {
      name: "Track Me",
      description:
        "OJT Tracker Website for monitoring on-the-job training progress, hours, and submissions.",
      stack: ["ReactJS", "Node.js", "Express", "PostgreSQL"],
      icon: "📍",
    },
  ],
}
