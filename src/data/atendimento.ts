/**
 * Os textos da página do atendimento no WhatsApp (/atendimento), a página da campanha. Só o que a SmartADV entrega
 * hoje, sem o nome das ferramentas. A IA das perguntas fora do menu aparece sempre como adicional: fica fora dos
 * planos e só é ligada com a autorização do escritório.
 */
import type { Resultados } from './site';

export const contato = {
  mensagem: 'Olá! Vi a página do atendimento no WhatsApp e quero um diagnóstico gratuito.',
  assunto: 'Diagnóstico do atendimento no WhatsApp',
  rastrear: 'atendimento',
};

export const hero = {
  eyebrow: 'Atendimento no WhatsApp para escritórios de advocacia',
  titulo: 'Tire o atendimento do seu WhatsApp pessoal.',
  texto:
    'Seu cliente fala com o WhatsApp do escritório, e a equipe toda atende num lugar só. Andamento, audiência e ' +
    'perícia são informados automaticamente, a qualquer hora, e uma IA pode responder às outras dúvidas. Nós ' +
    'configuramos tudo e treinamos a equipe.',
  detalhe: 'A partir de R$ 69,90/mês · pronto em até 30 dias',
};

// A conversa do celular do hero: ilustração, com dados fictícios
export const conversa = [
  { de: 'cliente', texto: 'Oi' },
  { de: 'escritorio', texto: 'Olá! Seja bem-vindo(a) ao atendimento do escritório. Como podemos ajudar?' },
  { de: 'opcoes', texto: ['Consultar meu processo', 'Data da audiência', 'Data da perícia', 'Falar com a equipe'] },
  { de: 'cliente', texto: 'Consultar meu processo' },
  {
    de: 'escritorio',
    texto:
      'Processo 0001234-56.2025.5.02.0001\n\nA audiência foi realizada, e o processo aguarda a sentença. Assim que o ' +
      'juiz decidir, avisamos você.',
  },
] as const;

export const dores = [
  {
    titulo: 'Cliente no seu WhatsApp pessoal',
    texto: 'À noite, no fim de semana e nas férias, a mensagem chega no seu celular, e a resposta depende de você.',
  },
  {
    titulo: '“Como está meu processo?” o dia inteiro',
    texto: 'É a pergunta que mais chega, e cada resposta tira alguém do trabalho jurídico.',
  },
  {
    titulo: 'Só o advogado sabe responder',
    texto: 'A recepção pergunta ao advogado para responder ao cliente, e os dois perdem tempo.',
  },
  {
    titulo: 'O histórico vai embora',
    texto: 'Quando alguém sai ou troca de celular, as conversas com os clientes vão junto.',
  },
  {
    titulo: 'Cliente sem retorno',
    texto: 'Sem padrão nem prazo de resposta, a demora vira cobrança, reclamação e avaliação ruim.',
  },
  {
    titulo: 'Nenhum número',
    texto: 'Ninguém sabe quantos atendimentos o escritório faz por mês, nem quanto tempo eles tomam.',
  },
];

export const antesDepois = [
  {
    antes: 'O cliente chama no seu WhatsApp pessoal',
    depois: 'O cliente chama no WhatsApp do escritório, atendido pela equipe numa plataforma só',
  },
  {
    antes: 'Você responde à noite, no fim de semana e nas férias',
    depois: 'O assistente informa andamento, audiência e perícia a qualquer hora',
  },
  {
    antes: 'Cada um responde de um jeito, quando dá',
    depois: 'Triagem por assunto, respostas padronizadas e uma fila para cada área',
  },
  {
    antes: 'O histórico fica no celular de quem atendeu',
    depois: 'O histórico fica com o escritório, mesmo quando alguém sai',
  },
  {
    antes: 'Ninguém sabe quanto o atendimento consome',
    depois: 'Um relatório de uso todo mês',
  },
];

export const comoFunciona = [
  {
    titulo: 'Chama no WhatsApp do escritório',
    texto: 'O cliente manda mensagem para o número do escritório, a qualquer hora, inclusive à noite e no fim de semana.',
  },
  {
    titulo: 'Escolhe o que quer saber',
    texto: 'Um menu simples: o andamento do processo, a data da audiência, a data da perícia ou falar com a equipe.',
  },
  {
    titulo: 'Recebe a resposta em segundos',
    texto:
      'O assistente consulta o sistema de gestão do escritório e responde com o texto que a equipe escreveu para o ' +
      'cliente, e não com o andamento técnico do tribunal. Se não encontrar, passa a conversa para uma pessoa.',
  },
];

// Um trecho da transcrição do vídeo: o texto que aparece na tela ou uma mensagem da conversa, com quem a mandou
type Trecho = string | { de: 'Cliente' | 'Escritório'; texto: string };

export interface Video {
  src: string;
  poster: string;
  largura: number;
  altura: number;
  /** O texto do vídeo, cena a cena: o vídeo não tem som, e a transcrição é a alternativa em texto a ele */
  transcricao: Trecho[][];
}

const SAUDACAO =
  '🤖 Olá! Seja bem vindo(a) ao canal de atendimento do Molina&Molina Advogados via WhatsApp.\n\n' +
  'Como podemos te ajudar?';

const ANDAMENTOS = [
  'Andamento(s) localizado(s):',
  '',
  'Processo: 0001234-87.2025.8.26.0100',
  'Envolvidos: MARIANA ALVES PEREIRA, VERTICE TELECOMUNICACOES S.A.',
  'Situação:',
  '',
  'Processo: 0004521-63.2022.8.26.0100',
  'Envolvidos: MARIANA ALVES PEREIRA, PEDRA BRANCA ENGENHARIA E CONSTRUCAO LTDA, RICARDO MENDES SILVA',
  'Situação: Foi realizado acordo.',
  'Serão descontados os honorários de 30% da parcela.',
  'Parcela única - R$ 23 - yy/zz/www.',
  'O pagamento será realizado no dia útil seguinte ao vencimento,',
  '',
  'Já conhece nossas redes?',
  'instagram.com/molinaemolinaadvogados/',
  'https://www.facebook.com/molinaemolinaadvogadostrabalhistas/',
  '',
  'Processo: 0010388-41.2024.5.02.0081',
  'Envolvidos: REDEVALE TELECOMUNICACOES S.A E OUTROS, MARIANA ALVES PEREIRA',
  'Situação do Processo:',
  'Em1a instância, o juiz reconheceu que você deveria receber horas extras (desconsiderando o cargo de confiança e ' +
    'condenou a empresa ao pagamento de adicional de horas extras.',
  '',
  'Em 2ª instância, o Tribunal manteve a condenação.',
  '',
  'O que acontece depois?',
  'Vamos aguardar a fase de execução de sentença, em que discutiremos o valor da condenação.',
  'Nessa fase que apresentaremos os cálculos, a empresa os dela, haverá discussões quanto aos valores até que o juiz ' +
    'determine o valor final da condenação, intime a empresa para efetuar o pagamento e liberação de valores.',
  'Não há prazo definido, é preciso aguardar.',
].join('\n');

const RESPOSTA_DA_IA = [
  'Em regra, não é possível remarcar a audiência trabalhista, pois a data é definida pelo juiz com base na agenda do ' +
    'fórum e deve ser cumprida, sem interferência do advogado.',
  'Só é permitido pedir a remarcação em casos de força maior, como por exemplo parto previsto para a data ou uma ' +
    'cirurgia agendada, atestado médico ou de óbito — e sempre é necessário apresentar documentos que comprovem esse ' +
    'motivo. Mesmo nesses casos, a decisão final é do juiz e não há garantias de que será aceita.',
  'Se houver um motivo grave, nos avise o quanto antes e envie a documentação necessária para tentarmos pedir a ' +
    'remarcação ao Juiz do processo.',
  '',
  'Podemos ajudar em algo mais?',
].join('\n');

// O vídeo da campanha, que chega pronto, com os nomes e os números de processo fictícios: trocar é substituir os
// arquivos em public/videos/ e a transcrição, que repete o texto de cada cena e as mensagens, sem a formatação do
// WhatsApp. null esconde a seção.
export const video: Video | null = {
  src: '/videos/atendimento.mp4',
  poster: '/videos/atendimento-poster.jpg',
  largura: 720,
  altura: 1280,
  transcricao: [
    [
      'Sábado, 16h57. Seu cliente quer saber do processo.',
      'Na tela de bloqueio do celular, chegam as mensagens: "Dr., alguma novidade do meu processo?" e "E a ' +
        'audiência, já tem data?", da Dona Maria; "Bom dia! Saiu alguma coisa?", do Sr. Carlos; e "Oi?? Alguém pode ' +
        'me responder?", da Juliana.',
    ],
    ['E quem responde é você. No seu WhatsApp pessoal. No fim de semana. Nas férias.'],
    ['E se o WhatsApp do escritório respondesse por você?'],
    [
      'Uma consulta no WhatsApp do escritório, numa tela recriada com as mensagens reais. Os nomes e os números de ' +
        'processo são fictícios, e a pergunta à IA e a resposta são de outra conversa real.',
      'O cliente chama no WhatsApp do escritório.',
      { de: 'Cliente', texto: 'Oi' },
      { de: 'Escritório', texto: SAUDACAO },
      'Escolhe o que quer saber: toca em "Opções", vê a lista (Novo cliente, Consultar data audiência, Consultar meu ' +
        'processo, Consultar data perícia, Sou advogado ou perito e Outros) e escolhe "Consultar meu processo".',
      { de: 'Cliente', texto: 'Consultar meu processo' },
      'O assistente consulta o sistema do escritório.',
      {
        de: 'Escritório',
        texto:
          'Ok, entendemos sua solicitação.\nPor favor, aguarde um momento enquanto consultamos seu processo.\n\n' +
          'ATENÇÃO:\nAs consultas em sites da internet como JUSBRASIL e GOOGLE não são fontes oficiais da JUSTIÇA DO ' +
          'TRABALHO.',
      },
      'O escritório aparece "digitando…". No vídeo, a espera foi acelerada.',
      'E responde com o andamento de cada processo, em linguagem simples, sem ocupar a equipe.',
      { de: 'Escritório', texto: ANDAMENTOS },
      'E a dúvida fora do menu?',
      { de: 'Escritório', texto: 'Podemos ajudar em algo mais?' },
      'Com os botões "Não" e "Menu Principal", o cliente toca em "Menu Principal".',
      { de: 'Cliente', texto: 'Menu Principal' },
      { de: 'Escritório', texto: SAUDACAO },
      'O cliente toca em "Opções" e escolhe "Outros".',
      { de: 'Cliente', texto: 'Outros' },
      { de: 'Escritório', texto: 'Por favor, digite sua dúvida.' },
      {
        de: 'Cliente',
        texto: 'eu preciso faltar na minha audiência, é aniversário da minha mãe, dá pra mudar a data?',
      },
      'A IA responde, com a base de respostas do escritório.',
      { de: 'Escritório', texto: RESPOSTA_DA_IA },
      'Na dúvida, passa para a equipe.',
    ],
    [
      'Por trás disso, a SmartADV deixa o atendimento do escritório pronto: o WhatsApp do escritório numa ' +
        'plataforma para a equipe; triagem automática por assunto; consulta de andamento, audiência e perícia; ' +
        'equipe treinada e fluxo documentado; IA para as outras dúvidas, se o escritório quiser; e o que o ' +
        'assistente não resolve vai para uma pessoa.',
    ],
    [
      'Num escritório trabalhista atendido pela SmartADV, 3 em 4 consultas são respondidas na hora, sem passar pela ' +
        'equipe, e 1 em 4 chega fora do horário comercial. Andamento, audiência e perícia, em outubro de 2026.',
    ],
    ['Atendimento no WhatsApp, pronto em até 30 dias. Diagnóstico gratuito: smartadvtech.com.br/atendimento.'],
  ],
};

export const demonstracao = {
  titulo: 'Uma consulta real, num sábado à tarde',
  texto:
    'O cliente pediu o andamento do processo e recebeu a resposta em segundos, sem ninguém da equipe precisar parar o ' +
    'fim de semana. Depois, uma pergunta fora do menu, de outra conversa, respondida pela IA. A tela é recriada com as ' +
    'mensagens reais, e os nomes e os números de processo são fictícios.',
};

export const ia = [
  {
    titulo: 'Respostas do seu escritório',
    texto: 'A IA responde a partir de uma base de respostas preparada pela SmartADV e ajustada ao seu escritório.',
  },
  {
    titulo: 'Na dúvida, passa para a equipe',
    texto: 'Quando a resposta não está na base, ou a IA fica em dúvida, a conversa vai para uma pessoa da equipe.',
  },
  {
    titulo: 'O escritório decide',
    texto:
      'É opcional: só é ligada com a autorização do escritório, e o preço é combinado no diagnóstico, fora dos planos.',
  },
];

export const entregas = [
  {
    titulo: 'Plataforma de atendimento',
    texto:
      'Indicamos a plataforma, ajudamos a contratar no nome do escritório e levamos o WhatsApp para ela: a equipe toda ' +
      'atende no mesmo número.',
  },
  {
    titulo: 'Configuração completa',
    texto: 'Filas por área, horários, mensagens de ausência e respostas rápidas, do jeito do seu escritório.',
  },
  {
    titulo: 'Triagem automática',
    texto: 'Um menu que entende o que o cliente quer e leva a conversa para a pessoa certa.',
  },
  {
    titulo: 'Consulta processual automática',
    texto: 'Andamento, audiência e perícia direto do sistema de gestão do escritório, a qualquer hora.',
  },
  {
    titulo: 'Equipe treinada',
    texto: 'Treinamento ao vivo, com a gravação para quem chegar depois, e o fluxo de atendimento documentado.',
  },
  {
    titulo: 'Entrada em operação acompanhada',
    texto: 'Validamos juntos o início da operação e ajustamos o que for preciso.',
  },
];

// Os passos são os da home (src/data/site.ts); só o título fala do atendimento.
export const metodologia = {
  titulo: 'Do primeiro encontro ao primeiro atendimento',
};

// A prova social: números medidos num escritório atendido pela SmartADV, sem o nome dele. O repositório é público, e
// entrar aqui já é publicar: número novo só entra depois de aprovado. null esconde a seção.
export const prova: Resultados | null = {
  titulo: 'Nasceu dentro de um escritório trabalhista',
  texto:
    'Antes de virar produto, o atendimento foi construído e testado durante 5 anos num escritório trabalhista atendido ' +
    'pela SmartADV. Os números são de lá.',
  numeros: [
    {
      valor: '3 em 4',
      legenda: 'consultas de andamento, audiência e perícia respondidas na hora, sem passar pela equipe (outubro de 2026)',
    },
    {
      valor: '1 em 4',
      legenda: 'consultas chegam fora do horário comercial: à noite, de madrugada ou no fim de semana (outubro de 2026)',
    },
    { valor: '+1.000', legenda: 'consultas por mês num só escritório (abril a setembro de 2026)' },
    { valor: '5 anos', legenda: 'de operação num escritório de verdade antes de chegar ao seu' },
  ],
};

export const transparencia = [
  {
    titulo: 'Preço fixo por mês',
    texto: 'Sem cobrança por consulta. Se o mês passar da cota, as consultas seguintes vão para a equipe, sem custo extra.',
  },
  {
    titulo: 'Aviso antes do limite',
    texto: 'Avisamos por e-mail quando o uso do mês chega a 80%, 90% e 100% da cota. O plano maior vale em até 1 dia útil.',
  },
  {
    titulo: 'Relatório de uso todo mês',
    texto: 'Quantas consultas os clientes fizeram e o resultado de cada uma, no e-mail do escritório.',
  },
  {
    titulo: 'Contas no nome do escritório',
    texto: 'A plataforma de atendimento e o sistema de gestão são do escritório, contratados direto com cada fornecedor.',
  },
  {
    titulo: 'Dados protegidos (LGPD)',
    texto:
      'Os registros ficam em São Paulo, sem o texto das conversas, e o contrato define o papel de cada um, inclusive o ' +
      'do fornecedor da IA, se ela for ligada.',
  },
  {
    titulo: 'Sempre uma pessoa por perto',
    texto: 'O que o assistente não resolve vai para a equipe. O cliente nunca fica sem resposta.',
  },
];

// As faixas do aditivo ao contrato. O preço é em reais por mês.
export const planos = {
  itens: [
    { nome: 'Starter', preco: 69.9, cota: '200', publico: 'Para escritórios que estão começando' },
    { nome: 'Plus', preco: 129.9, cota: '500', publico: 'Para escritórios em crescimento' },
    { nome: 'Basic', preco: 199.9, cota: '1.000', publico: 'Para escritórios com muitos clientes' },
    { nome: 'Pro', preco: 290, cota: '3.000', publico: 'Para escritórios de alto volume' },
  ],
  inclui: [
    'Consulta de andamento, audiência e perícia',
    'Relatório de uso todo mês',
    'Aviso de uso da cota por e-mail',
    'Sem cobrança por consulta',
  ],
  adicional:
    'A IA para as perguntas fora do menu é um adicional, orçado no diagnóstico e ligado só com a autorização do ' +
    'escritório.',
  consulta:
    'Consulta é cada pedido de andamento, audiência ou perícia que um cliente faz ao assistente. No diagnóstico, ' +
    'estimamos o plano pelo volume de clientes do escritório.',
  nota:
    'A implantação é orçada no diagnóstico gratuito, conforme o tamanho do escritório. A plataforma de atendimento e o ' +
    'sistema de gestão são contratados em nome do escritório, direto com cada fornecedor.',
};

export const perguntas = [
  {
    pergunta: 'Meu cliente vai conversar com um robô?',
    resposta:
      'Só para o que um robô faz bem: informar o andamento, a data da audiência e a da perícia e, com o adicional de ' +
      'IA, responder às dúvidas mais comuns. Para todo o resto, e sempre que o assistente não encontra a informação, a ' +
      'conversa vai para uma pessoa da equipe.',
  },
  {
    pergunta: 'E se a IA não souber responder?',
    resposta:
      'Ela passa a conversa para uma pessoa da equipe. A IA responde a partir da base de respostas, e o que não está ' +
      'nela, ou deixa dúvida, vai para a equipe. A equipe vê todas as conversas na plataforma de atendimento, e a ' +
      'base é ajustada sempre que o escritório pedir.',
  },
  {
    pergunta: 'Preciso trocar de número?',
    resposta:
      'Recomendamos um número só do escritório, separado do pessoal. Se o escritório já tem um, avaliamos no ' +
      'diagnóstico como levá-lo para a plataforma de atendimento.',
  },
  {
    pergunta: 'Funciona com o sistema que eu uso?',
    resposta:
      'A consulta automática funciona integrada a um sistema de gestão jurídica. Se o escritório já usa um, conferimos ' +
      'a compatibilidade no diagnóstico; se ainda não usa, indicamos e ajudamos a implantar.',
  },
  {
    pergunta: 'Quanto tempo leva?',
    resposta:
      'Até 30 dias depois da contratação das ferramentas: o primeiro encontro, a configuração, o treinamento e a ' +
      'entrada em operação acompanhada.',
  },
  {
    pergunta: 'Preciso de alguém de TI?',
    resposta:
      'Não. A SmartADV cuida da parte técnica do começo ao fim e monitora o funcionamento do assistente todos os dias.',
  },
  {
    pergunta: 'E se o cliente mandar um áudio?',
    resposta:
      'O assistente pede que o cliente escolha uma opção do menu ou passa a conversa para a equipe, como o escritório ' +
      'preferir.',
  },
  {
    pergunta: 'E os dados dos meus clientes?',
    resposta:
      'Continuam do escritório: a SmartADV só os trata para prestar o serviço. Os registros ficam em São Paulo, o texto ' +
      'das conversas não fica nos nossos registros, e o contrato traz as regras da LGPD, com o papel de cada um, os ' +
      'prazos de guarda e o aviso em caso de incidente. Com a IA ligada, só as perguntas fora do menu passam pelo ' +
      'fornecedor da IA, sem os dados dos processos, e ele entra no contrato como suboperador.',
  },
  {
    pergunta: 'E se passar da cota do mês?',
    resposta:
      'Não há cobrança extra. Avisamos em 80%, 90% e 100% da cota; a partir daí, as consultas do mês vão para a equipe, ' +
      'até o mês seguinte ou a mudança para o plano maior, que vale em até 1 dia útil.',
  },
  {
    pergunta: 'Quanto custa?',
    resposta:
      'A mensalidade do atendimento automático vai de R$ 69,90 (até 200 consultas por mês) a R$ 290 (até 3.000), em ' +
      'quatro planos. A implantação é orçada no diagnóstico, conforme o tamanho do escritório. A plataforma de ' +
      'atendimento e o sistema de gestão são pagos direto aos fornecedores. A IA para as perguntas fora do menu é um ' +
      'adicional, orçado à parte.',
  },
];

export const chamadaFinal = {
  titulo: 'Vamos organizar o atendimento do seu escritório?',
  texto:
    'No diagnóstico gratuito, de 30 minutos, entendemos como o escritório atende hoje e mostramos como ficaria. Sem ' +
    'compromisso.',
};
