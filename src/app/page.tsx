import { Profile } from "@/components/Profile";
import { SocialBar } from "@/components/SocialBar";
import { LinkCard } from "@/components/LinkCard";
import { links, profile } from "@/config/site";

export default function Home() {
  return (
    <div className="relative flex min-h-[100dvh] flex-col items-center overflow-hidden px-5 py-12">
      {/* Soft ambient glow behind the content. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-zinc-200/60 to-transparent blur-2xl dark:from-zinc-800/40"
      />

      <main className="flex w-full max-w-md flex-col items-center gap-8">
        <Profile />

        <SocialBar />

        {links.length > 0 ? (
          <section
            aria-label="Links"
            className="flex w-full flex-col gap-3"
          >
            {links.map((item, i) => (
              <LinkCard key={item.title} item={item} index={i} />
            ))}
          </section>
        ) : null}

        <footer className="mt-4 text-center text-xs text-zinc-400 dark:text-zinc-600">
          <a
            href={profile.siteUrl}
            className="transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
          >
            {new URL(profile.siteUrl).host}
          </a>
        </footer>
      </main>
    </div>
  );
}
