import { projects } from "../data/content";
import { RouteLabel, SectionHeading } from "../components/RouteLabel";

export function Projects() {
  const isSingleProject = projects.length === 1;

  return (
    <section id="projects" className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-28 xl:py-32">
      <div className="mx-auto w-full max-w-[1700px] 2xl:max-w-[1920px]">
        <RouteLabel path="/projects" title="Projects" accentColor="var(--color-coral)" />
        <SectionHeading>Selected Architecture &amp; Projects</SectionHeading>

        {isSingleProject ? (
          /* Single featured project: full-width showcase */
          <div className="w-full">
            {projects.map((project, i) => (
              <article
                key={i}
                className="group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:border-[var(--color-coral)] hover:shadow-2xl hover:shadow-orange-500/10"
                style={{
                  backgroundColor: "var(--color-bg-elevated)",
                  borderColor: "var(--color-border)",
                }}
              >
                {/* Top accent bar: Coral to Amber to Violet gradient.
                    Purpose: encodes the project's chromatic identity and separates the card header from body at a glance. One element, structural function. */}
                <div className="h-1 w-full bg-gradient-to-r from-[var(--color-coral)] via-[var(--color-amber)] to-[var(--color-accent)]" />

                <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10 xl:p-12">
                  {/* Left: project details */}
                  <div className="flex flex-col justify-between lg:col-span-7 xl:col-span-8">
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-2.5">
                        <span
                          className="rounded-full px-3 py-1 text-xs font-semibold"
                          style={{
                            backgroundColor: "rgba(251, 146, 60, 0.15)",
                            color: "var(--color-coral)",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          Featured
                        </span>
                        <span className="text-xs font-mono" style={{ color: "var(--color-text-secondary)" }}>
                          v1.0.0 · Production Ready
                        </span>
                      </div>

                      <h3
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
                        style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
                      >
                        {project.title}
                      </h3>

                      <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                        {project.description}
                      </p>

                      {/* Problem context box */}
                      <div
                        className="mt-6 rounded-xl border p-4 sm:p-5"
                        style={{
                          backgroundColor: "rgba(9, 13, 22, 0.65)",
                          borderColor: "var(--color-border-bright)",
                        }}
                      >
                        <p
                          className="text-xs font-semibold mb-2"
                          style={{
                            fontFamily: "var(--font-mono)",
                            color: "var(--color-coral)",
                          }}
                        >
                          Problem &amp; impact
                        </p>
                        <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                          {project.problem}
                        </p>
                      </div>
                    </div>

                    {/* Action links */}
                    <div className="mt-8 flex flex-wrap items-center gap-4 pt-4 border-t border-[var(--color-border)]">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0"
                          style={{ backgroundColor: "var(--color-accent-solid)", color: "#fff" }}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                          <span>Explore repository</span>
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover-accent flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 active:translate-y-0"
                          style={{
                            borderColor: "var(--color-border-bright)",
                            color: "var(--color-text-primary)",
                            backgroundColor: "rgba(9, 13, 22, 0.4)",
                          }}
                        >
                          Live demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right: stack & specs */}
                  <div
                    className="flex flex-col justify-between rounded-xl border p-6 lg:col-span-5 xl:col-span-4"
                    style={{
                      backgroundColor: "rgba(9, 13, 22, 0.5)",
                      borderColor: "var(--color-border-bright)",
                    }}
                  >
                    <div>
                      <p
                        className="text-xs font-semibold mb-4"
                        style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}
                      >
                        Core technologies
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border px-3 py-1.5 text-xs font-mono font-medium transition-colors hover:border-[var(--color-coral)]"
                            style={{
                              backgroundColor: "var(--color-bg-elevated)",
                              borderColor: "var(--color-border-bright)",
                              color: "var(--color-coral)",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 space-y-3 pt-6 border-t border-[var(--color-border)]">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-mono" style={{ color: "var(--color-text-secondary)" }}>Architecture</span>
                          <span className="font-medium" style={{ color: "var(--color-text-primary)" }}>Modular Services</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-mono" style={{ color: "var(--color-text-secondary)" }}>Primary DB</span>
                          <span className="font-medium" style={{ color: "var(--color-text-primary)" }}>PostgreSQL</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-mono" style={{ color: "var(--color-text-secondary)" }}>Containerization</span>
                          <span className="font-medium" style={{ color: "var(--color-text-primary)" }}>Docker</span>
                        </div>
                      </div>
                    </div>

                    {/* Real status: project is on GitHub and open-source */}
                    <div className="mt-6 flex items-center gap-2 text-xs" style={{ color: "var(--color-emerald)" }}>
                      <span
                        className="h-2 w-2 rounded-full shrink-0"
                        style={{ backgroundColor: "var(--color-emerald)" }}
                        aria-label="Open source"
                      />
                      <span className="font-mono">Open-source &amp; verifiable</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Multi-project grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {projects.map((project, i) => (
              <article
                key={i}
                className="group flex flex-col justify-between rounded-xl border p-6 transition-all duration-200 hover:border-[var(--color-accent)] hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--color-bg-elevated)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div>
                  <h3
                    className="text-xl font-semibold leading-snug"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
                  >
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {project.description}
                  </p>

                  <div
                    className="mt-4 rounded-lg p-3 border"
                    style={{
                      backgroundColor: "rgba(10, 14, 20, 0.5)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    <p
                      className="text-xs font-semibold mb-1"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent-bright)" }}
                    >
                      Problem solved
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      {project.problem.replace(/^TODO:\s*/i, "")}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded px-2.5 py-1 text-xs"
                        style={{
                          backgroundColor: "var(--color-bg)",
                          color: "var(--color-accent-bright)",
                          fontFamily: "var(--font-mono)",
                          border: "1px solid var(--color-border-bright)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links: no decorative arrows. Link text is the signal. */}
                <div className="mt-6 flex gap-4 pt-4 border-t border-[var(--color-border)]">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover-accent text-sm font-medium"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover-accent text-sm font-medium"
                      style={{ color: "var(--color-text-secondary)" }}
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
