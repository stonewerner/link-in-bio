import { socials } from "@/config/site";
import { Icon } from "./Icon";

export function SocialBar() {
  if (socials.length === 0) return null;

  return (
    <nav
      aria-label="Social links"
      className="flex flex-wrap items-center justify-center gap-3"
    >
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-zinc-700 shadow-sm ring-1 ring-black/5 transition-transform duration-150 active:scale-95 hover:-translate-y-0.5 hover:text-black dark:bg-zinc-800 dark:text-zinc-200 dark:ring-white/10 dark:hover:text-white"
        >
          <Icon name={s.icon} className="h-5 w-5" />
        </a>
      ))}
    </nav>
  );
}
