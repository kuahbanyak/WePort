export function Footer() {
  return (
    <footer
      className="w-full border-t border-[var(--color-border)] py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
      style={{ backgroundColor: "rgba(9, 13, 22, 0.95)" }}
    >
      <div className="mx-auto flex w-full max-w-[1700px] 2xl:max-w-[1920px] flex-col items-center justify-between gap-4 sm:flex-row text-center sm:text-left">
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-text-tertiary)" }}>
          © {new Date().getFullYear()} Muhammad Alwi Aziz. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-text-tertiary)" }}>
            Engineered with React 19, Three.js &amp; Tailwind CSS
          </p>
          <a
            href="#about"
            className="hover-accent text-xs font-mono text-accent-bright"
            title="Scroll to top"
          >
            ↑ Top
          </a>
        </div>
      </div>
    </footer>
  );
}
