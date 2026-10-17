/**
 * O que liga e desliga partes do site. Campo vazio não aparece nem carrega nada: ligar o WhatsApp ou um parceiro de
 * anúncios é preencher o campo aqui, por PR.
 */
export const config = {
  nome: 'SmartADV',
  url: 'https://smartadvtech.com.br',

  // Enquanto o site está só na prévia (smartadvtech.github.io), os buscadores não indexam. Vira true no go-live do
  // domínio.
  indexar: false,

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
