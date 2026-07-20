interface BlogPostPageProps {
  params: { slug: string };
}

export default async function Page({ params }: BlogPostPageProps) {
  const { slug } = params;

  return (
    <article className="rounded-[2rem] border border-zinc-200 bg-white/80 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8 lg:p-10 dark:border-white/10 dark:bg-zinc-900/70 dark:shadow-black/20">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
        Blog
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 capitalize sm:text-4xl dark:text-white">
        {slug.replace(/-/g, " ")}
      </h1>
      <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-300">
        Blog post content coming soon.
      </p>
    </article>
  );
}
