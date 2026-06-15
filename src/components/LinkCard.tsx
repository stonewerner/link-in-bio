"use client";

import { useState } from "react";
import type { LinkItem } from "@/config/site";
import { Icon } from "./Icon";

export function LinkCard({ item, index }: { item: LinkItem; index: number }) {
  const base =
    "group relative flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left shadow-sm ring-1 transition-all duration-150 active:scale-[0.98] hover:-translate-y-0.5 hover:shadow-md";
  const theme = item.featured
    ? "bg-zinc-900 text-white ring-zinc-900/10 dark:bg-white dark:text-zinc-900 dark:ring-white/20"
    : "bg-white text-zinc-900 ring-black/5 hover:ring-black/10 dark:bg-zinc-800 dark:text-white dark:ring-white/10";

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${theme} animate-fade-up opacity-0`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {item.icon ? (
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
            item.featured
              ? "bg-white/10 dark:bg-zinc-900/10"
              : "bg-zinc-100 dark:bg-zinc-700"
          }`}
        >
          <Icon name={item.icon} className="h-5 w-5" />
        </span>
      ) : null}

      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="font-semibold">{item.title}</span>
          {item.badge ? (
            <span
              className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                item.featured
                  ? "bg-white/15 text-white dark:bg-zinc-900/15 dark:text-zinc-900"
                  : "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
              }`}
            >
              {item.badge}
            </span>
          ) : null}
        </span>
        {item.subtitle ? (
          <span
            className={`mt-0.5 block truncate text-[13px] ${
              item.featured
                ? "text-white/70 dark:text-zinc-900/70"
                : "text-zinc-500 dark:text-zinc-400"
            }`}
          >
            {item.subtitle}
          </span>
        ) : null}
      </span>

      {item.code ? <CopyCode code={item.code} featured={item.featured} /> : (
        <ArrowIcon featured={item.featured} />
      )}
    </a>
  );
}

function ArrowIcon({ featured }: { featured?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-4 w-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 ${
        featured ? "opacity-80" : "text-zinc-400"
      }`}
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function CopyCode({ code, featured }: { code: string; featured?: boolean }) {
  const [copied, setCopied] = useState(false);

  const copy = (e: React.MouseEvent) => {
    // Don't follow the link when the user just wants the code.
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard?.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy promo code ${code}`}
      className={`flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors ${
        featured
          ? "bg-white/15 text-white hover:bg-white/25 dark:bg-zinc-900/15 dark:text-zinc-900 dark:hover:bg-zinc-900/25"
          : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-100"
      }`}
    >
      {copied ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
      <span className="tabular-nums">{copied ? "Copied" : code}</span>
    </button>
  );
}
