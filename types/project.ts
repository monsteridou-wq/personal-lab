export type ProjectCategory = "Industrial AI" | "AI System" | "Creative AI";
export type ProjectStatus = "completed" | "in-progress" | "exploring";

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tools: string[];
  year: number;
  coverImage?: string;
  status: ProjectStatus;
  background?: string;
  thinking?: string;
  aiRole?: string;
  outcome?: string;
  future?: string;
}
