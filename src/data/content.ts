import type { SkillCategory, Project, ExperienceEntry, ContactLink } from "../types/content";

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages & Frameworks",
    routePath: "/skills/languages",
    skills: ["C#", ".NET Core", "Go"],
  },
  {
    label: "Architecture",
    routePath: "/skills/architecture",
    skills: ["Microservices", "RESTful APIs", "MVC"],
  },
  {
    label: "Data",
    routePath: "/skills/data",
    skills: ["SQL Server", "PostgreSQL", "Schema Design", "Query Optimization"],
  },
  {
    label: "Cloud & Tools",
    routePath: "/skills/cloud",
    skills: ["Azure DevOps", "CI/CD", "Git"],
  },
  {
    label: "Practices",
    routePath: "/skills/practices",
    skills: ["Agile / Scrum", "TDD", "Code Review"],
  },
];

// TODO(Alwi): Replace with your real projects — title, description, problem solved,
// stack, and links. Send me 2-3 and I'll drop them in.
export const projects: Project[] = [
  {
    title: "Project title goes here",
    description: "One or two sentences on what this project is and what it does.",
    problem: "The specific problem this solved, in concrete terms.",
    stack: ["C#", ".NET Core", "PostgreSQL"],
    githubUrl: "#",
  },
  {
    title: "Project title goes here",
    description: "One or two sentences on what this project is and what it does.",
    problem: "The specific problem this solved, in concrete terms.",
    stack: ["Go", "Docker"],
    githubUrl: "#",
  },
  {
    title: "Project title goes here",
    description: "One or two sentences on what this project is and what it does.",
    problem: "The specific problem this solved, in concrete terms.",
    stack: ["C#", "Microservices"],
    githubUrl: "#",
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
  { label: "Email", value: "your@email.com", href: "mailto:your@email.com" },
  { label: "LinkedIn", value: "linkedin.com/in/yourprofile", href: "#" },
  { label: "GitHub", value: "github.com/yourusername", href: "#" },
];
