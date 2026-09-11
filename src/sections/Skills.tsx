import { skillCategories } from "../data/content";
import { RouteLabel, SectionHeading } from "../components/RouteLabel";

export function Skills() {
  return (
    <section id="skills" className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
      <div className="mx-auto w-full max-w-[1700px] 2xl:max-w-[1920px]">
        <RouteLabel path="/skills" title="Skills" accentColor="var(--color-amber)" />
        <SectionHeading>Technical Expertise &amp; Stack</SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 sm:gap-5 xl:gap-6">
          {skillCategories.map((category) => {
            const catColor = category.color || "var(--color-accent-bright)";
            const catBg = category.badgeBg || "rgba(139, 92, 246, 0.12)";

            return (
              <div
                key={category.label}
                className="group flex flex-col justify-between rounded-xl p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  backgroundColor: "var(--color-bg-elevated)",
                  border: "1px solid var(--color-border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = catColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                }}
              >
                <div>
                  <div className="mb-3 sm:mb-4 flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
                    <h3
                      className="text-base font-semibold leading-snug"
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
                    >
                      {category.label}
                    </h3>
                    <span
                      className="shrink-0 rounded px-2 py-0.5 font-medium"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6875rem",
                        color: catColor,
                        backgroundColor: catBg,
                      }}
                    >
                      {category.routePath}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md px-2.5 py-1 text-xs sm:text-sm font-medium transition-all duration-150"
                      style={{
                        backgroundColor: "rgba(9, 13, 22, 0.7)",
                        border: "1px solid var(--color-border-bright)",
                        color: "var(--color-text-secondary)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = catColor;
                        e.currentTarget.style.color = "var(--color-text-primary)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-border-bright)";
                        e.currentTarget.style.color = "var(--color-text-secondary)";
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
