import { ThreeHeroScene } from "../components/ThreeHeroScene";

export function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-0 lg:min-h-[90dvh] flex-col justify-center overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-24"
    >
      {/* Chromatic ambient glow atmosphere */}
      <div
        className="pointer-events-none absolute -left-20 top-[10%] h-[320px] sm:h-[520px] w-[400px] sm:w-[500px] max-w-[60vw] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, rgba(99, 102, 241, 0.08) 45%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-20 top-[25%] h-[340px] sm:h-[540px] w-[400px] sm:w-[500px] max-w-[60vw] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.14) 0%, rgba(16, 185, 129, 0.06) 45%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1700px] 2xl:max-w-[1920px]">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14 2xl:gap-16">
          {/* Left Column: Bio & Introduction */}
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Honest status readout */}
            <div
              className="fade-up mb-5 sm:mb-8 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium"
              style={{
                backgroundColor: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border-bright)",
                fontFamily: "var(--font-mono)",
              }}
            >
              <span className="status-dot h-2 w-2 rounded-full text-[var(--color-success)] bg-[var(--color-success)] shrink-0" />
              <span className="text-[var(--color-text-secondary)]">Availability:</span>
              <span className="text-[var(--color-emerald)] font-semibold">Open to Backend Roles</span>
            </div>

            <h1
              className="fade-up text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", animationDelay: "0.08s" }}
            >
              Muhammad Alwi Aziz
            </h1>

            <p
              className="fade-up mt-3 sm:mt-5 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-medium"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-accent-bright)",
                animationDelay: "0.16s",
              }}
            >
              Backend Engineer (.NET Core &amp; Go)
            </p>

            <p
              className="fade-up mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed"
              style={{ color: "var(--color-text-secondary)", animationDelay: "0.24s" }}
            >
              I design and build scalable microservices and REST APIs from
              schema to deployment. Currently architecting backend systems at
              PT United Tractors, with a focus on clean service
              boundaries, resilient databases, and dependable infrastructure.
            </p>

            <div
              className="fade-up mt-6 sm:mt-10 flex flex-col xs:flex-row gap-3 sm:gap-4"
              style={{ animationDelay: "0.32s" }}
            >
              <a
                href="#contact"
                className="flex w-full xs:w-auto min-h-[44px] items-center justify-center rounded-lg px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-semibold transition-all hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                style={{ backgroundColor: "var(--color-accent-solid)", color: "#fff" }}
              >
                Contact me
              </a>
              <a
                href="#projects"
                className="hover-accent flex w-full xs:w-auto min-h-[44px] items-center justify-center rounded-lg px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-medium transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                style={{
                  border: "1px solid var(--color-border-bright)",
                  color: "var(--color-text-primary)",
                  backgroundColor: "rgba(17, 23, 38, 0.7)",
                }}
              >
                View projects
              </a>
            </div>
          </div>

          {/* Right Column: Interactive 3D Architecture Canvas */}
          <div className="fade-up lg:col-span-5 xl:col-span-6 w-full" style={{ animationDelay: "0.2s" }}>
            <div
              className="group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:border-[var(--color-accent-bright)]"
              style={{
                backgroundColor: "rgba(17, 23, 38, 0.75)",
                borderColor: "var(--color-border-bright)",
                boxShadow: "0 24px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
              }}
            >
              {/* Authentic 3D viewport header */}
              <div
                className="flex items-center justify-between border-b px-4 py-2.5 text-xs"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "rgba(9, 13, 22, 0.85)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-cyan)]" />
                  <span className="text-[11px] text-[var(--color-text-secondary)] font-medium">
                    Architecture Topology
                  </span>
                </div>
                <span className="text-[10px] text-[var(--color-accent-bright)] font-semibold tracking-wide uppercase">
                  3D Interactive · Drag to Orbit
                </span>
              </div>

              {/* 3D Scene Viewport */}
              <ThreeHeroScene />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
