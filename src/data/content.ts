import type { SkillCategory, Project, ExperienceEntry, ContactLink } from "../types/content";

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages & Frameworks",
    routePath: "/skills/languages",
    skills: ["C#", ".NET Core", "Go", "TypeScript", "JavaScript", "HTML", "CSS"],
    color: "var(--color-amber)",
    badgeBg: "rgba(245, 158, 11, 0.12)",
  },
  {
    label: "Architecture",
    routePath: "/skills/architecture",
    skills: ["Microservices", "RESTful APIs", "MVC", "TDD", "Clean Architecture"],
    color: "var(--color-cyan)",
    badgeBg: "rgba(6, 182, 212, 0.12)",
  },
  {
    label: "Data & Storage",
    routePath: "/skills/data",
    skills: ["SQL Server", "PostgreSQL", "Schema Design", "Query Optimization", "Database Normalization", "Performance Tuning"],
    color: "var(--color-emerald)",
    badgeBg: "rgba(16, 185, 129, 0.12)",
  },
  {
    label: "Cloud & Infrastructure",
    routePath: "/skills/cloud",
    skills: ["Azure DevOps", "CI/CD", "Git", "Docker", "Kubernetes"],
    color: "var(--color-sky)",
    badgeBg: "rgba(56, 189, 248, 0.12)",
  },
  {
    label: "Engineering Practices",
    routePath: "/skills/practices",
    skills: ["Agile / Scrum", "TDD", "Code Review", "Cross-Functional Collaboration"],
    color: "var(--color-rose)",
    badgeBg: "rgba(244, 63, 94, 0.12)",
  },
];

export const projects: Project[] = [
  {
    title: "Medical Appointment Booking System",
    description:
      "A distributed booking engine that enables patients to schedule appointments online and cuts in-person wait times.",
    problem:
      "Traditional hospital registration forced patients to wait on-site for extended periods without queue visibility. This system solves it with digital reservation and real-time slot availability.",
    stack: ["Go", "PostgreSQL", "Docker", "React", "Vite"],
    githubUrl: "https://github.com/kuahbanyak/LearnGO",
  },
];

export const experience: ExperienceEntry[] = [
  {
    role: "Back End Developer (Contract)",
    company: "PT United Tractors Tbk",
    duration: "Jul 2022 to Present",
    location: "East Jakarta · On-site",
    bullets: [
      "Built and maintained backend services in C#/.NET Core and Go for internal operations.",
      "Architected workflows and normalized database schemas across SQL Server and PostgreSQL.",
      "Refactored legacy code using TDD and MVC patterns, cutting API response times.",
      "Set up CI/CD pipelines in Azure DevOps across Dev, Staging, and Production environments.",
      "Supported other divisions on cross-functional backend issues.",
    ],
  },
  {
    role: "Back End Developer (Internship)",
    company: "PT United Tractors Tbk",
    duration: "Apr 2022 to Jun 2022",
    location: "East Jakarta · On-site",
    bullets: [
      "Gained early backend exposure using JavaScript, HTML, and related web fundamentals.",
      "Internal promotion to full contract role following internship.",
    ],
  },
];

export const contactLinks: ContactLink[] = [
  { label: "Email", value: "alwibusiness@gmail.com", href: "mailto:alwibusiness@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/muhammadalwiaziz", href: "https://www.linkedin.com/in/muhammadalwiaziz/" },
  { label: "GitHub", value: "github.com/kuahbanyak", href: "https://github.com/kuahbanyak" },
];
