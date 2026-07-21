import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SOCIAL_LINKS } from "@/lib/data/personal-details";

const socialLinks = [
  { label: "GitHub", href: SOCIAL_LINKS.github, icon: FaGithub },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedIn, icon: FaLinkedin },
  { label: "X (Twitter)", href: SOCIAL_LINKS.x, icon: FaXTwitter },
];

export function ContactSocialLink() {
  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:border-white/10 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white"
        >
          <Icon className="h-4 w-4" />
          {label}
        </a>
      ))}
    </div>
  );
}
