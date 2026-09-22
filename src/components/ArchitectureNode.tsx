interface ArchitectureNodeProps {
  label: string;
  color?: string;
  large?: boolean;
}

export function ArchitectureNode({ label, color, large = false }: ArchitectureNodeProps) {
  return (
    <div
      className="arch-node"
      style={{
        fontSize: large ? "1rem" : "0.875rem",
        borderColor: color || "var(--border-sketch)",
        color: color || "var(--text-ink)",
        background: color ? `${color}12` : "var(--bg-board)",
        fontWeight: large ? 600 : 400,
      }}
    >
      {label}
    </div>
  );
}
