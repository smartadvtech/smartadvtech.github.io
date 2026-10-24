/**
 * Os textos do site. Vêm das partes genéricas do deck comercial: nada do diagnóstico de um escritório cliente entra
 * aqui.
 */

export const hero = {
  eyebrow: 'Consultoria e tecnologia para a advocacia',
  titulo: 'Gestão jurídica inteligente. Crescimento sustentável.',
  texto:
    'Ajudamos escritórios de advocacia a crescer, transformando operações desestruturadas em processos simples, ' +
    'eficientes e automatizados.',
};

export const gargalos = [
  {
    titulo: 'Atendimento',
    itens: [
      'Clientes chamando em vários WhatsApps, sem um histórico único',
      'Triagem manual, com advogados respondendo o primeiro contato',
      'Respostas sem padrão nem prazo de retorno',
    ],
  },
  {
    titulo: 'Gestão de processos',
    itens: [
      'Ferramentas que não conversam entre si e geram retrabalho',
      'Controle de prazos manual, com risco operacional',
      'Pouca visibilidade sobre o andamento do trabalho',
    ],
  },
  {
    titulo: 'Governança',
    itens: [
      'Decisões concentradas em uma só pessoa',
      'Processos não documentados e papéis que se sobrepõem',
      'Clientes novos só por indicação, sem previsibilidade',
    ],
  },
];

export const consultoria = {
  titulo: 'Consultoria em gestão jurídica',
  texto:
    'Organizamos a operação do escritório (atendimento, processos, papéis e ferramentas) para que os sócios voltem a ' +
    'se dedicar ao jurídico.',
  itens: [
    'Diagnóstico da operação e um plano de evolução em fases',
    'Implantação do sistema de gestão jurídica e da plataforma de atendimento no WhatsApp, com os fluxos de prazos, ' +
      'audiências e perícias',
    'Organograma, documentação dos processos e treinamento da equipe',
    'Estruturação comercial: canais de captação e funil de vendas',
  ],
};

export const tecnologia = {
  titulo: 'Tecnologia para escritórios',
  texto:
    'Produtos que automatizam o atendimento e os fluxos de trabalho, integrados às ferramentas que o escritório já usa.',
  produtos: [
    {
      nome: 'Consulta processual no WhatsApp',
      texto:
        'O cliente consulta andamento, audiência e perícia a qualquer hora, no WhatsApp do próprio escritório. ' +
        'Integrado ao sistema de gestão jurídica e à plataforma de atendimento: quando não encontra a informação, ' +
        'passa a conversa para a equipe.',
      link: { href: '/atendimento', texto: 'Conheça o atendimento no WhatsApp →' },
    },
    {
      nome: 'Automação de fluxos de trabalho',
      texto:
        'Fluxos orquestrados a partir das tarefas do sistema de gestão jurídica, numa plataforma de processos ' +
        '(BPM), e rastreáveis de ponta a ponta.',
    },
  ],
  nota: 'Planos mensais por volume de consultas, a partir de R$ 290.',
};

export const jornada = [
  {
    fase: 'Fase 1',
    titulo: 'Fundação operacional',
    texto: 'Organizar a casa: centralizar o atendimento e acabar com o controle manual de prazos.',
    entregas: [
      'Sistema de gestão jurídica configurado para atendimentos, prazos, audiências e perícias',
      'WhatsApp oficial centralizado numa plataforma de atendimento, com triagem automática',
      'Organograma básico e documentação dos processos',
    ],
  },
  {
    fase: 'Fase 2',
    titulo: 'Fluxos otimizados e equipe com autonomia',
    texto: 'Acelerar a esteira de trabalho e tirar a dependência de pessoas específicas.',
    entregas: [
      'Consultas processuais automáticas pelo WhatsApp',
      'Respostas rápidas padronizadas no atendimento',
      'Base de conhecimento da equipe e a jornada do cliente novo',
    ],
  },
  {
    fase: 'Fase 3',
    titulo: 'Máquina de vendas e escala',
    texto: 'Previsibilidade na captação de clientes e tecnologia para produzir mais sem inchar a equipe.',
    entregas: [
      'Canais de captação geridos num funil de vendas integrado ao atendimento',
      'Automação de peças e documentos recorrentes',
    ],
  },
  {
    fase: 'Fase 4',
    titulo: 'Governança avançada e melhoria contínua',
    texto: 'Maturidade operacional: processos complexos orquestrados, monitorados e sem gargalos escondidos.',
    entregas: [
      'Mapeamento e orquestração de processos (BPM)',
      'Automações finas e integrações entre os fluxos',
    ],
  },
];

export const metodologia = {
  passos: [
    { titulo: 'Kickoff', texto: 'Alinhamos expectativas, prazos e responsáveis com a equipe do escritório.' },
    { titulo: 'Configuração', texto: 'Setup técnico das ferramentas, dos fluxos e dos processos.' },
    { titulo: 'Treinamento', texto: 'Encontros ao vivo, com a gravação para quem chegar depois.' },
    { titulo: 'Go-live e aceite', texto: 'Validamos juntos e acompanhamos o início da operação.' },
  ],
  prazo: 'Em até 30 dias depois da contratação das ferramentas.',
  suporte: 'Suporte durante toda a implantação, com resposta em até 24 horas.',
};

export interface Resultados {
  titulo: string;
  texto: string;
  numeros: { valor: string; legenda: string }[];
  citacao?: { texto: string; autor: string };
}

// A seção de resultados aparece quando houver dados aqui. O repositório é público: os números (os do Molina & Molina,
// no deck comercial) só entram depois de confirmados e com a autorização para citá-lo, porque entrar aqui já é
// publicar.
export const resultados: Resultados | null = null;

export const equipe = {
  titulo: 'Quem está por trás da SmartADV',
  texto:
    'Produto, tecnologia, gestão e advocacia: a experiência de grandes empresas aplicada à realidade do escritório.',
  socios: [
    {
      nome: 'Helena Cabrini',
      iniciais: 'HC',
      papel: 'Sócia · Produto e operações',
      bio:
        'Bacharela em Ciência da Computação, há 10 anos atua como gerente de produtos em empresas como PagSeguro, ' +
        'Itaú, Bexs Banco, Elo7 e Enjoei, conectando estratégia, processos, tecnologia e experiência do cliente para ' +
        'construir operações eficientes e escaláveis.',
    },
    {
      nome: 'João Lopes',
      iniciais: 'JL',
      papel: 'Sócio · Tecnologia',
      bio:
        'Oficial formado pela Academia Militar do Barro Branco, com 17 anos liderando equipes, inclusive em operações ' +
        'especializadas e de inteligência. Pós-graduado em Arquitetura de Soluções, lidera times de desenvolvimento, ' +
        'hoje no Mercado Livre, unindo visão estratégica e gestão.',
    },
    {
      nome: 'Marcelo Molina',
      iniciais: 'MM',
      papel: 'Sócio · Operações jurídicas',
      bio:
        'Advogado e sócio do Molina & Molina Advogados, no contencioso trabalhista, onde responde por inovação, ' +
        'tecnologia e gestão operacional. Experiência na estruturação de processos e automações para a organização, a ' +
        'produtividade e a escala de operações jurídicas.',
    },
    {
      nome: 'Pedro Brando',
      iniciais: 'PB',
      papel: 'Sócio · Produto e crescimento',
      bio:
        'Gerente de produtos há mais de 6 anos, formado em Computação pela Universidade de São Paulo (USP), em São ' +
        'Carlos. Liderou iniciativas estratégicas de crescimento sustentável e otimização de negócios em marketplaces ' +
        'como Elo7 e Enjoei.',
    },
  ],
};

export const contato = {
  titulo: 'Vamos conversar sobre o seu escritório?',
  texto: 'Conte como o escritório funciona hoje, e mostramos por onde começar.',
};
