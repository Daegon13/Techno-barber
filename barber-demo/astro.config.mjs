import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// Vercel can serve Astro static output directly; no server adapter required.
// Explicit deployment origin only. Never inherit a previous project's domain.
const origin = process.env.SITE_URL;
if (origin && !/^https:\/\/[^/]+\/?$/.test(origin)) throw new Error('SITE_URL debe ser un origen HTTPS, sin rutas');
export default defineConfig({
  ...(origin ? {site: origin} : {}),
  integrations: [tailwind()], output: 'static'
});
