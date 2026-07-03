import { projects } from "../data/content";
import { RouteLabel, SectionHeading } from "../components/RouteLabel";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <RouteLabel path="/projects" title="Projects" />
        <SectionHeading>Selected work</SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <article
              key={i}
              className="hover-accent group flex flex-col rounded-xl p-6 transition-transform hover:-translate-y-1"
              style={{
                backgroundColor: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border)",
              }}
            >
              <h3
                className="text-lg font-semibold"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
              >
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                {project.description}
              </p>

              <div className="mt-4">
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6875rem",
                    color: "var(--color-text-tertiary)",
                  }}
                >
                  PROBLEM SOLVED
                </p>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {project.problem}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded px-2 py-1 text-xs"
                    style={{
                      backgroundColor: "var(--color-bg)",
                      color: "var(--color-accent-bright)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4" style={{ borderTop: "1px solid var(--color-border)", paddingTop: "1rem" }}>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="hover-accent text-sm font-medium"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    GitHub →
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    className="hover-accent text-sm font-medium"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Live demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
