/**
 * Os textos da página dos avisos ao cliente no WhatsApp (/avisos), a página da campanha do golpe do falso advogado. Os
 * avisos são um adicional do atendimento no WhatsApp (/atendimento): saem do WhatsApp do escritório, e o botão do
 * aviso leva o cliente ao assistente de consulta. Sem o nome das ferramentas, e sem a promessa de que os avisos impedem
 * o golpe: eles acostumam o cliente a receber as notícias do processo pelo canal oficial do escritório.
 */
import type { Mensagem } from '../lib/conversa';

export const contato = {
  mensagem: 'Olá! Vi a página dos avisos ao cliente e quero um diagnóstico gratuito.',
  assunto: 'Diagnóstico dos avisos ao cliente',
  rastrear: 'avisos',
};

export const hero = {
  eyebrow: 'Avisos ao cliente no WhatsApp',
  titulo: 'O golpe do falso advogado se aproveita do silêncio.',
  texto:
    'O golpista usa os dados públicos do processo para se passar pelo advogado e pedir dinheiro ao cliente. Com os ' +
    'avisos ao cliente, o escritório dá as notícias antes de o cliente perguntar, sempre pelo WhatsApp oficial: a ' +
    'resposta nova no processo, os lembretes da audiência e da perícia e, quando não há novidade, o aviso de que o ' +
    'processo segue em andamento.',
  detalhe: 'Um adicional do atendimento no WhatsApp · orçado no diagnóstico gratuito',
};

// A conversa do celular do hero: os três avisos, em dias diferentes. Ilustração, com dados fictícios
export const conversa: readonly Mensagem[] = [
  { de: 'dia', texto: '10 de outubro' },
  {
    de: 'aviso',
    titulo: 'Seu processo segue em andamento',
    texto:
      'Olá, Mariana! Não houve novidade no processo 0004521-63.2022.8.26.0100 desde o último aviso. Assim que houver, ' +
      'avisamos por aqui.\n\nLembre: o escritório não pede pagamento para liberar valores.',
  },
  { de: 'dia', texto: '18 de novembro' },
  {
    de: 'aviso',
    titulo: 'Novidade no seu processo',
    texto: 'Olá, Mariana! Há uma resposta nova do escritório no processo 0001234-87.2025.8.26.0100.',
    botao: 'Consultar agora',
  },
  { de: 'cliente', texto: 'Consultar agora' },
  { de: 'dia', texto: '22 de novembro' },
  {
    de: 'aviso',
    titulo: 'Lembrete da audiência',
    texto: 'Olá, Mariana! Sua audiência é em 3 dias: 25/11/2026, às 14h, no Fórum Trabalhista de São Paulo.',
  },
];

export const golpe = [
  {
    titulo: 'Os dados do processo são públicos',
    texto: 'O número, as partes e os andamentos ficam nos sites dos tribunais, ao alcance de qualquer um.',
  },
  {
    titulo: 'O golpista se passa pelo advogado',
    texto: 'Com o nome e a foto do advogado, chama o cliente de um número novo, com uma notícia boa: o processo foi ganho.',
  },
  {
    titulo: 'E pede um pagamento',
    texto: 'Uma taxa, custas ou um imposto para liberar o valor, por Pix e com pressa.',
  },
  {
    titulo: 'O cliente sem notícias acredita',
    texto: 'Quem não ouve o escritório há meses não tem com o que comparar a mensagem do golpista.',
  },
  {
    titulo: 'O escritório paga a conta',
    texto: 'O cliente perde o dinheiro, e o escritório perde a confiança dele, mesmo sem ter culpa nenhuma.',
  },
  {
    titulo: 'Qualquer escritório é alvo',
    texto: 'Basta ter processos com clientes pessoa física: o golpe não escolhe o tamanho do escritório.',
  },
];

export const avisos = [
  {
    titulo: 'Resposta nova no processo',
    texto:
      'Quando a equipe publica uma resposta nova para o cliente no sistema de gestão, ele recebe o aviso com um botão ' +
      'para consultar o processo na hora, pelo assistente do escritório.',
  },
  {
    titulo: 'Lembrete da audiência e da perícia',
    texto: '7 dias, 3 dias e 1 dia antes, com a data, a hora, o local e o número do processo.',
  },
  {
    titulo: 'Sem novidade, sem silêncio',
    texto:
      'No intervalo que o escritório escolher, o cliente sem notícias recebe o aviso de que o processo segue em ' +
      'andamento e de que o escritório avisa assim que houver novidade.',
  },
];

export const antesDepois = {
  itens: [
    {
      antes: 'O cliente passa meses sem notícias do processo',
      depois: 'O cliente recebe as notícias do processo sem precisar perguntar',
    },
    {
      antes: 'A primeira mensagem sobre o processo pode vir do golpista',
      depois: 'As notícias chegam sempre pelo WhatsApp oficial do escritório',
    },
    {
      antes: 'Uma notícia boa de um número novo parece verdade',
      depois: 'A mensagem que não vem do número de sempre chama a atenção',
    },
    {
      antes: 'O cliente esquece a audiência ou a perícia',
      depois: 'O cliente recebe o lembrete 7, 3 e 1 dia antes',
    },
    {
      antes: '“Como está meu processo?” o dia inteiro',
      depois: 'Menos perguntas: o cliente já sabe o que mudou',
    },
  ],
  nota:
    'Os avisos não impedem que um golpista mande mensagem ao cliente: eles acostumam o cliente a receber as notícias ' +
    'pelo canal oficial do escritório. O próprio aviso pode lembrar que o escritório não pede pagamento para liberar ' +
    'valores.',
};

export const comoFunciona = [
  {
    titulo: 'A equipe trabalha como sempre',
    texto: 'Registra as respostas, as audiências e as perícias no sistema de gestão do escritório. Nada muda na rotina.',
  },
  {
    titulo: 'A SmartADV acompanha o sistema',
    texto: 'Ao longo do dia, achamos o que é novidade para cada cliente e preparamos o aviso, com o texto do escritório.',
  },
  {
    titulo: 'O cliente recebe no WhatsApp do escritório',
    texto: 'Das 8h às 20h, e consulta o processo pelo assistente, a qualquer hora, com a resposta que a equipe escreveu.',
  },
];

export const regras = [
  {
    titulo: 'O escritório decide',
    texto: 'Os avisos só são ligados com a autorização do escritório, que escolhe quais quer e aprova o texto de cada um.',
  },
  {
    titulo: 'Nada de mensagem de madrugada',
    texto: 'Os avisos saem das 8h às 20h. O lembrete da audiência e da perícia sai às 9h.',
  },
  {
    titulo: 'O andamento não vai na mensagem',
    texto: 'O aviso diz que há novidade, e o cliente vê o andamento no assistente, com o texto que a equipe escreveu.',
  },
  {
    titulo: 'Uma vez só',
    texto: 'Cada novidade vira um aviso, uma vez. A resposta apagada logo depois de publicada não chega ao cliente.',
  },
  {
    titulo: 'Tudo no relatório',
    texto:
      'Os avisos do mês entram no relatório de uso, com os que não saíram e o porquê, e avisamos por e-mail perto do ' +
      'limite da cota.',
  },
  {
    titulo: 'Dados protegidos (LGPD)',
    texto:
      'O escritório continua dono dos dados. Os registros ficam em São Paulo, e o contrato traz o papel de cada um e os ' +
      'prazos de guarda.',
  },
];

export const perguntas: { pergunta: string; resposta: string; link?: { href: string; texto: string } }[] = [
  {
    pergunta: 'Os avisos impedem o golpe do falso advogado?',
    resposta:
      'Não há como impedir que um golpista mande mensagem ao cliente. O que os avisos fazem é acostumar o cliente a ' +
      'receber as notícias do processo pelo número oficial do escritório: assim, a "notícia boa" que chega de um número ' +
      'desconhecido chama a atenção. O próprio aviso pode lembrar que o escritório não pede pagamento para liberar ' +
      'valores.',
  },
  {
    pergunta: 'Preciso ter o atendimento no WhatsApp da SmartADV?',
    resposta:
      'Sim. Os avisos saem do WhatsApp do escritório, na plataforma de atendimento que implantamos, e o botão do aviso ' +
      'leva o cliente ao assistente de consulta. Se o escritório ainda não tem o atendimento, implantamos os dois ' +
      'juntos.',
    link: { href: '/atendimento', texto: 'Conheça o atendimento no WhatsApp →' },
  },
  {
    pergunta: 'O cliente recebe o andamento na mensagem?',
    resposta:
      'Não. O aviso diz que há uma novidade no processo, e o cliente toca no botão para ver o andamento no assistente, ' +
      'com o texto que a equipe escreveu para ele. O lembrete da audiência e da perícia leva a data, a hora e o local.',
  },
  {
    pergunta: 'Com que frequência o cliente recebe os avisos?',
    resposta:
      'O aviso de resposta nova sai a cada resposta que a equipe publica para o cliente. Os lembretes, 7 dias, 3 dias ' +
      'e 1 dia antes da audiência e da perícia. O de processo sem novidade, no intervalo que o escritório escolher. ' +
      'Todos das 8h às 20h.',
  },
  {
    pergunta: 'E se a equipe publicar uma resposta por engano?',
    resposta:
      'O aviso espera alguns minutos antes de sair: a resposta apagada ou trocada nesse meio-tempo não é avisada.',
  },
  {
    pergunta: 'Quem escreve as mensagens?',
    resposta:
      'O escritório aprova o texto de cada aviso, que passa também pela aprovação do WhatsApp. Ajudamos a escrever, no ' +
      'tom do escritório.',
  },
  {
    pergunta: 'Funciona com o sistema que eu uso?',
    resposta:
      'Os avisos saem do sistema de gestão jurídica do escritório, como a consulta do atendimento. Conferimos a ' +
      'compatibilidade no diagnóstico.',
  },
  {
    pergunta: 'Quanto custa?',
    resposta:
      'Os avisos são um adicional do atendimento no WhatsApp, com uma cota de avisos por mês, orçado no diagnóstico ' +
      'gratuito. Cada aviso é uma mensagem que o escritório inicia, e o WhatsApp a cobra à parte, na conta do ' +
      'escritório na plataforma de atendimento.',
  },
  {
    pergunta: 'E se passar da cota do mês?',
    resposta:
      'Avisamos o escritório por e-mail em 80%, 90% e 100% da cota. No limite, os avisos param de sair até o mês ' +
      'seguinte ou a mudança para uma cota maior.',
  },
  {
    pergunta: 'E os dados dos meus clientes?',
    resposta:
      'Continuam do escritório: a SmartADV só os trata para prestar o serviço, e os avisos só são ligados com a ' +
      'autorização do escritório. Os registros ficam em São Paulo, o andamento não vai na mensagem, e o contrato traz ' +
      'as regras da LGPD, com o papel de cada um e os prazos de guarda.',
  },
];

export const chamadaFinal = {
  titulo: 'Vamos deixar o seu cliente sempre bem informado?',
  texto:
    'No diagnóstico gratuito, de 30 minutos, entendemos como o escritório atende hoje e mostramos como ficariam os ' +
    'avisos. Sem compromisso.',
};
