import { BlogCard } from "@/views/home/blog/blog-card";

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
    </section>
  );
}
