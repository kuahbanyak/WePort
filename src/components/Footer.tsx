export function Footer() {
  return (
    <footer
      className="w-full border-t border-[var(--color-border)] py-6 sm:py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
      style={{ backgroundColor: "rgba(9, 13, 22, 0.95)" }}
    >
      <div className="mx-auto flex w-full max-w-[1700px] 2xl:max-w-[1920px] flex-col items-center justify-between gap-4 sm:flex-row text-center sm:text-left">
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-text-tertiary)" }}>
          © {new Date().getFullYear()} Muhammad Alwi Aziz. All rights reserved.
        </p>
        <div className="flex flex-col xs:flex-row items-center gap-3 sm:gap-6">
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-text-tertiary)" }}>
            Engineered with React 19, Three.js &amp; Tailwind CSS
          </p>
          <a
            href="#about"
            className="hover-accent inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-[var(--color-border)] px-3.5 py-2 text-xs font-mono transition-all hover:border-[var(--color-accent)] active:scale-95"
            style={{ color: "var(--color-accent-bright)", backgroundColor: "var(--color-bg-elevated)" }}
            title="Scroll to top"
            aria-label="Scroll to top of page"
          >
            ↑ Top
          </a>
        </div>
      </div>
    </footer>
  );
}
