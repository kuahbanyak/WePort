import { skillCategories } from "../data/content";
import { RouteLabel, SectionHeading } from "../components/RouteLabel";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <RouteLabel path="/skills" title="Skills" />
        <SectionHeading>What I work with</SectionHeading>

        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.label}
              className="rounded-xl p-6 transition-colors"
              style={{
                backgroundColor: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3
                  className="text-base font-semibold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
                >
                  {category.label}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6875rem",
                    color: "var(--color-text-tertiary)",
                  }}
                >
                  {category.routePath}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md px-3 py-1.5 text-sm"
                    style={{
                      backgroundColor: "var(--color-bg)",
                      border: "1px solid var(--color-border-bright)",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
