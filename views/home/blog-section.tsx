import * as React from "react";
import { cn } from "@/lib/utils";
import { BlogCard } from "@/views/home/blog/blog-card";

interface BlogContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function BlogContainer({ children, className, ...props }: BlogContainerProps) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-zinc-200 bg-white/90 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8 lg:p-10 dark:border-white/10 dark:bg-zinc-900/80 dark:shadow-black/20",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

const posts = [
  {
    title: "Building a Modern Portfolio with Next.js",
    excerpt: "A walkthrough of structuring a Next.js portfolio with modular views and reusable UI components.",
    date: "Jul 10, 2026",
    slug: "modern-portfolio-nextjs",
    tags: ["Next.js", "React"],
  },
  {
    title: "TypeScript Patterns for React Components",
    excerpt: "Practical typing strategies for props, generics, and compound components in React.",
    date: "Jun 22, 2026",
    slug: "typescript-react-patterns",
    tags: ["TypeScript", "React"],
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="mt-8 sm:mt-10 lg:mt-12">
      <BlogContainer>
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            Blog
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
            Thoughts on code, design, and craft.
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </BlogContainer>
    </section>
  );
}