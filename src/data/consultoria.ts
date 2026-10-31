/**
 * Os textos da página da consultoria (/consultoria), a página da campanha que vende a organização do escritório. Vêm
 * das partes genéricas do deck comercial da consultoria: nada do diagnóstico de um escritório cliente entra aqui, nem o
 * nome das ferramentas. As quatro fases, o prazo, o suporte e a equipe são os da home (src/data/site.ts).
 */

export const contato = {
  mensagem: 'Olá! Vi a página da consultoria e quero um diagnóstico gratuito do meu escritório.',
  assunto: 'Diagnóstico da consultoria',
  rastrear: 'consultoria',
};

export const hero = {
  eyebrow: 'Consultoria em gestão para escritórios de advocacia',
  titulo: 'Organize o escritório para crescer sem depender de você.',
  texto:
    'Atendimento, prazos, papéis e captação de clientes: mapeamos como o escritório funciona hoje, desenhamos o ' +
    'plano em fases e implantamos junto com a equipe. Os sócios voltam a se dedicar ao jurídico.',
  detalhe: 'Diagnóstico e mapeamento da operação gratuitos. A primeira fase fica pronta em até 30 dias.',
};

// A ilustração do hero: o plano de um escritório fictício, com as fases da home e a primeira em implantação
export const cartaoDoPlano = {
  titulo: 'Plano de evolução',
  situacoes: ['Em implantação', 'Próxima', 'Planejada', 'Planejada'],
  itensDaPrimeira: [
    { texto: 'Atendimento centralizado', feito: true },
    { texto: 'Prazos no sistema de gestão', feito: true },
    { texto: 'Organograma e processos', feito: false },
  ],
};

export const sinais = [
  {
    fala: 'Todo cliente tem o meu WhatsApp.',
    texto: 'Cada advogado atende no próprio celular, sem histórico, e o cliente fica sem resposta quando ele não pode.',
  },
  {
    fala: 'Os prazos estão no meu caderno.',
    texto: 'O controle mais sensível do escritório depende de anotação manual e da memória de alguém.',
  },
  {
    fala: 'Se eu tirar férias, o escritório para.',
    texto: 'Decisões, clientes novos e dúvidas da equipe se concentram em uma ou duas pessoas.',
  },
  {
    fala: 'Contratamos alguém, e dava mais trabalho do que ajudava.',
    texto:
      'O escritório está na cabeça do sócio: sem papéis claros, processos escritos e treinamento, quem chega depende ' +
      'dele para tudo.',
  },
  {
    fala: 'Cada sistema guarda um pedaço do escritório.',
    texto: 'Ferramentas que não conversam entre si, documentos em pastas soltas e informação que se perde no caminho.',
  },
  {
    fala: 'Cliente novo? Só por indicação.',
    texto: 'Sem canais de captação nem funil de vendas, o crescimento depende da reputação e não é previsível.',
  },
];

export const antesDepois = [
  {
    antes: 'Cada advogado atende no próprio WhatsApp',
    depois:
      'O WhatsApp do escritório numa plataforma para a equipe, com triagem automática e o histórico de cada ' +
      'cliente',
  },
  {
    antes: 'Prazos em caderno, planilha ou memória',
    depois: 'Prazos, providências, audiências e perícias controlados no sistema de gestão jurídica',
  },
  {
    antes: 'Tudo depende dos sócios',
    depois: 'Papéis claros, processos documentados e uma equipe com autonomia para decidir',
  },
  {
    antes: 'Documentos e informações espalhados',
    depois: 'Arquivos e conhecimento da equipe organizados num lugar só, com padrão',
  },
  {
    antes: 'Cliente novo só por indicação',
    depois: 'Canais de captação e um funil de vendas ligado ao atendimento',
  },
];

// Do primeiro contato à entrada em operação de uma fase, e o que o escritório precisa garantir
export const comoTrabalhamos = {
  passos: [
    {
      titulo: 'Diagnóstico gratuito',
      texto: 'Em 30 minutos, os sócios contam como o escritório funciona hoje, e mostramos por onde começar.',
    },
    {
      titulo: 'Mapeamento da operação',
      texto:
        'Conversamos com a equipe e registramos como o escritório opera: pessoas e papéis, atendimento, prazos, ' +
        'documentos, ferramentas e a chegada de clientes novos. Também é gratuito.',
    },
    {
      titulo: 'Plano em fases',
      texto: 'As oportunidades e o plano de evolução, com o que entra em cada fase e o investimento.',
    },
    {
      titulo: 'Implantação',
      texto:
        'Configuramos as ferramentas, os fluxos e os processos, e treinamos a equipe ao vivo, com a gravação para ' +
        'quem chegar depois.',
    },
    {
      titulo: 'Entrada em operação',
      texto: 'Validamos juntos e acompanhamos o início, até a equipe andar sozinha.',
    },
  ],
  prazoESuporte: [
    'A primeira fase fica pronta em até 30 dias depois da contratação das ferramentas.',
    'Suporte durante toda a implantação, com resposta em até 24 horas.',
    'A gravação de cada encontro e a documentação dos fluxos ficam com o escritório.',
  ],
  pedimos: {
    itens: [
      'Uma pessoa responsável pelo projeto',
      'A contratação das ferramentas indicadas',
      'Os acessos e logins necessários',
      'A participação nas reuniões de alinhamento',
      'Retorno em até 48 horas sobre os ajustes',
    ],
    nota: 'Se faltar um desses pontos, o prazo é reajustado. Isso protege os dois lados.',
  },
};

export const destaqueDaFundacao =
  'Por onde todo escritório começa. Fica pronta em até 30 dias depois da contratação das ferramentas.';

export const fundacao = [
  {
    titulo: 'Sistema de gestão jurídica',
    texto:
      'Configurado para o escritório, com a migração dos dados e os fluxos de atendimentos, prazos e providências, ' +
      'audiências e perícias.',
  },
  {
    titulo: 'Atendimento centralizado',
    texto:
      'O WhatsApp do escritório numa plataforma para a equipe, com triagem automática, departamentos e o fluxo de ' +
      'atendimento documentado.',
  },
  {
    titulo: 'Papéis e responsabilidades',
    texto: 'Um organograma básico, para acabar com a sobreposição de funções, e a documentação dos processos.',
  },
  {
    titulo: 'Equipe treinada',
    texto: 'Treinamento ao vivo, com a gravação para quem chegar depois, focado no uso das ferramentas no dia a dia.',
  },
  {
    titulo: 'Ferramentas no nome do escritório',
    texto: 'Indicamos as ferramentas e ajudamos a contratar: as contas são do escritório, direto com cada fornecedor.',
  },
  {
    titulo: 'Suporte durante a implantação',
    texto: 'Acompanhamos toda a implantação, com resposta em até 24 horas, para a transição não travar a operação.',
  },
];

export const experiencia = {
  titulo: 'Nasceu dentro de um escritório',
  texto:
    'O método foi construído e testado durante 5 anos num escritório trabalhista atendido pela SmartADV. O que esses ' +
    'anos ensinaram, o seu escritório recebe pronto:',
  aprendizados: [
    'Quais fluxos de atendimento funcionam num escritório de advocacia',
    'Onde os clientes travam, e como resolver antes que vire reclamação',
    'Como treinar a equipe para adotar as ferramentas sem resistência',
    'Quais integrações valem a pena, e quais criam mais problema do que resolvem',
    'Como crescer o atendimento sem perder a qualidade do relacionamento',
  ],
  citacao: {
    texto: '5 anos de aprendizado que o seu escritório recebe sem precisar errar.',
    autor: 'Marcelo Molina, sócio da SmartADV',
  },
};

export const perguntas = [
  {
    pergunta: 'Para quem é a consultoria?',
    resposta:
      'Para escritórios que cresceram e sentem que a operação depende demais dos sócios: o atendimento passa por ' +
      'eles, os prazos ficam em controles manuais e o cliente novo só chega por indicação.',
  },
  {
    pergunta: 'Quanto custa?',
    resposta:
      'O diagnóstico e o mapeamento da operação são gratuitos. O investimento de cada fase é orçado no plano, ' +
      'conforme o tamanho do escritório e o que ele já tem, e o escritório paga só pela fase que contratar. As ' +
      'ferramentas são contratadas pelo escritório, direto com cada fornecedor.',
  },
  {
    pergunta: 'Quanto tempo leva?',
    resposta:
      'A fundação operacional fica pronta em até 30 dias depois da contratação das ferramentas. O prazo das fases ' +
      'seguintes entra no plano.',
  },
  {
    pergunta: 'Preciso contratar todas as fases?',
    resposta:
      'Não. Cada fase é contratada à parte, e o escritório avança no próprio ritmo. A primeira já organiza o ' +
      'atendimento e os prazos.',
  },
  {
    pergunta: 'Vou ter que trocar o sistema que uso hoje?',
    resposta:
      'Só se ele atrapalhar. O diagnóstico mostra se as ferramentas de hoje atendem; quando uma delas gera ' +
      'retrabalho, indicamos a troca e cuidamos da migração dos dados.',
  },
  {
    pergunta: 'O escritório precisa parar para a implantação?',
    resposta:
      'Não. A implantação acontece com o escritório funcionando. Pedimos uma pessoa responsável pelo projeto, a ' +
      'participação nas reuniões e retorno rápido sobre os ajustes.',
  },
  {
    pergunta: 'E a consulta de processo pelo WhatsApp?',
    resposta:
      'É um produto à parte, com mensalidade, que costuma entrar na segunda fase: o cliente consulta andamento, ' +
      'audiência e perícia a qualquer hora, no WhatsApp do escritório.',
    link: { href: '/atendimento', texto: 'Conheça o atendimento no WhatsApp' },
  },
];

export const chamadaFinal = {
  titulo: 'Vamos organizar o seu escritório?',
  texto:
    'No diagnóstico gratuito, de 30 minutos, entendemos como o escritório funciona hoje e mostramos por onde ' +
    'começar. Sem compromisso.',
};
