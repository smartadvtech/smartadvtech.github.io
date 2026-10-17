import type { APIRoute } from 'astro';
import { config } from '../config';

// Com config.indexar, libera os buscadores e aponta o sitemap; sem ele, fecha o site inteiro
export const GET: APIRoute = () => {
  const corpo = config.indexar
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', config.url).href}\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(corpo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
