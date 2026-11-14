/**
 * Uma mensagem da conversa ilustrada no celular (o Celular.astro): do cliente ou do escritório, a lista de opções do
 * menu, o aviso que o escritório manda antes de o cliente perguntar (com o título em negrito e o botão de resposta
 * rápida, como a mensagem de modelo do WhatsApp) ou a data entre as mensagens de dias diferentes.
 */
export type Mensagem =
  | { readonly de: 'cliente' | 'escritorio'; readonly texto: string }
  | { readonly de: 'opcoes'; readonly texto: readonly string[] }
  | { readonly de: 'aviso'; readonly titulo?: string; readonly texto: string; readonly botao?: string }
  | { readonly de: 'dia'; readonly texto: string };
