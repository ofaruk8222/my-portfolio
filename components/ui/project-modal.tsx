"use client";

import * as React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  longDescription?: string;
  tags?: string[];
  imageUrl?: string;
  imageAlt?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectModal({
  open,
  onClose,
  title,
  description,
  longDescription,
  tags,
  imageUrl,
  imageAlt,
  liveUrl,
  githubUrl,
}: ProjectModalProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <div
        className="flex h-full w-full items-center justify-center"
        onClick={onClose}
      >
        <DialogContent
          onClick={(e) => e.stopPropagation()}
          onClose={onClose}
          className="max-w-2xl overflow-hidden p-0"
        >
        {imageUrl && (
          <div className="relative h-56 w-full overflow-hidden rounded-t-2xl bg-zinc-100 dark:bg-zinc-800 sm:h-64">
            <Image
              src={imageUrl}
              alt={imageAlt ?? title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="p-6">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>

          {longDescription && (
            <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              {longDescription}
            </p>
          )}

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

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                <ExternalLink className="h-4 w-4" />
                View Live
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-white/10 dark:text-zinc-200 dark:hover:bg-white/10"
              >
                <FaGithub className="h-4 w-4" />
                View Code
              </a>
            )}
          </div>
        </div>
      </DialogContent>
      </div>
    </Dialog>
  );
}
