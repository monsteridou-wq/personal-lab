import Tag from "@/components/Tag";

const skills = [
  "工业过程优化",
  "数据分析",
  "机器学习",
  "Python",
  "AI 工作流",
  "知识管理",
];

const philosophy = [
  {
    title: "AI 是放大器，不是替代品",
    body: "AI 不会替代有思考深度的人。它放大的是思维——让你能同时处理更多信息，更快验证想法，在更大的范围内探索可能性。",
  },
  {
    title: "工程师思维 × AI 能力",
    body: "工程师最大的优势是系统思维和对「为什么」的执着。结合 AI 的信息处理能力，这个组合可以解决很多以前只能靠大团队才能处理的复杂问题。",
  },
  {
    title: "持续记录，公开成长",
    body: "学习不是私事。把探索过程记录下来，既是对自己的逼迫，也可能对遇到同样问题的人有所帮助。",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Page header */}
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-accent font-medium mb-3">
          About
        </p>
        <h1 className="font-display text-4xl font-bold text-foreground mb-4">
          关于我
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
          一个工程背景的人，正在探索 AI 如何扩展人类的认知和创造边界。
        </p>
      </div>

      <div className="border-t border-border mb-16" />

      {/* Background */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold text-foreground mb-6">
          背景
        </h2>
        <div className="prose-custom max-w-2xl space-y-4 text-foreground leading-relaxed">
          <p>
            我来自工业工程领域，在垃圾焚烧等工业过程的数据分析和优化方向积累了多年经验。
            这段经历让我学会了一件事：<strong className="text-foreground font-semibold">复杂系统中，数据往往比直觉更可靠。</strong>
          </p>
          <p>
            但数据本身不会说话，需要有人去提问、去构建模型、去解释结果。
            这是我对「工程师 + 数据 + AI」这个组合一直感兴趣的原因。
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-6">
          {skills.map((skill) => (
            <Tag key={skill} label={skill} variant="default" />
          ))}
        </div>
      </section>

      <div className="border-t border-border mb-16" />

      {/* Why AI */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold text-foreground mb-6">
          为什么是 AI？
        </h2>
        <div className="max-w-2xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            我真正开始认真使用 AI 是在意识到——它不是要取代我的工作，
            而是可以帮我把一直想做却没有时间和资源的事变成可能。
          </p>
          <p>
            用 AI 分析工业数据时，我能更快地测试不同的特征工程方案；
            用 AI 整理知识时，我能把散落的信息连接成有结构的理解；
            用 AI 研究烘焙科学时，我能快速找到食谱背后的化学原理。
          </p>
          <p className="text-foreground font-medium">
            AI 让「一个人」可以做「一个小团队」的工作。
          </p>
        </div>
      </section>

      <div className="border-t border-border mb-16" />

      {/* Philosophy */}
      <section>
        <h2 className="font-display text-2xl font-bold text-foreground mb-8">
          我的思考方式
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophy.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <h3 className="font-medium text-foreground mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
