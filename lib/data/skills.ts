import { type SkillCardColor } from "@/components/ui/skill-card";

export interface SkillItem {
  title: string;
  description: string;
  color: SkillCardColor;
  iconClass: string | string[];
}

export const SKILLS_DATA = {
  sectionTitle: "Building strong foundations in code and problem solving.",
  sectionSubTitle:
    "I enjoy working across core programming languages and modern web technologies to create polished, reliable experiences.",
  skills: [
    {
      title: "C/C++",
      description:
        "Strong in systems thinking, performance-minded code, and low-level problem solving.",
      color: "sky" as SkillCardColor,
      iconClass: "devicon-cplusplus-plain",
    },
    {
      title: "Python",
      description:
        "Bringing automation, data workflows, and clean scripting into everyday solutions.",
      color: "emerald" as SkillCardColor,
      iconClass: "devicon-python-plain",
    },
    {
      title: "Java",
      description:
        "Experienced with object-oriented design, APIs, and building scalable backend logic.",
      color: "amber" as SkillCardColor,
      iconClass: "devicon-java-plain",
    },
    {
      title: "HTML/CSS",
      description:
        "Crafting responsive layouts and polished interfaces with modern styling techniques.",
      color: "rose" as SkillCardColor,
      iconClass: ["devicon-html5-plain", "devicon-css3-plain"],
    },
  ] satisfies SkillItem[],
} as const;
