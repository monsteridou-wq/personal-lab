interface TimelineItem {
  year: string;
  label: string;
  description?: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2024",
    label: "工程专业积累",
    description: "深耕工业工程领域，积累数据分析与过程优化经验",
  },
  {
    year: "2025",
    label: "工业数据 × AI",
    description: "将机器学习引入工业数据分析，探索预测模型与 SHAP 可解释性",
  },
  {
    year: "2026",
    label: "AI 知识系统 × 创意实验",
    description: "构建个人知识工作流，将 AI 扩展至知识管理与创意领域",
  },
  {
    year: "Next →",
    label: "持续建设中",
    description: "更多实验，更多领域",
  },
];

export default function Timeline() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="font-display text-2xl font-bold text-foreground mb-10">
        成长时间线
      </h2>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <div key={index} className="flex gap-6 items-start">
              {/* Dot */}
              <div className="relative z-10 mt-1 flex-shrink-0">
                <div
                  className={`w-3.5 h-3.5 rounded-full border-2 ${
                    item.year === "Next →"
                      ? "border-border bg-background"
                      : "border-accent bg-accent"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="pb-2">
                <span className="text-xs font-medium text-accent tracking-wider uppercase">
                  {item.year}
                </span>
                <h3 className="font-medium text-foreground mt-0.5 mb-1">
                  {item.label}
                </h3>
                {item.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
