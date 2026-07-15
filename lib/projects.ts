import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "fly-ash-prediction",
    title: "Fly Ash Prediction & Digital Twin",
    description:
      "利用工业运行数据，探索垃圾焚烧飞灰重金属预测与运行优化路径。",
    category: "Industrial AI",
    tools: ["Python", "Machine Learning", "SHAP", "Digital Twin"],
    year: 2025,
    status: "in-progress",
    background:
      "垃圾焚烧飞灰中重金属含量是影响处置成本与合规性的关键指标，传统检测方式滞后且成本高。能否用实时运行数据预测飞灰特性？",
    thinking:
      "从数据驱动的视角重新定义问题：不是「检测」飞灰，而是「预测」飞灰——用炉膛温度、投料量、烟气成分等过程参数，建立预测模型。",
    aiRole:
      "使用机器学习建立预测模型，SHAP 分析特征重要性，理解哪些操作参数对飞灰成分影响最大，为运行优化提供依据。",
    outcome:
      "建立了多个预测模型，SHAP 分析揭示了关键影响因子，为操作优化提供了数据支撑。",
    future: "结合数字孪生，实现实时预测与操作建议的闭环。",
  },
  {
    slug: "ai-workflow",
    title: "Personal AI Workflow",
    description: "构建个人知识管理和 AI 协作流程，让学习和创造效率翻倍。",
    category: "AI System",
    tools: ["ChatGPT", "Claude", "Obsidian", "Python"],
    year: 2026,
    status: "in-progress",
    background:
      "信息爆炸时代，如何不被信息淹没？如何把读到的、想到的转化为真正属于自己的知识？",
    thinking:
      "把 AI 作为「思维放大器」而不是「答案机器」。构建一套工作流：收集 → 整理 → 提炼 → 创作，每个环节都有 AI 参与，但决策永远在人。",
    aiRole:
      "Claude 负责深度分析和写作辅助，ChatGPT 负责快速检索和头脑风暴，Python 脚本自动化信息整理，Obsidian 作为知识图谱的可视化工具。",
    outcome:
      "建立了一套可持续运行的个人知识系统，写作和研究效率显著提升。",
    future: "探索 AI 辅助的知识图谱自动构建。",
  },
  {
    slug: "baking-science-lab",
    title: "Baking Science Lab",
    description: "用 AI 研究烘焙科学——面筋形成、发酵机制与温度控制。",
    category: "Creative AI",
    tools: ["AI Research", "Image Generation", "Content Creation"],
    year: 2026,
    status: "exploring",
    background:
      "烘焙不只是食谱，背后是化学反应、物理变化和生物过程。每一次失败的面包都是一次可以分析的实验。",
    thinking:
      "把厨房变成实验室。用工程师的思维方式研究烘焙：控制变量、记录数据、分析结果，再用 AI 帮助深入理解背后的科学原理。",
    aiRole:
      "用 AI 快速检索烘焙科学文献，生成实验配方的科学解释，辅助将复杂原理转化为直观的科普内容。",
    outcome: "正在积累烘焙实验记录，探索将科学内容可视化的方式。",
    future: "创建一系列「烘焙科学」图文内容，连接工程思维与日常生活。",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.slice(0, 3);
}

export const categoryColors: Record<string, string> = {
  "Industrial AI": "bg-blue-50 text-blue-700 border-blue-200",
  "AI System": "bg-amber-50 text-amber-700 border-amber-200",
  "Creative AI": "bg-rose-50 text-rose-700 border-rose-200",
};

export const statusLabels: Record<string, string> = {
  completed: "已完成",
  "in-progress": "进行中",
  exploring: "探索中",
};
