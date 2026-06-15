// ============================================================================
//  EDIT THIS FILE TO UPDATE YOUR PAGE — no other files needed.
//  After editing, commit + push to GitHub and Vercel redeploys automatically.
// ============================================================================

export type IconName =
  | "instagram"
  | "tiktok"
  | "github"
  | "linkedin"
  | "website"
  | "link"; // generic fallback icon for any new link

// ---------------------------------------------------------------------------
//  1. YOUR PROFILE
// ---------------------------------------------------------------------------
export const profile = {
  name: "Stone Werner",
  // Short tagline shown under your name (keep it punchy).
  tagline: "Full-stack engineer · NYC",
  // A sentence or two about you.
  bio: "Building at the intersection of AI, startups, and how people win online. I share what I learn about tech, building products, and personal finance.",
  // Profile picture. Drop your photo into the /public folder and set the
  // filename here, e.g. "/profile.jpg". The bundled placeholder is used
  // until you replace it.
  avatar: "/blue_shirt_square.png",
  // Zoom level for the avatar inside its circle. 1 = default fill.
  // Lower it to zoom OUT (show more of the photo), e.g. 0.9.
  // Raise it to zoom IN, e.g. 1.2.
  avatarZoom: 1,
  // Used for the browser tab title + social share previews.
  siteUrl: "https://links.stonewerner.com",
};

// ---------------------------------------------------------------------------
//  2. SOCIAL ICONS (the small row of circular icons near the top)
//  Reorder, remove, or add. Set to [] to hide the row.
// ---------------------------------------------------------------------------
export const socials: { label: string; href: string; icon: IconName }[] = [
  { label: "Instagram", href: "https://instagram.com/", icon: "instagram" },
  { label: "TikTok", href: "https://tiktok.com/", icon: "tiktok" },
  { label: "GitHub", href: "https://github.com/", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/", icon: "linkedin" },
  { label: "Website", href: "https://stonewerner.com", icon: "website" },
];

// ---------------------------------------------------------------------------
//  3. LINK BUTTONS (the big tappable cards)
//  ---------------------------------------------------------------------------
//  To add a link, copy one block and edit it. Fields:
//    title     – main text (required)
//    href      – where it goes (required)
//    icon      – one of the IconName values above (optional)
//    subtitle  – small gray text under the title (optional)
//    badge     – a small pill, e.g. "10% off" (optional)
//    code      – a promo code; shows a one-tap "copy" button (optional)
//    featured  – true gives the card an accent highlight (optional)
// ---------------------------------------------------------------------------
export type LinkItem = {
  title: string;
  href: string;
  icon?: IconName;
  subtitle?: string;
  badge?: string;
  code?: string;
  featured?: boolean;
};

export const links: LinkItem[] = [
  {
    title: "Gorilla Mind",
    href: "https://gorillamind.com/stone",
    subtitle: "Best fitness supplements in the game",
    badge: "10% off",
    code: "STONE",
    icon: "link",
    featured: true,
  },

  // ▼▼▼  ADD MORE LINKS HERE  ▼▼▼
  // {
  //   title: "More coming soon",
  //   href: "https://example.com",
  //   subtitle: "Optional small text",
  //   icon: "link",
  // },
  // ▲▲▲  ADD MORE LINKS HERE  ▲▲▲
];
