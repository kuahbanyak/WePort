import { useEffect, useState } from "react";

export function Hero() {
  const [latency, setLatency] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(8 + Math.floor(Math.random() * 14));
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24"
    >
      {/* ambient grid + glow, quiet background texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.35,
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 30%, black 0%, transparent 75%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[12%] h-[420px] w-[680px] -translate-x-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          opacity: 0.16,
          filter: "blur(40px)",
        }}
      />

      <div className="relative mx-auto w-full max-w-5xl">
        {/* status readout — the signature element */}
        <div
          className="fade-up mb-8 inline-flex items-center gap-2.5 rounded-full px-4 py-2"
          style={{
            backgroundColor: "var(--color-bg-elevated)",
            border: "1px solid var(--color-border-bright)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.8125rem",
          }}
        >
          <span
            className="pulse-dot h-2 w-2 rounded-full"
            style={{ backgroundColor: "var(--color-success)" }}
          />
          <span style={{ color: "var(--color-text-secondary)" }}>GET /alwi</span>
          <span style={{ color: "var(--color-success)" }}>200 OK</span>
          <span style={{ color: "var(--color-text-tertiary)" }}>
            {latency}ms<span className="status-cursor">▍</span>
          </span>
        </div>

        <h1
          className="fade-up text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          style={{ fontFamily: "var(--font-display)", animationDelay: "0.08s" }}
        >
          Muhammad Alwi Aziz
        </h1>

        <p
          className="fade-up mt-5 text-xl sm:text-2xl"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-accent-bright)",
            animationDelay: "0.16s",
          }}
        >
          Backend Engineer — .NET Core &amp; Go
        </p>

        <p
          className="fade-up mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
          style={{ color: "var(--color-text-secondary)", animationDelay: "0.24s" }}
        >
          I design and build scalable microservices and REST APIs — from
          schema to deployment. Currently architecting backend systems at
          PT&nbsp;United&nbsp;Tractors, with a focus on clean service
          boundaries and dependable infrastructure.
        </p>

        <div className="fade-up mt-9 flex flex-wrap gap-4" style={{ animationDelay: "0.32s" }}>
          <a
            href="#contact"
            className="rounded-md px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--color-accent-solid)", color: "#fff" }}
          >
            Contact me
          </a>
          <a
            href="#projects"
            className="hover-accent rounded-md px-6 py-3 text-sm font-medium"
            style={{
              border: "1px solid var(--color-border-bright)",
              color: "var(--color-text-primary)",
            }}
          >
            View projects
          </a>
        </div>
      </div>
    </section>
  );
}
