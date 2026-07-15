import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-24 pb-20">
      {/* Label */}
      <p className="text-xs uppercase tracking-widest text-accent font-medium mb-8">
        AI Personal Lab
      </p>

      {/* Main headline */}
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
        用工程师的眼睛
        <br />
        <span className="text-accent">用 AI 做实验</span>
      </h1>

      {/* Sub headline */}
      <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-4">
        一个工业工程背景的人，正在探索 AI 如何连接
      </p>
      <div className="flex flex-wrap gap-3 mb-10">
        {["工业数据", "知识系统", "烘焙科学"].map((item) => (
          <span
            key={item}
            className="text-base font-medium text-foreground border-b-2 border-accent/40 pb-0.5"
          >
            {item}
          </span>
        ))}
      </div>
      <p className="text-sm text-muted-foreground mb-10 italic">
        三个领域，同一种方法论。
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:bg-accent transition-colors"
        >
          Explore Projects
          <span aria-hidden>→</span>
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors"
        >
          About Me
        </Link>
      </div>
    </section>
  );
}
