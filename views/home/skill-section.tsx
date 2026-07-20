import * as React from "react";

import { SkillCard } from "@/components/ui/skill-card";
import { cn } from "@/lib/utils";

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

export function SkillSection() {
  return (
    <section id="skills" className="mt-8 sm:mt-10 lg:mt-12">
      <SkillsContainer>
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            Skills
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
            Building strong foundations in code and problem solving.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
            I enjoy working across core programming languages and modern web technologies to create polished, reliable experiences.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <SkillCard
            title="C/C++"
            description="Strong in systems thinking, performance-minded code, and low-level problem solving."
            color="sky"
            icon={<i className="devicon-cplusplus-plain text-2xl" aria-hidden="true" />}
          />
          <SkillCard
            title="Java"
            description="Experienced with object-oriented design, APIs, and building scalable backend logic."
            color="amber"
            icon={<i className="devicon-java-plain text-2xl" aria-hidden="true" />}
          />
          <SkillCard
            title="HTML/CSS"
            description="Crafting responsive layouts and polished interfaces with modern styling techniques."
            color="rose"
            icon={
              <div className="flex items-center gap-2" aria-hidden="true">
                <i className="devicon-html5-plain text-2xl" />
                <i className="devicon-css3-plain text-2xl" />
              </div>
            }
          />
          <SkillCard
            title="Python"
            description="Bringing automation, data workflows, and clean scripting into everyday solutions."
            color="emerald"
            icon={<i className="devicon-python-plain text-2xl" aria-hidden="true" />}
          />
        </div>
      </SkillsContainer>
    </section>
  );
}
