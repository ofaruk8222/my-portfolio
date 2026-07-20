import { PageContainer } from "@/components/shared/container";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/80">
      <PageContainer className="py-8 sm:py-10 lg:py-12">
        <div className="rounded-[2rem] border border-zinc-200 bg-white/70 p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-zinc-900/70 dark:shadow-black/20 lg:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
              Messi Portfolio
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-zinc-950 dark:text-white">
              Let&apos;s make something useful.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              I design thoughtful websites and digital products with clarity, personality, and a strong sense of purpose.
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-zinc-200 pt-6 dark:border-white/10">
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            © 2026 Messi Portfolio. All rights reserved.
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}
