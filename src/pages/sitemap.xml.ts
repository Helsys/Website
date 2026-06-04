import type { APIRoute } from 'astro';

// Hand rolled sitemap. Two routes only, so no need for an extra integration.
// hreflang alternates are included per URL for correct multilingual indexing.
export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://helsys.be')).origin;
  const lastmod = new Date().toISOString().split('T')[0];

  const urls = [
    { loc: `${base}/`, lang: 'nl' },
    { loc: `${base}/en/`, lang: 'en' },
  ];

  const alternates = `
    <xhtml:link rel="alternate" hreflang="nl" href="${base}/" />
    <xhtml:link rel="alternate" hreflang="en" href="${base}/en/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${base}/" />`;

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>${alternates}
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
