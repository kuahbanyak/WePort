// Centralized content for the personal brand website.
// TODO: replace placeholder values (marked with TODO) with real content before launch.

export const profile = {
  name: "Muhammad Alwi Aziz",
  title: "Backend Engineer — .NET Core & Go",
  tagline: "Microservices · REST APIs · Cloud",
  intro:
    "I'm a Backend Engineer with 3–5 years of experience building scalable microservices and RESTful APIs in C#/.NET Core and Go. I focus on clean server-side architecture, database performance, and shipping reliably in cloud environments like Azure DevOps.",
  // TODO: replace with your real headshot. Drop a file in /public and update the path.
  photo: "./public/phto.png",
  // TODO: add a public resume URL or place a PDF at /public/resume.pdf
  resumeUrl: "/resume.pdf",
  // TODO: confirm contact details
  email: "malwiazizbusiness@gmail.com", // TODO
  linkedin: "https://www.linkedin.com/in/muhammadalwiaziz/", // TODO: confirm exact handle
  github: "https://github.com/kuahbanyak", // TODO: add github username
};

export type SkillGroup = { category: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    category: "Languages & Frameworks",
    items: ["C#", ".NET Core", "Go", "TypeScript", "JavaScript", "HTML" , "CSS"],
  },
  {
    category: "Architecture",
    items: ["Microservices", "RESTful APIs", "MVC", "TDD"],
  },
  {
    category: "Data",
    items: [
      "SQL Server",
      "PostgreSQL",
      "Schema design",
      "Query optimization",
    ],
  },
  {
    category: "Cloud & Tools",
    items: ["Azure DevOps", "CI/CD pipelines", "Git"],
  },
  {
    category: "Practices",
    items: ["Agile / Scrum", "Code review", "Cross-functional collaboration"],
  },
];

export type Project = {
  title: string;
  description: string;
  problem: string;
  stack: string[];
  github?: string;
  demo?: string;
};

// TODO: replace these with 3+ real personal / freelance / open-source projects with public links.
export const projects: Project[] = [
  {
    title: "Project One — TODO",
    description:
      "This project is about building system for Medical Appointment Booking, where people can book on hospital online.",
    problem:
      "TODO: When booking on hospital we need to go to the hospital and wait for a long time, so we need to make a system that can help people to book on hospital online.",
    stack: ["Go", "PostgreSQL", "Docker" , "React + Vite"],
    github: "https://github.com/kuahbanyak/LearnGO", // TODO
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    role: "Back End Developer (Contract)",
    company: "PT United Tractors Tbk",
    period: "Jul 2022 – Present",
    location: "East Jakarta · On-site",
    bullets: [
      "Built and maintained backend services in C#/.NET Core and Go for internal operations.",
      "Architected workflows and normalized DB schemas across SQL Server and PostgreSQL.",
      "Refactored legacy code (TDD, MVC), cutting API response times.",
      "Set up CI/CD pipelines in Azure DevOps across Dev / Staging / Prod and supported other divisions on cross-functional backend issues.",
    ],
  },
  {
    role: "Back End Developer (Internship)",
    company: "PT United Tractors Tbk",
    period: "Apr 2022 – Jun 2022",
    location: "East Jakarta",
    bullets: [
      "Early backend exposure using JavaScript, HTML and related web fundamentals — laying the foundation for the contract role that followed.",
    ],
  },
];
