import { getProjectBySlug, projects, statusLabels } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Tag from "@/components/Tag";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const sections = [
    { label: "背景与问题", content: project.background },
    { label: "我的思考", content: project.thinking },
    { label: "AI 参与方式", content: project.aiRole },
    { label: "成果", content: project.outcome },
    { label: "未来方向", content: project.future },
  ].filter((s) => s.content);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
        <Link href="/projects" className="hover:text-accent transition-colors">
          Projects
        </Link>
        <span>/</span>
        <span className="text-foreground">{project.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-muted-foreground font-medium">
            {project.category}
          </span>
          <span className="text-border">·</span>
          <span className="text-xs text-accent font-medium">
            {statusLabels[project.status]}
          </span>
          <span className="text-border">·</span>
          <span className="text-xs text-muted-foreground">{project.year}</span>
        </div>

        <h1 className="font-display text-4xl font-bold text-foreground mb-4 leading-tight">
          {project.title}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {project.description}
        </p>
      </div>

      {/* Tools */}
      <div className="flex flex-wrap gap-2 mb-12">
        {project.tools.map((tool) => (
          <Tag key={tool} label={tool} variant="accent" />
        ))}
      </div>

      <div className="border-t border-border mb-12" />

      {/* Content sections */}
      <div className="space-y-12 max-w-2xl">
        {sections.map((section) => (
          <section key={section.label}>
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              {section.label}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {section.content}
            </p>
          </section>
        ))}
      </div>

      {/* Back link */}
      <div className="mt-16 pt-8 border-t border-border">
        <Link
          href="/projects"
          className="text-sm text-muted-foreground hover:text-accent transition-colors"
        >
          ← 返回所有项目
        </Link>
      </div>
    </div>
  );
}
