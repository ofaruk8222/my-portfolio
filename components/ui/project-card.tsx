import * as React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  imageUrl?: string;
  imageAlt?: string;
  liveUrl?: string;
  githubUrl?: string;
  onOpenModal?: () => void;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  imageAlt,
  liveUrl,
  githubUrl,
  onOpenModal,
  className,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white/90 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-zinc-900/80 md:flex-row",
        className,
      )}
    >
      <div className="flex w-full flex-col gap-4 p-5 md:w-2/3 md:p-6">
        <h3 className="text-base font-semibold text-zinc-950 dark:text-white">{title}</h3>
        <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">{description}</p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
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

        <div className="flex flex-wrap items-center gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} live demo`}
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-white/10 dark:text-zinc-200 dark:hover:bg-white/10"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} GitHub repository`}
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-white/10 dark:text-zinc-200 dark:hover:bg-white/10"
            >
              <FaGithub className="h-3.5 w-3.5" />
              Code
            </a>
          )}
          {onOpenModal && (
            <button
              type="button"
              onClick={onOpenModal}
              className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Details
            </button>
          )}
        </div>
      </div>

      {imageUrl && (
        <div className="flex w-full items-center justify-center p-5 pt-0 md:w-1/3 md:p-6 md:pl-0">
          <button
            type="button"
            onClick={onOpenModal}
            className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-100 transition-transform duration-300 group-hover:scale-[1.02] dark:bg-zinc-800"
            tabIndex={onOpenModal ? 0 : -1}
            aria-label={`View ${title} details`}
          >
            <Image
              src={imageUrl}
              alt={imageAlt ?? title}
              fill
              className="object-contain p-3"
            />
          </button>
        </div>
      )}
    </article>
  );
}
