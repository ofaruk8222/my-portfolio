import { CppIcon } from "@/components/sections/skills/cards/c-cpp/icon";
import { CppSubtitle } from "@/components/sections/skills/cards/c-cpp/subtitle";
import { CppTitle } from "@/components/sections/skills/cards/c-cpp/title";

export function CppCard() {
  return (
    <article className="group rounded-xl border border-zinc-200 bg-sky-50/90 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-sky-950/40">
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-white/80 p-3 text-sky-600 shadow-sm dark:bg-zinc-900/70 dark:text-sky-300">
          <CppIcon />
        </div>
        <div className="min-w-0">
          <CppTitle />
          <CppSubtitle />
        </div>
      </div>
    </article>
  );
}
