import Image from "next/image";
import { profile } from "@/config/site";

export function Profile() {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-black/5 shadow-lg dark:ring-white/10">
        <Image
          src={profile.avatar}
          alt={profile.name}
          fill
          priority
          sizes="112px"
          className="object-cover"
        />
      </div>

      <h1 className="mt-4 text-2xl font-bold tracking-tight">
        {profile.name}
      </h1>

      {profile.tagline ? (
        <p className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {profile.tagline}
        </p>
      ) : null}

      {profile.bio ? (
        <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300">
          {profile.bio}
        </p>
      ) : null}
    </header>
  );
}
