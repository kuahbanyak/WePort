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

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(10, 14, 20, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#about"
          className="text-sm font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-primary)" }}
        >
          alwi<span style={{ color: "var(--color-accent-bright)" }}>.</span>aziz
        </a>

        <ul className="hidden items-center gap-8 sm:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="nav-link text-sm transition-colors"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md sm:hidden"
          style={{ color: "var(--color-text-primary)" }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <ul
          className="flex flex-col gap-1 px-6 pb-4 sm:hidden"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
