import { PageContainer } from "@/components/shared/container";
import { HomeHero } from "@/views/sections/home-hero";

const HomePage = () => {
  return (
    <main className="flex-1">
      <PageContainer className="py-10 sm:py-12 lg:py-16">
        <HomeHero />

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