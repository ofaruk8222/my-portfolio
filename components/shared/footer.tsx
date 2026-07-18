import Link from "next/link";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

import { PageContainer } from "@/components/shared/container";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/80">
      <PageContainer className="py-8 sm:py-10 lg:py-12">
        <div className="grid gap-8 rounded-[2rem] border border-zinc-200 bg-white/70 p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-zinc-900/70 dark:shadow-black/20 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:p-8">
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

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
              Contact
            </h3>
            <div className="mt-4 space-y-3">
              <a
                href="mailto:hello@alexportfolio.dev"
                className="flex items-center gap-2 text-sm font-medium text-zinc-700 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              >
                <Mail className="h-4 w-4" />
                hola_lionelmessi@gmail.com
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-white/10 dark:text-zinc-200 dark:hover:bg-white/10"
              >
                <Send className="h-4 w-4" />
                Start a project
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-zinc-200 pt-6 dark:border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900 text-white transition hover:-translate-y-0.5 hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900 text-white transition hover:-translate-y-0.5 hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900 text-white transition hover:-translate-y-0.5 hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <FaXTwitter className="h-5 w-5" />
            </a>
          </div>

          <p className="mt-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
            © 2026 Messi Portfolio. All rights reserved.
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}
