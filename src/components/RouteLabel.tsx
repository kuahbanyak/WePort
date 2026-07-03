interface RouteLabelProps {
  path: string;
  title: string;
}

/**
 * Section eyebrow styled as an API route path — e.g. "/skills".
 * This is the site's structural signature: each section is framed
 * as an endpoint in Alwi's own engineering vocabulary, not a
 * generic numbered marker.
 */
export function RouteLabel({ path, title }: RouteLabelProps) {
  return (
    <div className="mb-4 flex items-baseline gap-3">
      <span className="route-label">{path}</span>
      <span className="h-px flex-1" style={{ backgroundColor: "var(--color-border)" }} />
      {title && (
        <span className="sr-only">{title}</span>
      )}
    </div>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mb-10 text-3xl font-semibold sm:text-4xl"
      style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
    >
      {children}
    </h2>
  );
}
