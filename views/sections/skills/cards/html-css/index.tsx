import { HtmlCssIcon } from "@/views/sections/skills/cards/html-css/icon";
import { HtmlCssSubtitle } from "@/views/sections/skills/cards/html-css/subtitle";
import { HtmlCssTitle } from "@/views/sections/skills/cards/html-css/title";

export function HtmlCssCard() {
  return (
    <article className="group rounded-xl border border-zinc-200 bg-rose-50/90 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-rose-950/40">
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-white/80 p-3 text-rose-600 shadow-sm dark:bg-zinc-900/70 dark:text-rose-300">
          <HtmlCssIcon />
        </div>
        <div className="min-w-0">
          <HtmlCssTitle />
          <HtmlCssSubtitle />
        </div>
      </div>
    </article>
  );
}
