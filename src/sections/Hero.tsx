import { useRef, useState } from "react";
import { ArchitectureNode } from "../components/ArchitectureNode";
import { StickyNote } from "../components/StickyNote";

const stackNodes: { label: string; color: string }[] = [
  { label: "React", color: "#1565C0" },
  { label: "API Gateway", color: "#5a5a5a" },
  { label: "Go / .NET Core", color: "#388E3C" },
  { label: "PostgreSQL", color: "#F57C00" },
  { label: "Docker", color: "#2C2C2C" },
  { label: "Azure / Cloud", color: "#1565C0" },
];

const stickyNotes: { text: string; rotate: number }[] = [
  { text: "Keep it simple.", rotate: -2 },
  { text: "Production matters.", rotate: 1.5 },
  { text: "Ship, observe, improve.", rotate: -1 },
];

// Maximum tilt in degrees per axis.
// Reason: ±7deg gives a physical feel without looking nauseating at normal pointer speeds.
const MAX_TILT = 7;

export function Hero() {
  const boardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Detect whether the user prefers reduced motion.
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (prefersReduced || !boardRef.current) return;
    const rect = boardRef.current.getBoundingClientRect();
    // Normalised position: -1 to +1 relative to the element center.
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    // rotateX tilts vertically (mouse up = lean back), rotateY tilts horizontally.
    setTilt({ x: -ny * MAX_TILT, y: nx * MAX_TILT });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  const boardTransform = prefersReduced
    ? "none"
    : `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`;

  return (
    <section
      id="about"
      className="relative flex min-h-[92vh] sm:min-h-screen flex-col justify-center overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28"
    >
      <div className="mx-auto w-full max-w-[1700px]">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">

          {/* ── Left: Bio ──────────────────────────────────── */}
          <div className="lg:col-span-6 xl:col-span-6">

            {/* Open-to-work: real employment status, not decorative. No glow, no pulse. */}
            <div
              className="fade-up mb-6 inline-flex items-center gap-2 px-3 py-1.5 sketch-border text-sm"
              style={{
                fontFamily: "var(--font-label)",
                color: "var(--text-ink-secondary)",
                borderColor: "var(--marker-green)",
              }}
              aria-label="Open to backend roles"
            >
              <span
                className="h-2 w-2 rounded-full shrink-0"
                style={{ background: "var(--marker-green)" }}
                aria-hidden="true"
              />
              Open to backend roles
            </div>

            {/* Small handwritten label per DESIGN.md */}
            <p
              className="fade-up mb-3 text-base tracking-wide uppercase"
              style={{
                fontFamily: "var(--font-handwritten)",
                color: "var(--text-ink-secondary)",
                animationDelay: "0.05s",
              }}
            >
              Software engineer · Builder
            </p>

            <h1
              className="fade-up text-5xl xs:text-6xl sm:text-7xl xl:text-8xl leading-[1.08] tracking-tight"
              style={{
                fontFamily: "var(--font-handwritten)",
                color: "var(--text-ink)",
                animationDelay: "0.1s",
              }}
            >
              Turning{" "}
              <span
                className="marker-blue"
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "var(--marker-blue)",
                  textUnderlineOffset: "5px",
                  textDecorationThickness: "2.5px",
                }}
              >
                ideas
              </span>{" "}
              into{" "}
              <span className="marker-green">working systems.</span>
            </h1>

            <p
              className="fade-up mt-6 max-w-xl text-lg sm:text-xl leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--text-ink-secondary)",
                animationDelay: "0.18s",
              }}
            >
              Software engineer focused on building reliable products, clean
              architecture, and practical digital experiences. Currently
              architecting backend systems at PT United Tractors.
            </p>

            <div
              className="fade-up mt-8 flex flex-wrap gap-3"
              style={{ animationDelay: "0.26s" }}
            >
              {/* CTAs: specific text, not generic. No arrow on secondary button. */}
              <a
                href="#projects"
                className="sketch-border px-7 py-3.5 text-base font-semibold transition-all hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0"
                style={{
                  background: "var(--marker-blue)",
                  color: "#fff",
                  borderColor: "var(--marker-blue)",
                  fontFamily: "var(--font-body)",
                  borderRadius: "3px 6px 4px 5px / 5px 3px 6px 4px",
                }}
              >
                View my work
              </a>
              <a
                href="#contact"
                className="sketch-border px-7 py-3.5 text-base font-medium transition-all hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  background: "transparent",
                  color: "var(--text-ink)",
                  borderColor: "var(--border-sketch)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Let's talk
              </a>
            </div>
          </div>

          {/* ── Right: Tiltable whiteboard panel ─────────── */}
          <div
            className="fade-up lg:col-span-6 xl:col-span-6 w-full"
            style={{ animationDelay: "0.2s" }}
          >
            {/*
              Board tilt container.
              Purpose: pointer-tracked 3D tilt makes the whiteboard feel like
              a real physical object the visitor is leaning over, reinforcing
              the hand-crafted engineering-sketch identity (R-19 written reason).
              Transition only runs on leave so the follow feels instant while
              the snap back is smooth.
            */}
            <div
              ref={boardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              className="relative"
              style={{
                transform: boardTransform,
                transition: isHovered ? "none" : "transform 0.55s ease-out",
                transformStyle: "preserve-3d",
                willChange: "transform",
                cursor: "default",
              }}
            >
              {/* Background sheet 2 (bottom layer — slight 3D depth per DESIGN.md) */}
              <div
                className="absolute inset-0 rounded-md"
                style={{
                  background: "#F0EDE7",
                  transform: "rotate(1.5deg) translateY(6px)",
                  border: "1.5px solid var(--border-light)",
                }}
                aria-hidden="true"
              />
              {/* Background sheet 1 (middle layer) */}
              <div
                className="absolute inset-0 rounded-md"
                style={{
                  background: "#F5F3EE",
                  transform: "rotate(-0.5deg) translateY(3px)",
                  border: "1.5px solid var(--border-light)",
                }}
                aria-hidden="true"
              />

              {/* Main board */}
              <div
                className="relative sketch-border rounded-md p-6 sm:p-8"
                style={{ background: "var(--bg-board)", minHeight: "380px" }}
              >
                {/* Board annotation */}
                <p
                  className="annotation mb-5"
                  style={{ color: "var(--text-ink-secondary)", fontSize: "0.95rem" }}
                >
                  How would I build this? ↓
                </p>

                {/* Architecture diagram: User to Cloud stack */}
                <div className="flex flex-col items-center gap-0">
                  <div
                    className="arch-node mb-0.5 px-5 py-2 font-semibold"
                    style={{
                      fontSize: "0.9rem",
                      borderColor: "var(--marker-blue)",
                      color: "var(--marker-blue)",
                      background: "rgba(21,101,192,0.06)",
                    }}
                  >
                    User
                  </div>

                  {stackNodes.map((node, i) => (
                    <div key={node.label} className="flex flex-col items-center">
                      <svg width="2" height="24" viewBox="0 0 2 24" aria-hidden="true">
                        <line
                          x1="1" y1="0" x2="1" y2="20"
                          stroke={i < stackNodes.length - 1 ? "#8a8a8a" : "var(--marker-orange)"}
                          strokeWidth="1.5"
                          strokeDasharray="3 2"
                        />
                        <polygon
                          points="1,24 -2.5,17 4.5,17"
                          fill={i < stackNodes.length - 1 ? "#8a8a8a" : "var(--marker-orange)"}
                        />
                      </svg>
                      <ArchitectureNode label={node.label} color={node.color} large />
                    </div>
                  ))}
                </div>

                {/* Sticky notes */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex flex-col gap-3">
                  {stickyNotes.map((note) => (
                    <StickyNote key={note.text} rotate={note.rotate} className="text-sm max-w-[130px]">
                      {note.text}
                    </StickyNote>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
