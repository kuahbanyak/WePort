interface RouteLabelProps {
  path: string;
  title: string;
  accentColor?: string;
}

/**
 * Section eyebrow styled as an API route path: e.g. "/skills".
 * Frames each section as an authentic backend endpoint in Alwi's engineering vocabulary.
 */
export function RouteLabel({ path, title, accentColor }: RouteLabelProps) {
  return (
    <div className="mb-4 flex items-baseline gap-3">
      <span
        className="route-label font-mono text-xs sm:text-sm font-semibold tracking-wide"
        style={{ color: accentColor || "var(--color-accent-bright)" }}
      >
        <span className="text-[var(--color-text-tertiary)] opacity-60 mr-1">//</span>
        {path}
      </span>
      <span
        className="h-px flex-1"
        style={{
          background: accentColor
            ? `linear-gradient(90deg, ${accentColor} 0%, var(--color-border) 40%, transparent 100%)`
            : "linear-gradient(90deg, var(--color-border-bright) 0%, transparent 100%)",
          opacity: 0.5,
        }}
      />
      {title && <span className="sr-only">{title}</span>}
    </div>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mb-8 sm:mb-10 lg:mb-12 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight"
      style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
    >
      {children}
    </h2>
  );
}
