interface TagProps {
  label: string;
  variant?: "default" | "accent" | "muted";
  className?: string;
}

export default function Tag({
  label,
  variant = "default",
  className = "",
}: TagProps) {
  const variants = {
    default:
      "bg-card text-muted-foreground border border-border",
    accent:
      "bg-accent/10 text-accent-dark border border-accent/30",
    muted: "bg-muted text-muted-foreground border border-border",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {label}
    </span>
  );
}
