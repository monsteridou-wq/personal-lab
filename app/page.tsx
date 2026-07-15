import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Timeline from "@/components/Timeline";
import Tag from "@/components/Tag";

const introTags = ["Engineer", "AI Explorer", "Data Analyst", "Knowledge Builder"];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <HeroSection />

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-border" />
      </div>

      {/* Personal intro */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-accent font-medium mb-4">
            Who I am
          </p>
          <p className="text-xl text-foreground leading-relaxed mb-6">
            工程背景，数据驱动，正在用 AI 重建我看世界的方式。
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            我相信：工程师的系统思维 × AI 的放大能力，可以让一个人做到以前需要整个团队才能做的事。
            这里记录我的探索过程——包括成功的，也包括失败的。
          </p>
          <div className="flex flex-wrap gap-2">
            {introTags.map((tag) => (
              <Tag key={tag} label={tag} variant="default" />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-border" />
      </div>

      {/* Featured projects */}
      <FeaturedProjects />

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-border" />
      </div>

      {/* Timeline */}
      <Timeline />
    </div>
  );
}
