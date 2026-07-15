import { getFeaturedProjects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

export default function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      {/* Section header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-xs uppercase tracking-widest text-accent font-medium mb-2">
            Featured
          </p>
          <h2 className="font-display text-2xl font-bold text-foreground">
            核心项目
          </h2>
        </div>
        <Link
          href="/projects"
          className="text-sm text-muted-foreground hover:text-accent transition-colors"
        >
          查看全部 →
        </Link>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} variant="featured" />
        ))}
      </div>
    </section>
  );
}
