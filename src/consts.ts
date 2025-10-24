// src/consts.ts

// src/consts.ts

export const SITE_TITLE = 'Andrej Kurlovic — Security That Drives Business Forward';
export const SITE_DESCRIPTION =
  'With over two decades in cybersecurity and infrastructure, I help organisations thrive by turning protection into performance. My focus is simple: enable teams, strengthen culture, and make security something people understand, trust, and act on.';

// Root deploy on Cloudflare Pages
export const SITE_BASE = '';

// Reusable link type for nav/footer/socials
export type NavLink = { name: string; url: string };

// Navbar / footer links — root-relative paths
export const WebsiteLinks: NavLink[] = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about/' },
  { name: 'Blog', url: '/blog/' },
];

// Socials — keep typed even if empty
export const SocialLinks: NavLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/andrejkurlovic/' },
  { name: 'GitHub', url: 'https://github.com/andrejkurlovic' },
  // { name: 'X', url: 'https://x.com/...' },
];
