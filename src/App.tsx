import { useState, type FormEvent } from "react";
import "./App.css";
import { profile, skills, projects, experiences } from "./data";

function Navbar() {
  return (
    <header className="nav">
      <a href="#hero" className="nav__brand">
        <span className="nav__brand-mark">{"{ }"}</span>
        <span>Alwi Aziz</span>
      </a>
      <nav className="nav__links">
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="hero__text">
        <span className="eyebrow">Backend Engineer</span>
        <h1 className="hero__title">
          Hi, I'm <span className="accent">{profile.name}</span>.
        </h1>
        <p className="hero__subtitle">{profile.title}</p>
        <p className="hero__intro">{profile.intro}</p>
        <div className="hero__cta">
          <a href="#contact" className="btn btn--primary">
            Contact Me
          </a>
          <a
            href={profile.resumeUrl}
            className="btn btn--ghost"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="hero__photo-wrap">
        <div className="hero__photo-blob" aria-hidden="true" />
        <img className="hero__photo" src={profile.photo} alt={profile.name} />
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section__head">
        <span className="eyebrow">02 — Skills</span>
        <h2>What I work with</h2>
        <p className="muted">
          A snapshot of the tools and practices I use to design, build and ship
          backend systems.
        </p>
      </div>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-card" key={group.category}>
            <h3>{group.category}</h3>
            <div className="tags">
              {group.items.map((s) => (
                <span className="tag" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section__head">
        <span className="eyebrow">03 — Projects</span>
        <h2>Selected work</h2>
        <p className="muted">
          A few projects that show how I think about backend problems.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((p) => (
          <article className="project-card" key={p.title}>
            <h3>{p.title}</h3>
            <p className="muted">{p.description}</p>
            <p className="project-card__problem">
              <strong>Problem solved:</strong> {p.problem}
            </p>
            <div className="tags">
              {p.stack.map((s) => (
                <span className="tag tag--sm" key={s}>
                  {s}
                </span>
              ))}
            </div>
            <div className="project-card__links">
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer">
                  GitHub →
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer">
                  Live demo →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section__head">
        <span className="eyebrow">04 — Experience</span>
        <h2>Career so far</h2>
        <p className="muted">
          From internship to contract engineer at PT United Tractors Tbk.
        </p>
      </div>
      <ol className="timeline">
        {experiences.map((e) => (
          <li className="timeline__item" key={e.role + e.period}>
            <div className="timeline__dot" aria-hidden="true" />
            <div className="timeline__content">
              <div className="timeline__head">
                <h3>{e.role}</h3>
                <span className="timeline__period">{e.period}</span>
              </div>
              <p className="timeline__company">
                {e.company}
                {e.location ? ` · ${e.location}` : ""}
              </p>
              <ul>
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

type FormState = "idle" | "sending" | "success" | "error";

function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email.";
    if (form.message.trim().length < 10)
      e.message = "Message should be at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (!validate()) return;
    setState("sending");
    try {
      // TODO: wire up Formspree / EmailJS endpoint here.
      // Example with Formspree:
      // await fetch("https://formspree.io/f/your-id", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json", Accept: "application/json" },
      //   body: JSON.stringify(form),
      // });
      await new Promise((r) => setTimeout(r, 800));
      setState("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setState("error");
    }
  }

  return (
    <section id="contact" className="section">
      <div className="section__head">
        <span className="eyebrow">05 — Contact</span>
        <h2>Let's talk</h2>
        <p className="muted">
          Open to backend roles, freelance projects and interesting
          conversations.
        </p>
      </div>

      <div className="contact">
        <form className="contact__form" onSubmit={onSubmit} noValidate>
          <label>
            <span>Name</span>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              aria-invalid={!!errors.name}
            />
            {errors.name && <small className="error">{errors.name}</small>}
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              aria-invalid={!!errors.email}
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </label>
          <label>
            <span>Message</span>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <small className="error">{errors.message}</small>
            )}
          </label>

          <button
            type="submit"
            className="btn btn--primary"
            disabled={state === "sending"}
          >
            {state === "sending" ? "Sending…" : "Send message"}
          </button>

          {state === "success" && (
            <p className="form-status form-status--ok">
              Thanks — your message was sent. I'll get back to you soon.
            </p>
          )}
          {state === "error" && (
            <p className="form-status form-status--err">
              Something went wrong. Please email me directly.
            </p>
          )}
        </form>

        <aside className="contact__direct">
          <h3>Direct links</h3>
          <ul>
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React + Vite.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
