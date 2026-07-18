import { SkillsContainer } from "@/components/sections/skills/container";
import { CppCard } from "@/components/sections/skills/cards/c-cpp";
import { JavaCard } from "@/components/sections/skills/cards/java";
import { HtmlCssCard } from "@/components/sections/skills/cards/html-css";
import { PythonCard } from "@/components/sections/skills/cards/python";

export function SkillsSection() {
  return (
    <section className="mt-8 sm:mt-10 lg:mt-12">
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
          <CppCard />
          <JavaCard />
          <HtmlCssCard />
          <PythonCard />
        </div>
      </SkillsContainer>
    </section>
  );
}
