interface StickyNoteProps {
  children: React.ReactNode;
  rotate?: number;
  className?: string;
}

export function StickyNote({ children, rotate = 0, className = "" }: StickyNoteProps) {
  return (
    <div
      className={`sticky-note text-sm leading-snug ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}
