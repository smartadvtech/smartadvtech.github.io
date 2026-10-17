import { config } from '../config';

export function linkDoWhatsApp(mensagem: string = config.whatsapp.mensagem): string | undefined {
  if (!config.whatsapp.numero) return undefined;
  return `https://wa.me/${config.whatsapp.numero}?text=${encodeURIComponent(mensagem)}`;
}

/** O destino dos botões "Fale com a gente": o WhatsApp, quando houver número, ou o e-mail. */
export function linkDeContato(): string {
  return linkDoWhatsApp() ?? `mailto:${config.contato.email}?subject=${encodeURIComponent('Contato pelo site')}`;
}
