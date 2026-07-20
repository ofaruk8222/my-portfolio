import * as React from "react";

import { cn } from "@/lib/utils";

export interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  tags?: string[];
  logo?: React.ReactNode;
  className?: string;
}

export function ExperienceCard({
  role,
  company,
  period,
  location,
  description,
  tags,
  logo,
  className,
}: ExperienceCardProps) {
  return (
    <article
      className={cn(
        "group rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-zinc-900/80",
        className,
      )}
    >
      <div className="flex items-start gap-4">
        {logo && (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 dark:border-white/10 dark:bg-zinc-800">
            {logo}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="text-base font-semibold text-zinc-950 dark:text-white">{role}</h3>
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{company}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{period}</p>
              {location && (
                <p className="text-xs text-zinc-400 dark:text-zinc-500">{location}</p>
              )}
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{description}</p>
          {tags && tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-200 bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
