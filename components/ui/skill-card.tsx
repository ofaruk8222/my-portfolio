import * as React from "react";

import { cn } from "@/lib/utils";

export type SkillCardColor = "sky" | "amber" | "rose" | "emerald" | "violet" | "orange";

export interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: SkillCardColor;
  className?: string;
}

const colorMap: Record<
  SkillCardColor,
  { card: string; iconWrap: string }
> = {
  sky: {
    card: "bg-sky-50/90 dark:bg-sky-950/40",
    iconWrap: "text-sky-600 dark:text-sky-300",
  },
  amber: {
    card: "bg-amber-50/90 dark:bg-amber-950/40",
    iconWrap: "text-amber-600 dark:text-amber-300",
  },
  rose: {
    card: "bg-rose-50/90 dark:bg-rose-950/40",
    iconWrap: "text-rose-600 dark:text-rose-300",
  },
  emerald: {
    card: "bg-emerald-50/90 dark:bg-emerald-950/40",
    iconWrap: "text-emerald-600 dark:text-emerald-300",
  },
  violet: {
    card: "bg-violet-50/90 dark:bg-violet-950/40",
    iconWrap: "text-violet-600 dark:text-violet-300",
  },
  orange: {
    card: "bg-orange-50/90 dark:bg-orange-950/40",
    iconWrap: "text-orange-600 dark:text-orange-300",
  },
};

export function SkillCard({
  title,
  description,
  icon,
  color = "sky",
  className,
}: SkillCardProps) {
  const colors = colorMap[color];
  return (
    <article
      className={cn(
        "group rounded-xl border border-zinc-200 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-white/10",
        colors.card,
        className,
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "rounded-lg bg-white/80 p-3 shadow-sm dark:bg-zinc-900/70",
            colors.iconWrap,
          )}
        >
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{description}</p>
        </div>
      </div>
    </article>
  );
}
