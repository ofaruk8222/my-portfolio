export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
}

export const EXPERIENCES_DATA = {
  sectionTitle: "Where I've worked and what I've built.",
  experiences: [
    {
      role: "Senior Software Engineer",
      company: "Tech Company",
      period: "2022 - Present",
      location: "Remote",
      description:
        "Leading development of scalable web applications, mentoring junior developers, and driving architectural decisions across the engineering team.",
      tags: ["React", "Node.js", "TypeScript", "AWS"],
    },
    {
      role: "Software Engineer",
      company: "Startup Inc.",
      period: "2020 - 2022",
      location: "San Francisco, CA",
      description:
        "Built and shipped full-stack features for a SaaS platform serving thousands of users, improving performance and developer experience.",
      tags: ["Next.js", "PostgreSQL", "Docker"],
    },
  ] satisfies ExperienceItem[],
} as const;
