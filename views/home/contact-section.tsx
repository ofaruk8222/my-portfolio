import * as React from "react";
import { cn } from "@/lib/utils";
import { ContactForm } from "@/views/home/contact/contact-form";
import { ContactInfoCard } from "@/views/home/contact/contact-info-card";
import { ContactSocialLink } from "@/views/home/contact/contact-social-link";

interface ContactContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function ContactContainer({ children, className, ...props }: ContactContainerProps) {
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

export function ContactSection() {
  return (
    <section id="contact" className="mt-8 sm:mt-10 lg:mt-12">
      <ContactContainer>
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
            Let&apos;s build something together.
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <ContactInfoCard />
            <ContactSocialLink />
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900/70">
            <ContactForm />
          </div>
        </div>
      </ContactContainer>
    </section>
  );
}