import { config } from '../config';

/**
 * O primeiro contato numa página: a mensagem pronta do WhatsApp, o assunto do e-mail e o método do evento de lead
 * (data-rastrear). A página de uma campanha usa os dela, para o lead chegar dizendo de onde veio.
 */
export interface Contato {
  mensagem?: string;
  assunto?: string;
  rastrear?: string;
}

export function linkDoWhatsApp(mensagem: string = config.whatsapp.mensagem): string | undefined {
  if (!config.whatsapp.numero) return undefined;
  return `https://wa.me/${config.whatsapp.numero}?text=${encodeURIComponent(mensagem)}`;
}

/** O destino dos botões "Fale com a gente": o WhatsApp, quando houver número, ou o e-mail. */
export function linkDeContato({ mensagem, assunto = 'Contato pelo site' }: Contato = {}): string {
  return linkDoWhatsApp(mensagem) ?? `mailto:${config.contato.email}?subject=${encodeURIComponent(assunto)}`;
}
