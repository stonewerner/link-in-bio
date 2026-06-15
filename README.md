# Link in Bio

A fast, mobile-first link-in-bio page (Linktree / Beacons style) built with Next.js. Statically rendered, so it loads instantly. Light + dark mode automatically.

## Edit everything in one file

Open [`src/config/site.ts`](src/config/site.ts). That's the only file you need to touch:

- **Profile** — name, tagline, bio, and your avatar filename.
- **Socials** — the row of round icons (Instagram, TikTok, GitHub, LinkedIn, Website).
- **Links** — the big tappable cards. Copy a block to add a new one. Supports an optional discount `code` that gives a one-tap "copy" button.

### Add your profile photo

1. Drop your photo into the `public/` folder (e.g. `public/profile.jpg`).
2. In `src/config/site.ts`, set `avatar: "/profile.jpg"`.

### Add a new link

In the `links` array, copy an entry and edit it:

```ts
{
  title: "My Newsletter",
  href: "https://example.com",
  subtitle: "Weekly notes",   // optional
  badge: "New",               // optional pill
  code: "STONE",              // optional — adds a copy-code button
  icon: "link",               // optional
  featured: true,             // optional — highlights the card
}
```

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo, and click **Deploy**. No config needed.
3. (Optional) Add a custom domain like `links.stonewerner.com` in the Vercel project settings, then update `siteUrl` in `src/config/site.ts`.

Every `git push` to `main` auto-deploys.
