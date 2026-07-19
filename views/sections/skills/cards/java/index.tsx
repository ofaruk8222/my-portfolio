import { JavaIcon } from "@/views/sections/skills/cards/java/icon";
import { JavaSubtitle } from "@/views/sections/skills/cards/java/subtitle";
import { JavaTitle } from "@/views/sections/skills/cards/java/title";

export function JavaCard() {
  return (
    <article className="group rounded-xl border border-zinc-200 bg-amber-50/90 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-amber-950/40">
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-white/80 p-3 text-amber-600 shadow-sm dark:bg-zinc-900/70 dark:text-amber-300">
          <JavaIcon />
        </div>
        <div className="min-w-0">
          <JavaTitle />
          <JavaSubtitle />
        </div>
      </div>
    </article>
  );
}
