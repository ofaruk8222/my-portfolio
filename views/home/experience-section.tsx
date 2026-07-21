import * as React from "react";
import { ExperienceCard } from "@/components/ui/experience-card";
import { cn } from "@/lib/utils";
import { EXPERIENCES_DATA } from "@/lib/data/experiences";

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

export function ExperienceSection() {
  return (
    <section id="experience" className="mt-8 sm:mt-10 lg:mt-12">
      <ExperienceContainer>
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            Experience
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
            {EXPERIENCES_DATA.sectionTitle}
          </h2>
        </div>

        <div className="mt-8 flex flex-col gap-6">
          {EXPERIENCES_DATA.experiences.map((exp) => (
            <ExperienceCard key={`${exp.company}-${exp.period}`} {...exp} />
          ))}
        </div>
      </ExperienceContainer>
    </section>
  );
}