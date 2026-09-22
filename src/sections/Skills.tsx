import { SectionTitle } from "../components/SectionTitle";
import { SketchCard } from "../components/SketchCard";

const toolboxCategories = [
  {
    label: "Languages & Frameworks",
    skills: ["C#", ".NET Core", "Go", "TypeScript", "JavaScript", "HTML", "CSS"],
    markerColor: "var(--marker-blue)",
    rotate: -0.5,
  },
  {
    label: "Architecture",
    skills: ["Microservices", "RESTful APIs", "MVC", "TDD", "Clean Architecture"],
    markerColor: "var(--marker-green)",
    rotate: 0.5,
  },
  {
    label: "Data & Storage",
    skills: ["SQL Server", "PostgreSQL", "Schema Design", "Query Optimization", "Performance Tuning"],
    markerColor: "var(--marker-orange)",
    rotate: -0.3,
  },
  {
    label: "Cloud & Infrastructure",
    skills: ["Azure DevOps", "CI/CD", "Git", "Docker", "Kubernetes"],
    markerColor: "var(--marker-blue)",
    rotate: 0.4,
  },
  {
    label: "Engineering Practices",
    skills: ["Agile / Scrum", "TDD", "Code Review", "Cross-Functional Collaboration"],
    markerColor: "var(--marker-green)",
    rotate: -0.6,
  },
];

export function Skills() {
  const [featured, ...supporting] = toolboxCategories;

  return (
    <section
      id="skills"
      className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1700px]">
        <SectionTitle annotation="// My toolbox">
          Technical skills.
        </SectionTitle>

        {/* Featured category — full width, larger treatment.
            Reason: Languages & Frameworks is the primary hiring signal for this role;
            it earns the widest layout over supporting categories. */}
        <SketchCard rotate={featured.rotate} className="mb-6 p-6 sm:p-7">
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
            <h3
              className="text-lg sm:text-xl font-semibold"
              style={{ fontFamily: "var(--font-handwritten)", color: "var(--text-ink)" }}
            >
              {featured.label}
            </h3>
            <span
              className="text-xs"
              style={{ fontFamily: "var(--font-label)", color: "var(--text-ink-tertiary)" }}
            >
              core stack
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {featured.skills.map((skill) => (
              <span
                key={skill}
                className="rounded px-3 py-1.5 text-base font-medium transition-colors duration-150 cursor-default"
                style={{
                  fontFamily: "var(--font-label)",
                  background: "rgba(255,255,255,0.7)",
                  border: "1.5px solid var(--border-light)",
                  color: "var(--text-ink-secondary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = featured.markerColor;
                  e.currentTarget.style.color = featured.markerColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-light)";
                  e.currentTarget.style.color = "var(--text-ink-secondary)";
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </SketchCard>

        {/* Supporting categories — 2-col on sm, 4-col on xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {supporting.map((category) => (
            <SketchCard
              key={category.label}
              rotate={category.rotate}
              className="group flex flex-col p-5"
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <h3
                  className="text-sm font-semibold leading-snug"
                  style={{ fontFamily: "var(--font-handwritten)", color: "var(--text-ink)" }}
                >
                  {category.label}
                </h3>
                {/* Marker colored accent line — signals category identity, not decoration.
                    One per card, not on every element. */}
                <span
                  className="mt-1 h-3 w-0.5 shrink-0 rounded"
                  style={{ background: category.markerColor }}
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded px-2 py-0.5 text-sm font-medium transition-colors duration-150 cursor-default"
                    style={{
                      fontFamily: "var(--font-label)",
                      background: "rgba(255,255,255,0.6)",
                      border: "1px solid var(--border-light)",
                      color: "var(--text-ink-secondary)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = category.markerColor;
                      e.currentTarget.style.color = category.markerColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-light)";
                      e.currentTarget.style.color = "var(--text-ink-secondary)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </SketchCard>
          ))}
        </div>

        {/* Handwritten note: part of whiteboard identity motif */}
        <p
          className="annotation mt-8 text-center"
          style={{ color: "var(--text-ink-tertiary)", fontSize: "0.9rem" }}
        >
          "Tools change. Fundamentals stay."
        </p>
      </div>
    </section>
  );
}
