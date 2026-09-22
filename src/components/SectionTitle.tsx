interface SectionTitleProps {
  annotation?: string;
  children: React.ReactNode;
}

export function SectionTitle({ annotation, children }: SectionTitleProps) {
  return (
    <div className="mb-10 sm:mb-12">
      {annotation && (
        <p className="annotation mb-2" aria-hidden="true">
          {annotation}
        </p>
      )}
      <h2
        className="text-4xl xs:text-5xl sm:text-6xl leading-tight"
        style={{ fontFamily: "var(--font-handwritten)", color: "var(--text-ink)" }}
      >
        {children}
      </h2>
      {/* Marker underline rule: single, deliberate separator under the heading */}
      <div
        className="mt-3 h-0.5 w-16 rounded"
        style={{ background: "var(--marker-blue)" }}
        aria-hidden="true"
      />
    </div>
  );
}
