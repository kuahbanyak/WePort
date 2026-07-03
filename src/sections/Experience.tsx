import { experience } from "../data/content";
import { RouteLabel, SectionHeading } from "../components/RouteLabel";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <RouteLabel path="/experience" title="Experience" />
        <SectionHeading>Where I've worked</SectionHeading>

        <div className="relative">
          {/* connecting line — encodes that this is one continuous growth story */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px"
            style={{ backgroundColor: "var(--color-border-bright)" }}
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experience.map((entry, i) => (
              <div key={i} className="relative pl-9">
                <span
                  className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full"
                  style={{
                    backgroundColor: i === 0 ? "var(--color-accent)" : "var(--color-bg)",
                    border: "2px solid var(--color-accent)",
                  }}
                  aria-hidden="true"
                />

                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--color-accent-bright)",
                  }}
                >
                  {entry.duration}
                </p>

                <h3
                  className="mt-1 text-xl font-semibold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
                >
                  {entry.role}
                </h3>

                <p className="mt-0.5 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  {entry.company} · {entry.location}
                </p>

                <ul className="mt-4 space-y-2">
                  {entry.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex gap-2.5 text-sm leading-relaxed"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      <span style={{ color: "var(--color-accent-bright)" }}>·</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
