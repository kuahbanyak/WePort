import { experience } from "../data/content";
import { RouteLabel, SectionHeading } from "../components/RouteLabel";

export function Experience() {
  return (
    <section id="experience" className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-28 xl:py-32">
      <div className="mx-auto w-full max-w-[1700px] 2xl:max-w-[1920px]">
        <RouteLabel path="/experience" title="Experience" accentColor="var(--color-emerald)" />
        <SectionHeading>Professional Experience</SectionHeading>

        <div className="relative">
          {/* Vertical continuous growth line for mobile/tablet */}
          <div
            className="absolute left-1.75 sm:left-2.25 top-3 bottom-3 w-px lg:hidden"
            style={{ backgroundColor: "var(--color-border-bright)" }}
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-10 lg:space-y-8">
            {experience.map((entry, i) => (
              <div
                key={i}
                className="relative pl-7 sm:pl-9 lg:pl-0 group"
              >
                {/* Mobile/Tablet timeline dot */}
                <span
                  className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full lg:hidden"
                  style={{
                    backgroundColor: i === 0 ? "var(--color-emerald)" : "var(--color-bg)",
                    border: "2px solid var(--color-emerald)",
                  }}
                  aria-hidden="true"
                />

                {/* Desktop Split Card (Full Width) / Mobile Stack */}
                <div
                  className="grid lg:grid-cols-12 gap-4 lg:gap-8 rounded-2xl border p-5 sm:p-6 lg:p-8 transition-all duration-300 hover:border-[var(--color-emerald)] hover:shadow-xl hover:shadow-emerald-500/5"
                  style={{
                    backgroundColor: "var(--color-bg-elevated)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  {/* Left Column (Metadata: Role, Company, Period) */}
                  <div className="lg:col-span-4 xl:col-span-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className="inline-block rounded px-2.5 py-1 text-xs font-semibold"
                          style={{
                            fontFamily: "var(--font-mono)",
                            backgroundColor: i === 0 ? "rgba(16, 185, 129, 0.15)" : "rgba(29, 35, 46, 0.6)",
                            color: i === 0 ? "var(--color-emerald)" : "var(--color-text-secondary)",
                            border: `1px solid ${i === 0 ? "rgba(16, 185, 129, 0.35)" : "var(--color-border-bright)"}`,
                          }}
                        >
                          {entry.duration}
                        </span>
                        {i === 0 && (
                          <span className="flex items-center gap-1.5 text-xs text-[var(--color-emerald)] font-mono font-medium">
                            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald)] status-dot" />
                            Active Role
                          </span>
                        )}
                      </div>

                      <h3
                        className="mt-3 text-lg sm:text-xl font-bold tracking-tight"
                        style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
                      >
                        {entry.role}
                      </h3>

                      <p className="mt-1 text-sm font-semibold" style={{ color: "var(--color-emerald)" }}>
                        {entry.company}
                      </p>

                      <p className="mt-0.5 text-xs" style={{ color: "var(--color-text-tertiary)" }}>
                        {entry.location}
                      </p>
                    </div>
                  </div>

                  {/* Right Column (Achievements & Bullets) */}
                  <div className="lg:col-span-8 xl:col-span-9 border-t border-[var(--color-border)] pt-4 lg:border-t-0 lg:border-l lg:border-[var(--color-border)] lg:pt-0 lg:pl-8">
                    <p
                      className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)] font-mono"
                    >
                      KEY RESPONSIBILITIES &amp; ARCHITECTURAL IMPACT
                    </p>
                    <ul className="space-y-2.5">
                      {entry.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm sm:text-base leading-relaxed"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-emerald)]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
