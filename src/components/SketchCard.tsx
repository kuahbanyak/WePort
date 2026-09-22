interface SketchCardProps {
  children: React.ReactNode;
  rotate?: number;
  className?: string;
  as?: "div" | "article" | "li";
}

export function SketchCard({
  children,
  rotate = 0,
  className = "",
  as: Tag = "div",
}: SketchCardProps) {
  return (
    <Tag
      className={`sketch-card ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </Tag>
  );
}
