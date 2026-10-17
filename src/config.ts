/**
 * O que liga e desliga partes do site. Campo vazio não aparece nem carrega nada: ligar o WhatsApp ou um parceiro de
 * anúncios é preencher o campo aqui, por PR.
 */
export const config = {
  nome: 'SmartADV',
  url: 'https://smartadvtech.com.br',

  // Os buscadores indexam o site (o robots.txt libera e aponta o sitemap, e sai o noindex). Desde o go-live do domínio,
  // em 17/10/2026; false tira o site dos buscadores.
  indexar: true,

  // Aparecem no rodapé e na política de privacidade. Pendente antes do go-live.
  empresa: {
    razaoSocial: '',
    cnpj: '',
  },

  contato: {
    email: 'smartadv@smartadvtech.com.br',
  },

  // Só dígitos, com o 55 e o DDD (por exemplo, 5511999999999). Vazio: sem botão, e o contato vai pelo e-mail.
  whatsapp: {
    numero: '',
    mensagem: 'Olá! Vim pelo site da SmartADV e quero saber mais.',
  },

  // Os IDs dos parceiros de medição e anúncio. Só carregam depois de a pessoa aceitar os cookies (LGPD).
  rastreamento: {
    googleTagId: '', // G-... (Analytics) ou AW-... (Google Ads)
    metaPixelId: '', // o número do Pixel da Meta
  },

} as const;

export const temRastreamento = Boolean(config.rastreamento.googleTagId || config.rastreamento.metaPixelId);
