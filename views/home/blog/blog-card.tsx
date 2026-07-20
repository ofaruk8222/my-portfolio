import Link from "next/link";

export interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  tags?: string[];
}

export function BlogCard({ title, excerpt, date, slug, tags }: BlogCardProps) {
  return (
    <article className="group rounded-xl border border-zinc-200 bg-white/80 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-zinc-900/70">
      <time className="text-xs font-medium text-zinc-400 dark:text-zinc-500">{date}</time>
      <h3 className="mt-2 text-base font-semibold text-zinc-950 dark:text-white">
        <Link href={`/blog/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{excerpt}</p>
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
    </article>
  );
}
