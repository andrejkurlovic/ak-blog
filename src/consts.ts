// src/consts.ts

export const SITE_TITLE = 'Andrej Kurlovic';
export const SITE_DESCRIPTION =
  'Cybersecurity, leadership, and building with AI.';

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
  // { name: 'LinkedIn', url: 'https://www.linkedin.com/in/...' },
  // { name: 'GitHub', url: 'https://github.com/andrejkurlovic' },
  // { name: 'X', url: 'https://x.com/...' },
];
