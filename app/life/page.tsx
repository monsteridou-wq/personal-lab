import Link from "next/link";

const experiments = [
  {
    icon: "🍞",
    title: "Baking Lab",
    description: "研究面筋形成、发酵机制与温度控制——用工程师视角解构烘焙科学。",
    status: "探索中",
  },
  {
    icon: "🏃",
    title: "Movement",
    description: "运动与身体管理——长期主义的生活方式实验。",
    status: "进行中",
  },
  {
    icon: "📖",
    title: "Personal Growth",
    description: "学习、创造和生活记录——把每一天都当成实验。",
    status: "持续中",
  },
];

export default function LifePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-accent font-medium mb-3">
          Life
        </p>
        <h1 className="font-display text-4xl font-bold text-foreground mb-4">
          Life Experiments
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
          生活本身也是一系列实验。这里记录我在工作之外的探索。
        </p>
      </div>

      <div className="border-t border-border mb-12" />

      {/* Experiment cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
        {experiments.map((item) => (
          <div
            key={item.title}
            className="bg-card border border-border rounded-2xl p-6"
          >
            <div className="text-3xl mb-4">{item.icon}</div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-foreground">{item.title}</h3>
              <span className="text-xs text-muted-foreground">{item.status}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Coming soon note */}
      <div className="p-6 bg-muted rounded-2xl border border-border">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">详细内容持续更新中。</span>
          {" "}如果你对烘焙科学或其他实验感兴趣，可以先看看{" "}
          <Link
            href="/projects/baking-science-lab"
            className="text-accent hover:text-accent-dark transition-colors"
          >
            Baking Science Lab 项目
          </Link>
          。
        </p>
      </div>
    </div>
  );
}
