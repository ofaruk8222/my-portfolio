import { ExperienceCard } from "@/components/ui/experience-card";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Tech Company",
    period: "2022 – Present",
    location: "Remote",
    description:
      "Leading development of scalable web applications, mentoring junior developers, and driving architectural decisions across the engineering team.",
    tags: ["React", "Node.js", "TypeScript", "AWS"],
  },
  {
    role: "Software Engineer",
    company: "Startup Inc.",
    period: "2020 – 2022",
    location: "San Francisco, CA",
    description:
      "Built and shipped full-stack features for a SaaS platform serving thousands of users, improving performance and developer experience.",
    tags: ["Next.js", "PostgreSQL", "Docker"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="mt-8 sm:mt-10 lg:mt-12">
      <div className="flex flex-col gap-4 text-center sm:text-left">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
          Experience
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
          Where I&apos;ve worked and what I&apos;ve built.
        </h2>
      </div>

      <div className="mt-8 flex flex-col gap-6">
        {experiences.map((exp) => (
          <ExperienceCard key={`${exp.company}-${exp.period}`} {...exp} />
        ))}
      </div>
    </section>
  );
}
