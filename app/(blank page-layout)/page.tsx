import Link from "next/link";

import { PageContainer } from "@/components/shared/container";

const HomePage = () => {
  return (
    <main className="flex-1">
      <PageContainer className="py-16 sm:py-20 lg:py-28">
        <section className="rounded-[2rem] border border-zinc-200 bg-white/80 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-10 lg:p-14 dark:border-white/10 dark:bg-zinc-900/70 dark:shadow-black/20">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            Welcome
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl dark:text-white">
            I’m Alex — crafting modern digital experiences that feel effortless.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            I build polished portfolios, product experiences, and thoughtful web interfaces that balance creativity with clarity.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#work"
              className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              View projects
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-white/10 dark:text-zinc-200 dark:hover:bg-white/10"
            >
              Get in touch
            </Link>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900/60">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
              Strategy
            </p>
            <h2 className="mt-3 text-xl font-semibold text-zinc-950 dark:text-white">Clear direction</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              Strong messaging and a focused experience from the first impression to the last detail.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900/60">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
              Design
            </p>
            <h2 className="mt-3 text-xl font-semibold text-zinc-950 dark:text-white">Modern interface</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              Clean layouts, thoughtful interactions, and visual hierarchy that stay memorable.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900/60">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
              Development
            </p>
            <h2 className="mt-3 text-xl font-semibold text-zinc-950 dark:text-white">Reliable build</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              Fast, responsive, and maintainable websites powered by modern frontend tools.
            </p>
          </article>
        </section>
      </PageContainer>
    </main>
  );
};

export default HomePage;