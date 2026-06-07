// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Production domain. Used for canonical URLs, sitemap and Open Graph.
const SITE = 'https://www.helsys.be';

export default defineConfig({
  site: SITE,
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  // Built-in i18n routing. Dutch is the default and is served without a
  // language prefix; English lives under /en. This keeps clean URLs and
  // lets us emit correct hreflang / lang attributes per page.
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
  // Generate a sitemap at build time without an external integration,
  // see src/pages/sitemap.xml.ts. No client JS is shipped unless a
  // component opts in, which keeps Core Web Vitals strong.
});
