# Product Requirements Document

## Personal Brand Website — Muhammad Alwi Aziz

*Backend Engineer · .NET Core & Go · Microservices & APIs*

| | |
|---|---|
| **Document Owner** | Muhammad Alwi Aziz |
| **Status** | Draft v1.1 |
| **Date** | June 19, 2026 |
| **Project Type** | Personal Brand Website (Portfolio + Blog) |
| **Build Approach** | PRD first — implementation phase to follow |

---

## 1. Overview

### 1.1 Purpose
This document defines the requirements for a personal brand website for Muhammad Alwi Aziz, a Backend Engineer specializing in C# / .NET Core and Go. The site exists to establish a professional online presence that showcases his work, technical identity, and writing — separate from LinkedIn or GitHub — that he fully owns and controls.

### 1.2 Background
Alwi has 3–5 years of backend engineering experience, focused on designing and developing scalable microservices and RESTful APIs. His work spans architecting server-side solutions, optimizing database performance, and operating within cloud environments such as Azure DevOps, within collaborative agile teams. He does not have a frontend background, so this PRD is intentionally scoped to be buildable with a simple, low-maintenance front end (e.g. a template or website builder) rather than requiring custom frontend engineering.

### 1.3 Goals
- Build a personal brand: establish Alwi as a credible, visible backend engineer in the .NET / Go and cloud space.
- Showcase portfolio: present projects, skills, and work experience in one organized, easy-to-scan place.
- Enable outreach: give recruiters, collaborators, and peers a clear way to get in touch.
- Support content: provide a home for technical blog posts that reinforce expertise over time.

### 1.4 Non-Goals
- This is not an e-commerce, SaaS, or client-facing product site.
- No user accounts, payments, or complex backend logic are required for v1.
- Not building a custom CMS — a simple/managed solution is preferred given no frontend background.

---

## 2. Target Audience

| Audience | Why They Visit | What They Need to See |
|---|---|---|
| Recruiters / Hiring Managers | Evaluating fit for backend roles | Clear skills, experience, and proof of work (projects) |
| Potential Clients (freelance) | Considering hiring for a project | Portfolio, tech stack, contact method |
| Peers / Developer Community | Networking, reading technical content | Blog posts, GitHub links, technical depth |
| Alwi himself | Personal brand ownership | A page that fully represents him, independent of any platform |

---

## 3. Scope & Site Structure (Sections)

Based on requirements gathering, the site will include the following five sections, in this order:

| Section | Purpose | Key Content |
|---|---|---|
| 1. Hero / About | First impression + identity | Name, title ("Backend Engineer — .NET Core & Go"), short intro, profile photo, CTA buttons (Contact, Resume) |
| 2. Skills | Prove technical range | C# / .NET Core, Go, microservices, REST APIs, SQL/DB optimization, Azure DevOps, Agile |
| 3. Projects / Portfolio | Demonstrate real work | Project cards: name, problem solved, stack used, role, link (GitHub/live demo) |
| 4. Work Experience | Career credibility | Timeline: company, role, dates, key responsibilities/achievements |
| 5. Contact | Enable outreach | Contact form (name, email, message), + direct links: email, LinkedIn, GitHub |

> **Note:** "Personal brand / blog" was selected as the primary goal, but blog functionality was not selected as a v1 section. Recommendation: reserve a "Blog" or "Writing" section/route for Phase 2, since it directly supports the stated personal-branding goal once the core profile is live.

---

## 4. Design Direction

### 4.1 Visual Style
Bold & colorful — a confident, modern, slightly playful aesthetic rather than a minimalist/corporate one. This should still read as professional and credible to recruiters, so boldness should come from color and accent use, not from sacrificing clarity.

### 4.2 Design Guidelines
- Primary accent color: one strong, saturated brand color (e.g. a vivid orange, electric blue, or similar) used consistently for buttons, links, and highlights.
- Neutral base: dark text on white/light background, or a dark-mode-first design with the accent color popping against it — to be decided in design phase.
- Typography: one bold, modern sans-serif for headings (large, confident sizing) paired with a clean readable body font.
- Imagery: a real, professional but approachable profile photo; avoid generic stock photos.
- Motion: subtle hover states and scroll animations are encouraged to reinforce "bold" without becoming distracting.
- Consistency: same accent color, spacing rhythm, and corner-radius style used across all sections.

### 4.3 Accessibility & Usability
- Maintain WCAG AA color contrast even with bold colors (test text-on-accent and accent-on-background combinations).
- Fully responsive: mobile, tablet, and desktop breakpoints.
- Fast load time: target under 2.5s First Contentful Paint on a typical connection.

---

## 5. Functional Requirements

### 5.1 Hero / About
1. Display name, professional title, and a 2–3 sentence summary derived from Alwi's positioning statement (Backend Engineer, .NET Core & Go, microservices/APIs).
2. Include a clear primary call-to-action (e.g. "Contact Me" or "View Projects").
3. Optionally include a downloadable resume/CV link.

### 5.2 Skills
1. Group skills into categories: Languages & Frameworks (C#, .NET Core, Go), Architecture (Microservices, RESTful APIs), Data (Database design & performance optimization), Cloud & Tools (Azure DevOps), Practices (Agile/Scrum).
2. Display visually (icons, tags, or progress indicators) rather than as plain paragraph text.

### 5.3 Projects / Portfolio
1. Each project entry includes: title, short description, the business problem it solved, tech stack used, and a link (GitHub repo and/or live demo, where available).
2. Support an expandable/filterable view if the project count grows beyond ~6.
3. Minimum viable v1: at least 3 well-documented projects.

### 5.4 Work Experience
1. Reverse-chronological timeline format: company, role/title, employment dates, 2–4 bullet points of impact/responsibility per role.
2. Emphasize measurable outcomes where possible (e.g. performance improvements, systems built/scaled).

### 5.5 Contact
1. A contact form with Name, Email, and Message fields, with client-side validation and a success/failure confirmation state.
2. Form submissions delivered via email (e.g. using a no-backend-required service like Formspree, EmailJS, or similar, given the no-custom-backend constraint for this site).
3. Direct links displayed alongside the form: email address, LinkedIn, GitHub, and any other relevant professional profile.

---

## 6. Technical Requirements

### 6.1 Build Constraint
Alwi is a backend engineer with no frontend background. The technical approach must minimize frontend complexity:
- Preferred: a pre-built, well-designed template (HTML/CSS/JS or a simple site builder) that can be customized via content, not by writing layout code from scratch.
- Avoid requiring a custom design system, custom component architecture, or a JS framework that needs ongoing frontend maintenance, unless Alwi has support.

### 6.2 Hosting & Domain
- Static hosting recommended (e.g. GitHub Pages, Netlify, Vercel, or Cloudflare Pages) — free or low-cost, and fits a backend engineer's existing comfort with Git-based deployment.
- Custom domain (e.g. alwiaziz.dev or similar) recommended over a subdomain, to strengthen personal branding.

### 6.3 Performance & SEO
- Basic on-page SEO: page titles, meta descriptions, Open Graph tags for link previews (especially for LinkedIn sharing).
- Optimized images (WebP where possible) to keep load times low.

### 6.4 Analytics
- Lightweight, privacy-respecting analytics (e.g. Plausible, Simple Analytics, or Google Analytics) to track visits and which sections get attention.

---

## 7. Content Checklist (To Prepare Before Build)

Since the site's quality depends on real content, the following should be gathered/written before implementation begins:

| Item | Section | Status | Notes |
|---|---|---|---|
| Professional headshot photo | Hero | Needed | High-res, good lighting |
| Bio / positioning statement | Hero | Ready | Confirmed from LinkedIn About |
| Skills list with proficiency | Skills | Partially ready | Core stack confirmed; LinkedIn lists "+14 skills" on main role — pull full list for categorization |
| 3+ project case studies | Projects | Needed | Internal systems at United Tractors aren't public-facing — need 2–3 separate/personal/open-source projects with public links (see Open Questions) |
| Work history details | Experience | Ready | United Tractors role + internship confirmed (see 7.1) |
| Resume/CV file (PDF) | Hero/Contact | Needed | Optional but recommended |
| Contact email & social links | Contact | Needed | LinkedIn confirmed; need email + GitHub |

### 7.1 Confirmed Work Experience (from LinkedIn)

| Role | Company / Duration | Highlights |
|---|---|---|
| Back End Developer (Contract) | PT United Tractors Tbk — Jul 2022–Present (4 yrs, East Jakarta, On-site) | Built and maintained backend services in C#/.NET Core and Go for internal operations; architected workflows and normalized DB schemas (SQL Server/PostgreSQL); refactored legacy code (TDD, MVC) cutting API response times; set up CI/CD pipelines in Azure DevOps across Dev/Staging/Prod; supported other divisions on cross-functional backend issues. |
| Back End Developer (Internship) | PT United Tractors Tbk — Apr 2022–Jun 2022 (3 mos) | Early backend exposure using JavaScript, HTML, and related web fundamentals. |

> **Note:** LinkedIn shows this as one company entry with two stacked positions (internship → contract), reflecting a clean internal promotion at PT United Tractors Tbk. The Work Experience section should present this as a single growth story rather than two unrelated jobs.

---

## 8. Success Metrics
- Site is live and accessible on a custom domain.
- All five core sections are complete with real (non-placeholder) content.
- Page loads in under 2.5 seconds on average mobile connection.
- Contact form delivers messages reliably (tested end-to-end).
- Site is shared on LinkedIn/GitHub profile within 1 week of launch.

---

## 9. Roadmap

| Phase | Scope | Outcome |
|---|---|---|
| Phase 0 — This PRD | Define requirements | Shared understanding of scope (this document) |
| Phase 1 — Content | Gather all content from Section 7 | All real content ready, no placeholders |
| Phase 2 — Build | Implement using a template; Hero, Skills, Projects, Experience, Contact | Functional site on staging |
| Phase 3 — Launch | Domain + hosting + QA across devices | Live public site |
| Phase 4 — Blog (future) | Add a Writing/Blog section | Supports long-term personal brand goal |

---

## 10. Open Questions
1. What domain name should be used?
2. Since United Tractors projects are internal, what 2–3 personal, freelance, or open-source projects should be featured to fill the Projects section (need public links/screenshots)?
3. Should the resume/CV be downloadable, or only available on request via the contact form?
4. Primary accent color preference — any specific color in mind, or should one be proposed during design?
5. What is the full "+14 skills" list from the LinkedIn role, to properly categorize the Skills section?
