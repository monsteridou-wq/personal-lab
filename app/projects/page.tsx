import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

const categories = ["All", "Industrial AI", "AI System", "Creative AI"] as const;

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-accent font-medium mb-3">
          Projects
        </p>
        <h1 className="font-display text-4xl font-bold text-foreground mb-4">
          AI Projects
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
          这里不是作品集，而是思考过程的记录——每个项目背后都有一个想解决的真实问题。
        </p>
      </div>

      <div className="border-t border-border mb-12" />

      {/* Category filter — static display for V1 */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <span
            key={cat}
            className={`px-4 py-1.5 rounded-full text-sm border transition-colors cursor-default ${
              cat === "All"
                ? "bg-foreground text-background border-foreground"
                : "bg-card text-muted-foreground border-border hover:border-accent/40"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* Placeholder notice */}
      <div className="mt-12 p-6 bg-muted rounded-2xl border border-border">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">更多项目正在记录中。</span>
          {" "}每个项目都包含完整的思考过程、AI 参与方式和实现细节。
        </p>
      </div>
    </div>
  );
}
