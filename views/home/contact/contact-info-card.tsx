import { Mail, MapPin, Phone } from "lucide-react";
import { PERSONAL_DETAILS } from "@/lib/data/personal-details";

export function ContactInfoCard() {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900/70">
      <h3 className="text-base font-semibold text-zinc-950 dark:text-white">Get in touch</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
        Have a project in mind or want to collaborate? Reach out through any of the channels below.
      </p>
      <ul className="mt-6 flex flex-col gap-4">
        <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
          <Mail className="h-4 w-4 shrink-0 text-zinc-400" />
          {PERSONAL_DETAILS.email}
        </li>
        <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
          <Phone className="h-4 w-4 shrink-0 text-zinc-400" />
          {PERSONAL_DETAILS.phone}
        </li>
        <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
          <MapPin className="h-4 w-4 shrink-0 text-zinc-400" />
          {PERSONAL_DETAILS.location}
        </li>
      </ul>
    </div>
  );
}
