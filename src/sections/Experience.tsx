import { experience } from "../data/content";
import { SectionTitle } from "../components/SectionTitle";

const milestoneColors = [
  "var(--marker-blue)",
  "var(--marker-green)",
  "var(--marker-orange)",
  "var(--marker-red)",
];

export function Experience() {
  return (
    <section
      id="experience"
      className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1700px]">
        <SectionTitle annotation="// My journey">
          Experience.
        </SectionTitle>

        <div className="relative">
          {/* Vertical timeline line — drawn SVG connector per DESIGN.md.
              Hidden on lg where the grid layout makes it redundant. */}
          <div
            className="absolute left-3 top-4 bottom-4 w-0 lg:hidden"
            aria-hidden="true"
            style={{
              borderLeft: "2px dashed var(--border-light)",
            }}
          />

          <div className="space-y-6 sm:space-y-8">
            {experience.map((entry, i) => {
              const nodeColor = milestoneColors[i % milestoneColors.length];
              const isCurrent = i === 0;

              return (
                <div key={i} className="relative pl-9 sm:pl-11 lg:pl-0 group">
                  {/* Mobile timeline node: filled = current, hollow = past */}
                  <span
                    className="absolute left-0 top-2 h-6 w-6 rounded-full border-2 flex items-center justify-center lg:hidden"
                    style={{
                      background: isCurrent ? nodeColor : "var(--bg-board)",
                      borderColor: nodeColor,
                    }}
                    aria-hidden="true"
                  >
                    {isCurrent && (
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: "#fff" }}
                      />
                    )}
                  </span>

                  {/* Experience card: sketch-border for hand-drawn feel */}
                  <div
                    className="sketch-card group-hover:shadow-lg p-5 sm:p-6 lg:p-8 grid lg:grid-cols-12 gap-4 lg:gap-8"
                    style={{ transform: `rotate(${i % 2 === 0 ? -0.3 : 0.25}deg)` }}
                  >
                    {/* Left: metadata */}
                    <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-2">
                      {/* Duration tag — real dates from data */}
                      <span
                        className="sketch-border inline-flex self-start px-2.5 py-0.5 text-xs font-medium"
                        style={{
                          fontFamily: "var(--font-label)",
                          color: isCurrent ? nodeColor : "var(--text-ink-secondary)",
                          borderColor: isCurrent ? nodeColor : "var(--border-light)",
                          background: isCurrent ? `${nodeColor}12` : "transparent",
                          borderRadius: "2px 5px 3px 4px / 4px 2px 5px 3px",
                        }}
                      >
                        {entry.duration}
                      </span>

                      {/* Active indicator: marks real employment state.
                          No glow, no pulse — just a plain dot and label. */}
                      {isCurrent && (
                        <span
                          className="flex items-center gap-1.5 text-xs"
                          style={{ fontFamily: "var(--font-label)", color: nodeColor }}
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full shrink-0"
                            style={{ background: nodeColor }}
                            aria-label="Active role"
                            aria-hidden="true"
                          />
                          Active
                        </span>
                      )}

                      <h3
                        className="text-base sm:text-lg font-bold leading-tight mt-1"
                        style={{ fontFamily: "var(--font-handwritten)", color: "var(--text-ink)" }}
                      >
                        {entry.role}
                      </h3>

                      <p
                        className="text-sm font-semibold"
                        style={{ fontFamily: "var(--font-label)", color: nodeColor }}
                      >
                        {entry.company}
                      </p>

                      <p
                        className="text-xs"
                        style={{ fontFamily: "var(--font-body)", color: "var(--text-ink-tertiary)" }}
                      >
                        {entry.location}
                      </p>
                    </div>

                    {/* Right: bullets */}
                    <div
                      className="lg:col-span-8 xl:col-span-9 border-t border-dashed lg:border-t-0 lg:border-l lg:pl-8 pt-4 lg:pt-0"
                      style={{ borderColor: "var(--border-light)" }}
                    >
                      <ul className="space-y-2.5">
                        {entry.bullets.map((bullet, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 text-base sm:text-lg leading-relaxed"
                            style={{ fontFamily: "var(--font-body)", color: "var(--text-ink-secondary)" }}
                          >
                            {/* Marker dot: signals list item in whiteboard vocabulary */}
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                              style={{ background: nodeColor }}
                              aria-hidden="true"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* DESIGN.md annotation: "Still building..." */}
          <p
            className="annotation mt-6 pl-1"
            style={{ color: "var(--text-ink-tertiary)", fontSize: "0.9rem" }}
          >
            Still building...
          </p>
        </div>
      </div>
    </section>
  );
}
