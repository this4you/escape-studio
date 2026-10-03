import type { APIRoute } from 'astro';

// One-page site, so the sitemap is a single URL; no need for @astrojs/sitemap.
export const GET: APIRoute = ({ site }) => {
  const url = new URL(import.meta.env.BASE_URL, site);
  const lastmod = new Date().toISOString().slice(0, 10);
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${url}</loc><lastmod>${lastmod}</lastmod></url>
</urlset>
`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
