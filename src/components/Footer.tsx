const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/kuahbanyak" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammadalwiaziz/" },
  { label: "Email", href: "mailto:alwibusiness@gmail.com" },
];

export function Footer() {
  return (
    <footer
      className="w-full py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
      style={{
        borderTop: "2px solid var(--border-sketch)",
        background: "var(--bg-board)",
      }}
    >
      <div className="mx-auto w-full max-w-[1700px]">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Identity */}
          <div>
            <p
              className="text-lg font-bold"
              style={{ fontFamily: "var(--font-handwritten)", color: "var(--text-ink)" }}
            >
              Muhammad Alwi Aziz
            </p>
            <p
              className="mt-1 text-sm"
              style={{ fontFamily: "var(--font-label)", color: "var(--text-ink-secondary)" }}
            >
              Software Engineer · Builder · Problem Solver
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-2" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text-ink-secondary)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--marker-blue)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-ink-secondary)"; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-sm font-medium transition-colors"
                style={{ fontFamily: "var(--font-body)", color: "var(--text-ink-secondary)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--marker-blue)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-ink-secondary)"; }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{
            borderTop: "1px dashed var(--border-light)",
            fontFamily: "var(--font-label)",
            color: "var(--text-ink-tertiary)",
          }}
        >
          <p>© {new Date().getFullYear()} Muhammad Alwi Aziz. All rights reserved.</p>
          <a
            href="#about"
            className="transition-colors"
            style={{ color: "var(--text-ink-tertiary)" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--marker-blue)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-ink-tertiary)"; }}
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
