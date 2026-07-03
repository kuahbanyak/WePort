import type { SkillCategory, Project, ExperienceEntry, ContactLink } from "../types/content";

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages & Frameworks",
    routePath: "/skills/languages",
    skills: ["C#", ".NET Core", "Go" , "TypeScript", "JavaScript", "HTML" , "CSS"],
  },
  {
    label: "Architecture",
    routePath: "/skills/architecture",
    skills: ["Microservices", "RESTful APIs", "MVC", "TDD" , "Clean Architecture"],
  },
  {
    label: "Data",
    routePath: "/skills/data",
    skills: ["SQL Server", "PostgreSQL", "Schema Design", "Query Optimization" , "Database Design" , "Database Normalization" , "Database Performance"],
  },
  {
    label: "Cloud & Tools",
    routePath: "/skills/cloud",
    skills: ["Azure DevOps", "CI/CD", "Git" , "Docker" , "Kubernetes"],
  },
  {
    label: "Practices",
    routePath: "/skills/practices",
    skills: ["Agile / Scrum", "TDD", "Code Review" , "Cross-Functional Collaboration"],
  },
];

// stack, and links. Send me 2-3 and I'll drop them in.
export const projects: Project[] = [
    {
    title: "Project One — MEDICAL APPOINTMENT BOOKING SYSTEM",
    description:
        "This project is about building system for Medical Appointment Booking, where people can book on hospital online.",
    problem:
        "TODO: When booking on hospital we need to go to the hospital and wait for a long time, so we need to make a system that can help people to book on hospital online.",
    stack: ["Go", "PostgreSQL", "Docker" , "React + Vite"],
    githubUrl: "https://github.com/kuahbanyak/LearnGO",
  },
];

export const experience: ExperienceEntry[] = [
  {
    role: "Back End Developer (Contract)",
    company: "PT United Tractors Tbk",
    duration: "Jul 2022 — Present",
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
    duration: "Apr 2022 — Jun 2022",
    location: "East Jakarta · On-site",
    bullets: [
      "Gained early backend exposure using JavaScript, HTML, and related web fundamentals.",
      "Internal promotion to full contract role following internship.",
    ],
  },
];

// TODO(Alwi): Add your real email, LinkedIn, and GitHub links here.
export const contactLinks: ContactLink[] = [
  { label: "Email", value: "me@email.com", href: "mailto:alwibusiness@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/muhammadalwiaziz/", href: "https://www.linkedin.com/in/muhammadalwiaziz/" },
  { label: "GitHub", value: "github.com/kuahbanyak", href: "https://github.com/kuahbanyak" },
];
