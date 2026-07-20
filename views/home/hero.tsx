"use client";

import Image from "next/image";
import { FaReact } from "react-icons/fa6";
import { FaServer } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const handleDownloadCv = () => {
  // Placeholder for future CV file download
};

function TechStack() {
  return (
    <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-stretch">
      <div className="flex min-h-[120px] flex-1 rounded-xl border border-zinc-200 bg-zinc-50/90 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-zinc-800/70">
        <div className="flex w-full flex-col gap-2">
          <div className="flex items-center gap-2 text-zinc-900 dark:text-white">
            <FaReact className="h-4 w-4" />
            <h3 className="text-sm font-semibold">Frontend</h3>
          </div>
          <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            React, Next.js, TypeScript
          </p>
        </div>
      </div>

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

      <div className="flex min-h-[120px] flex-1 rounded-xl border border-zinc-200 bg-zinc-50/90 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-zinc-800/70">
        <div className="flex w-full flex-col gap-2">
          <div className="flex items-center gap-2 text-zinc-900 dark:text-white">
            <FaDatabase className="h-4 w-4" />
            <h3 className="text-sm font-semibold">Database</h3>
          </div>
          <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            MongoDB, PostgreSQL, MySQL
          </p>
        </div>
      </div>

      <div className="flex min-h-[120px] flex-1 rounded-xl border border-zinc-200 bg-zinc-50/90 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-zinc-800/70">
        <div className="flex w-full flex-col gap-2">
          <div className="flex items-center gap-2 text-zinc-900 dark:text-white">
            <FaScrewdriverWrench className="h-4 w-4" />
            <h3 className="text-sm font-semibold">Tools</h3>
          </div>
          <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            Git, Docker, AWS
          </p>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="about" className="rounded-[2rem] border border-zinc-200 bg-white/80 px-6 py-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:px-8 sm:py-10 lg:min-h-[38rem] lg:px-10 lg:py-12 dark:border-white/10 dark:bg-zinc-900/70 dark:shadow-black/20">
      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <div className="flex flex-col items-start text-left">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            Welcome to my portfolio
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-5xl dark:text-white">
            I&apos;m Lionel Messi
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            I am a passionate software engineer.  I have nearly Two decades of experience in the industry. I build scalable web applications and solve complex problems with clean, efficient code.
          </p>
          <Button
            type="button"
            onClick={handleDownloadCv}
            className="mt-8 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Download CV
          </Button>
          <TechStack />
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="flex h-full w-full max-w-[460px] items-center justify-center bg-transparent p-0 shadow-none">
            <div className="flex h-[32rem] w-full items-center justify-center overflow-hidden bg-transparent">
              <Image
                src="/images/messi.png"
                alt="Messi"
                width={460}
                height={800}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
