import { FaServer } from "react-icons/fa6";

export function BackendCard() {
  return (
    <div className="flex min-h-[120px] flex-1 rounded-xl border border-zinc-200 bg-zinc-50/90 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-zinc-800/70">
      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center gap-2 text-zinc-900 dark:text-white">
          <FaServer className="h-4 w-4" />
          <h3 className="text-sm font-semibold">Backend</h3>
        </div>
        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          Node.js, Python, APIs
        </p>
      </div>
    </div>
  );
}
