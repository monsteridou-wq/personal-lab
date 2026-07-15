import Link from "next/link";
import { Project, ProjectStatus } from "@/types/project";
import Tag from "./Tag";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "featured";
}

const statusConfig: Record<ProjectStatus, { label: string; color: string }> = {
  completed: { label: "已完成", color: "text-green-600" },
  "in-progress": { label: "进行中", color: "text-accent" },
  exploring: { label: "探索中", color: "text-muted-foreground" },
};

const categoryDot: Record<string, string> = {
  "Industrial AI": "bg-blue-400",
  "AI System": "bg-amber-400",
  "Creative AI": "bg-rose-400",
};

export default function ProjectCard({
  project,
  variant = "default",
}: ProjectCardProps) {
  const status = statusConfig[project.status];
  const dotColor = categoryDot[project.category] ?? "bg-muted-foreground";

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <article
        className={`bg-card border border-border rounded-2xl p-6 transition-all duration-200
          hover:border-accent/40 hover:shadow-sm
          ${variant === "featured" ? "h-full" : ""}`}
      >
        {/* Category + status */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${dotColor}`} />
            <span className="text-xs text-muted-foreground font-medium">
              {project.category}
            </span>
          </div>
          <span className={`text-xs font-medium ${status.color}`}>
            {status.label}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <Tag key={tool} label={tool} variant="muted" />
          ))}
        </div>

        {/* Year */}
        <div className="mt-4 pt-4 border-t border-border">
          <span className="text-xs text-muted-foreground">{project.year}</span>
        </div>
      </article>
    </Link>
  );
}
