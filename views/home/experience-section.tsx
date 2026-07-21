import * as React from "react";
import { ExperienceCard } from "@/components/ui/experience-card";
import { cn } from "@/lib/utils";

interface ExperienceContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function ExperienceContainer({ children, className, ...props }: ExperienceContainerProps) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-zinc-200 bg-white/90 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8 lg:p-10 dark:border-white/10 dark:bg-zinc-900/80 dark:shadow-black/20",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

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
      <ExperienceContainer>
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
      </ExperienceContainer>
    </section>
  );
}