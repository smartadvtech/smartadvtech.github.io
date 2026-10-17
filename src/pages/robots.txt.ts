import type { APIRoute } from 'astro';
import { config } from '../config';

// Na prévia (config.indexar false), nenhum buscador entra
export const GET: APIRoute = () => {
  const corpo = config.indexar
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', config.url).href}\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(corpo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
