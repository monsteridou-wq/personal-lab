import Link from "next/link";

export default function LabPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-accent font-medium mb-3">
          Knowledge Lab
        </p>
        <h1 className="font-display text-4xl font-bold text-foreground mb-4">
          知识实验室
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
          AI 学习笔记、数据分析笔记、烘焙科学研究——把探索过程记录下来。
        </p>
      </div>

      <div className="border-t border-border mb-16" />

      {/* Coming soon */}
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-6">
          <span className="text-2xl">🧪</span>
        </div>
        <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
          正在建设中
        </h2>
        <p className="text-muted-foreground max-w-sm leading-relaxed mb-8">
          知识实验室即将开放。这里将会有 AI 学习笔记、数据分析笔记和各种探索记录。
        </p>
        <Link
          href="/projects"
          className="text-sm text-accent hover:text-accent-dark transition-colors font-medium"
        >
          先去看看 AI 项目 →
        </Link>
      </div>
    </div>
  );
}
