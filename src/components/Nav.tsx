import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled || menuOpen ? "rgba(9, 13, 22, 0.94)" : "rgba(9, 13, 22, 0.5)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: scrolled || menuOpen ? "1px solid var(--color-border)" : "1px solid rgba(30, 41, 59, 0.3)",
      }}
    >
      <nav className="mx-auto flex w-full max-w-[1700px] 2xl:max-w-[1920px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3.5 sm:py-4">
        <a
          href="#about"
          className="group flex items-center gap-1.5 text-sm sm:text-base font-semibold tracking-tight transition-transform hover:scale-[1.02]"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-primary)" }}
        >
          <span className="text-[var(--color-accent-bright)]">&gt;</span>
          <span>alwi</span>
          <span style={{ color: "var(--color-accent-bright)" }}>.</span>
          <span>aziz</span>
          <span className="ml-1 inline-block h-2 w-2 rounded-full bg-[var(--color-emerald)] status-dot" />
        </a>

        {/* Desktop Links (Expanded full width feel) */}
        <div className="hidden items-center gap-8 md:flex lg:gap-10 xl:gap-12">
          <ul className="flex items-center gap-6 lg:gap-8 xl:gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav-link relative py-1 text-sm font-medium transition-colors hover:text-[var(--color-text-primary)]"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all hover:brightness-110 hover:-translate-y-0.5"
            style={{
              backgroundColor: "var(--color-accent-solid)",
              color: "#fff",
              fontFamily: "var(--font-mono)",
            }}
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border-bright)] bg-[var(--color-bg-elevated)] transition-colors hover:border-[var(--color-accent)] md:hidden"
          style={{ color: "var(--color-text-primary)" }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle mobile menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Menu with solid backdrop */}
      {menuOpen && (
        <div
          className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]/95 px-4 pt-3 pb-5 backdrop-blur-xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <ul className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-bg-elevated-hover)] hover:text-[var(--color-accent-bright)]"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-3 border-t border-[var(--color-border)]">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-lg py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-accent-solid)" }}
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
