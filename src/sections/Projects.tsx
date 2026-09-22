import { projects } from "../data/content";
import { SectionTitle } from "../components/SectionTitle";

export function Projects() {
  const isSingle = projects.length === 1;

  return (
    <section
      id="projects"
      className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1700px]">
        <SectionTitle annotation="// What I've built">
          Projects.
        </SectionTitle>

        {isSingle ? (
          /* Single featured project: full-width pinned-note layout */
          projects.map((project, i) => (
            <article
              key={i}
              className="sketch-card group p-0 overflow-hidden"
              style={{ transform: "rotate(-0.4deg)" }}
            >
              {/* Top marker bar — encodes the project as the only featured item.
                  Blue + green = the two primary marker colors in this identity. */}
              <div
                className="h-1.5 w-full"
                style={{
                  background: "linear-gradient(90deg, var(--marker-blue) 0%, var(--marker-green) 100%)",
                }}
                aria-hidden="true"
              />

              <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-12 lg:gap-10 lg:p-10 xl:p-12">
                {/* Left: project details */}
                <div className="flex flex-col justify-between lg:col-span-7 xl:col-span-8">
                  <div>
                    {/* Project label — real status from the data, not a badge for decoration */}
                    <div className="mb-3 flex flex-wrap items-center gap-2.5">
                      <span
                        className="sketch-border px-2.5 py-0.5 text-xs font-medium"
                        style={{
                          fontFamily: "var(--font-label)",
                          color: "var(--marker-blue)",
                          borderColor: "var(--marker-blue)",
                          borderRadius: "2px 5px 3px 4px / 4px 2px 5px 3px",
                        }}
                      >
                        Featured
                      </span>
                      {project.githubUrl && (
                        <span
                          className="text-xs"
                          style={{ fontFamily: "var(--font-label)", color: "var(--text-ink-tertiary)" }}
                        >
                          Open-source
                        </span>
                      )}
                    </div>

                    <h3
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
                      style={{ fontFamily: "var(--font-handwritten)", color: "var(--text-ink)" }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="mt-4 text-base sm:text-lg leading-relaxed"
                      style={{ fontFamily: "var(--font-body)", color: "var(--text-ink-secondary)" }}
                    >
                      {project.description}
                    </p>

                    {/* Problem context: content-driven box, not template decoration */}
                    <div
                      className="mt-5 rounded p-4 sm:p-5"
                      style={{
                        background: "rgba(255, 249, 196, 0.5)",
                        border: "1.5px solid var(--border-light)",
                        borderRadius: "3px 7px 5px 4px / 5px 3px 7px 4px",
                      }}
                    >
                      <p
                        className="text-xs font-semibold mb-2"
                        style={{ fontFamily: "var(--font-label)", color: "var(--marker-orange)" }}
                      >
                        Problem solved
                      </p>
                      <p
                        className="text-sm sm:text-base leading-relaxed"
                        style={{ fontFamily: "var(--font-body)", color: "var(--text-ink-secondary)" }}
                      >
                        {project.problem}
                      </p>
                    </div>
                  </div>

                  {/* Action links */}
                  <div
                    className="mt-8 flex flex-wrap items-center gap-4 pt-4"
                    style={{ borderTop: "1.5px dashed var(--border-light)" }}
                  >
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sketch-border flex items-center gap-2 px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0"
                        style={{
                          background: "var(--marker-blue)",
                          color: "#fff",
                          borderColor: "var(--marker-blue)",
                          fontFamily: "var(--font-body)",
                          borderRadius: "3px 6px 4px 5px / 5px 3px 6px 4px",
                        }}
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        View repository
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sketch-border px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 active:translate-y-0"
                        style={{
                          background: "transparent",
                          color: "var(--text-ink)",
                          borderColor: "var(--border-sketch)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        Live demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: stack and specs */}
                <div
                  className="flex flex-col rounded p-5 sm:p-6 lg:col-span-5 xl:col-span-4"
                  style={{
                    background: "var(--bg-board-tinted)",
                    border: "1.5px dashed var(--border-light)",
                    borderRadius: "3px 7px 5px 4px / 5px 3px 7px 4px",
                  }}
                >
                  <p
                    className="text-xs font-semibold mb-4"
                    style={{ fontFamily: "var(--font-label)", color: "var(--text-ink-secondary)" }}
                  >
                    Core technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="sketch-border px-2.5 py-1 text-xs font-medium transition-colors"
                        style={{
                          fontFamily: "var(--font-label)",
                          color: "var(--marker-blue)",
                          borderColor: "var(--marker-blue)",
                          borderRadius: "2px 4px 3px 3px / 3px 2px 4px 3px",
                          background: "rgba(21,101,192,0.07)",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(21,101,192,0.15)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(21,101,192,0.07)"; }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Spec rows */}
                  <div
                    className="mt-6 space-y-2.5 pt-4"
                    style={{ borderTop: "1px dashed var(--border-light)" }}
                  >
                    {[
                      { label: "Architecture", value: "Modular Services" },
                      { label: "Primary DB", value: "PostgreSQL" },
                      { label: "Containers", value: "Docker" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between text-xs">
                        <span style={{ fontFamily: "var(--font-label)", color: "var(--text-ink-tertiary)" }}>
                          {row.label}
                        </span>
                        <span style={{ fontFamily: "var(--font-body)", color: "var(--text-ink)", fontWeight: 500 }}>
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Real status: open-source and verifiable. No glow, no pulse. */}
                  {project.githubUrl && (
                    <div
                      className="mt-5 flex items-center gap-2 text-xs"
                      style={{ fontFamily: "var(--font-label)", color: "var(--marker-green)" }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ background: "var(--marker-green)" }}
                        aria-label="Open source"
                        aria-hidden="true"
                      />
                      Open-source, verifiable on GitHub
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))
        ) : (
          /* Multi-project grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {projects.map((project, i) => (
              <article
                key={i}
                className="sketch-card group flex flex-col justify-between p-6"
                style={{ transform: `rotate(${i % 2 === 0 ? -0.5 : 0.4}deg)` }}
              >
                <div>
                  <h3
                    className="text-xl font-semibold leading-snug"
                    style={{ fontFamily: "var(--font-handwritten)", color: "var(--text-ink)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text-ink-secondary)" }}
                  >
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="sketch-border px-2 py-0.5 text-xs"
                        style={{
                          fontFamily: "var(--font-label)",
                          color: "var(--marker-blue)",
                          borderColor: "var(--marker-blue)",
                          background: "rgba(21,101,192,0.07)",
                          borderRadius: "2px 4px 3px 3px / 3px 2px 4px 3px",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className="mt-6 flex gap-4 pt-4"
                  style={{ borderTop: "1px dashed var(--border-light)" }}
                >
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium transition-colors"
                      style={{ fontFamily: "var(--font-body)", color: "var(--text-ink-secondary)" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "var(--marker-blue)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-ink-secondary)"; }}
                    >
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium transition-colors"
                      style={{ fontFamily: "var(--font-body)", color: "var(--text-ink-secondary)" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "var(--marker-blue)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-ink-secondary)"; }}
                    >
                      Live demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
