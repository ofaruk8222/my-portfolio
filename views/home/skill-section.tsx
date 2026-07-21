import * as React from "react";

import { SkillCard } from "@/components/ui/skill-card";
import { cn } from "@/lib/utils";
import { SKILLS_DATA } from "@/lib/data/skills";

interface SkillsContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function SkillsContainer({ children, className, ...props }: SkillsContainerProps) {
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

function renderSkillIcon(iconClass: string | readonly string[]) {
  if (Array.isArray(iconClass)) {
    return (
      <div className="flex items-center gap-2" aria-hidden="true">
        {(iconClass as string[]).map((cls) => (
          <i key={cls} className={`${cls} text-2xl`} />
        ))}
      </div>
    );
  }
  return <i className={`${iconClass} text-2xl`} aria-hidden="true" />;
}

export function SkillSection() {
  return (
    <section id="skills" className="mt-8 sm:mt-10 lg:mt-12">
      <SkillsContainer>
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            Skills
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
            {SKILLS_DATA.sectionTitle}
          </h2>
          <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
            {SKILLS_DATA.sectionSubTitle}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SKILLS_DATA.skills.map((skill) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              description={skill.description}
              color={skill.color}
              icon={renderSkillIcon(skill.iconClass)}
            />
          ))}
        </div>
      </SkillsContainer>
    </section>
  );
}
