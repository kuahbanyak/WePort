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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled || menuOpen
          ? "rgba(254, 254, 254, 0.96)"
          : "rgba(254, 254, 254, 0.82)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: scrolled || menuOpen
          ? "1.5px solid var(--border-sketch)"
          : "1.5px solid transparent",
      }}
    >
      <nav
        className="mx-auto flex w-full max-w-[1700px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3.5 sm:py-4"
        aria-label="Primary navigation"
      >
        {/* Logo: hand-drawn box style with initials */}
        <a
          href="#about"
          className="group flex items-center gap-2 transition-transform hover:scale-[1.02]"
          aria-label="Muhammad Alwi Aziz, go to top"
        >
          <span
            className="sketch-border px-2.5 py-0.5 text-sm font-semibold leading-none"
            style={{ fontFamily: "var(--font-handwritten)", color: "var(--text-ink)" }}
          >
            M·A
          </span>
          <span
            className="text-sm font-medium hidden xs:inline"
            style={{ fontFamily: "var(--font-label)", color: "var(--text-ink-secondary)" }}
          >
            alwi.aziz
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          <ul className="flex items-center gap-6 lg:gap-8" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA: specific action text per DESIGN.md, not generic "Get Started" */}
          <a
            href="#contact"
            className="sketch-border px-4 py-2 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0"
            style={{
              fontFamily: "var(--font-body)",
              background: "var(--marker-blue)",
              color: "#fff",
              borderColor: "var(--marker-blue)",
              borderRadius: "3px 6px 4px 5px / 5px 3px 6px 4px",
            }}
          >
            Let's talk
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center sketch-border md:hidden transition-colors"
          style={{ color: "var(--text-ink)" }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle mobile menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu — drops below the nav bar, no glassmorphism, solid surface */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t px-4 pt-3 pb-5 md:hidden"
          style={{
            background: "var(--bg-board)",
            borderColor: "var(--border-sketch)",
          }}
        >
          <ul className="flex flex-col gap-1" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center rounded px-4 py-3 text-sm font-medium transition-colors"
                  style={{
                    color: "var(--text-ink-secondary)",
                    fontFamily: "var(--font-body)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(21,101,192,0.07)";
                    e.currentTarget.style.color = "var(--marker-blue)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--text-ink-secondary)";
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-3" style={{ borderTop: "1px dashed var(--border-light)" }}>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 sketch-border"
              style={{
                background: "var(--marker-blue)",
                borderColor: "var(--marker-blue)",
                borderRadius: "3px 6px 4px 5px / 5px 3px 6px 4px",
              }}
            >
              Let's talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
