export interface SkillCategory {
  label: string;
  routePath: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  problem: string;
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  duration: string;
  location: string;
  bullets: string[];
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}
