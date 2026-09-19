import { skillCategories } from "../data/content";
import { RouteLabel, SectionHeading } from "../components/RouteLabel";

export function Skills() {
  const [featured, ...supporting] = skillCategories;

  return (
    <section id="skills" className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-28 xl:py-32">
      <div className="mx-auto w-full max-w-[1700px] 2xl:max-w-[1920px]">
        <RouteLabel path="/skills" title="Skills" accentColor="var(--color-amber)" />
        <SectionHeading>Technical Expertise &amp; Stack</SectionHeading>

        {/* Featured category: full-width row with larger type.
            Purpose: Languages & Frameworks is the primary hiring signal for this role. It earns a distinct, wider layout over supporting categories. */}
        <div
          className="mb-4 rounded-xl p-6 sm:p-7 transition-all duration-300"
          style={{
            backgroundColor: "var(--color-bg-elevated)",
            border: `1px solid ${featured.color}`,
          }}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-5">
            <h3
              className="text-lg sm:text-xl font-semibold"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
            >
              {featured.label}
            </h3>
            <span
              className="rounded px-2 py-0.5 text-xs font-medium shrink-0"
              style={{
                fontFamily: "var(--font-mono)",
                color: featured.color,
                backgroundColor: featured.badgeBg,
              }}
            >
              {featured.routePath}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {featured.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-150"
                style={{
                  backgroundColor: "rgba(9, 13, 22, 0.7)",
                  border: "1px solid var(--color-border-bright)",
                  color: "var(--color-text-secondary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = featured.color ?? "var(--color-border-bright)";
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

        {/* Supporting categories: 2-col on md, 4-col on xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {supporting.map((category) => {
            const catColor = category.color ?? "var(--color-accent-bright)";
            const catBg = category.badgeBg ?? "rgba(139, 92, 246, 0.12)";

            return (
              <div
                key={category.label}
                className="group flex flex-col rounded-xl p-5 transition-all duration-300 hover:-translate-y-1"
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
                <div className="mb-3 flex items-start justify-between gap-2">
                  <h3
                    className="text-sm font-semibold leading-snug"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
                  >
                    {category.label}
                  </h3>
                  <span
                    className="shrink-0 rounded px-1.5 py-0.5 font-medium leading-none"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.625rem",
                      color: catColor,
                      backgroundColor: catBg,
                    }}
                  >
                    {category.routePath}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded px-2 py-0.5 text-xs font-medium transition-colors duration-150"
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
