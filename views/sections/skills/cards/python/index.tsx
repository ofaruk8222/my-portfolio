import { PythonIcon } from "@/views/sections/skills/cards/python/icon";
import { PythonSubtitle } from "@/views/sections/skills/cards/python/subtitle";
import { PythonTitle } from "@/views/sections/skills/cards/python/title";

export function PythonCard() {
  return (
    <article className="group rounded-xl border border-zinc-200 bg-emerald-50/90 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-emerald-950/40">
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-white/80 p-3 text-emerald-600 shadow-sm dark:bg-zinc-900/70 dark:text-emerald-300">
          <PythonIcon />
        </div>
        <div className="min-w-0">
          <PythonTitle />
          <PythonSubtitle />
        </div>
      </div>
    </article>
  );
}
