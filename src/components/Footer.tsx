export function Footer() {
  return (
    <footer
      className="px-6 py-8"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-text-tertiary)" }}>
          © {new Date().getFullYear()} Muhammad Alwi Aziz
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-text-tertiary)" }}>
          Built with React &amp; TypeScript
        </p>
      </div>
    </footer>
  );
}
