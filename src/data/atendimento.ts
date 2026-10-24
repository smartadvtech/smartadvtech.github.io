/**
 * Os textos da página do atendimento no WhatsApp (/atendimento), a página da campanha. Só o que a SmartADV entrega
 * hoje, sem o nome das ferramentas e sem a IA, que está desligada.
 */
import type { Resultados } from './site';

export const contato = {
  mensagem: 'Olá! Vi a página do atendimento no WhatsApp e quero um diagnóstico gratuito.',
  assunto: 'Diagnóstico do atendimento no WhatsApp',
};

export const hero = {
  eyebrow: 'Atendimento no WhatsApp para escritórios de advocacia',
  titulo: 'Tire o atendimento do seu WhatsApp pessoal.',
  texto:
    'Deixamos a área de atendimento do seu escritório pronta: o WhatsApp do escritório numa plataforma para a ' +
    'equipe, triagem automática, equipe treinada e um assistente que informa andamento, audiência e perícia ao ' +
    'cliente a qualquer hora, direto do sistema de gestão do escritório.',
  detalhe: 'A partir de R$ 290/mês · pronto em até 30 dias',
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

// O vídeo da campanha, que chega pronto e já com os dados ocultados: trocar é substituir os arquivos em public/videos/.
// null esconde a seção.
export const video: { src: string; poster: string; largura: number; altura: number } | null = {
  src: '/videos/atendimento.mp4',
  poster: '/videos/atendimento-poster.jpg',
  largura: 720,
  altura: 1280,
};

export const demonstracao = {
  titulo: 'Uma consulta real, num sábado à tarde',
  texto:
    'O cliente pediu o andamento do processo e recebeu a resposta em segundos, sem ninguém da equipe precisar parar o ' +
    'fim de semana. Os dados do escritório e do cliente foram ocultados.',
};

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
    titulo: 'Go-live acompanhado',
    texto: 'Validamos juntos o início da operação e ajustamos o que for preciso.',
  },
];

// A prova social: números medidos num escritório atendido pela SmartADV, sem o nome dele. O repositório é público, e
// entrar aqui já é publicar: os números só entram depois de aprovados. null esconde a seção.
export const prova: Resultados | null = null;

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
      'O texto das conversas não fica nos nossos registros, os dados ficam em São Paulo, e o contrato define o papel de ' +
      'cada um.',
  },
  {
    titulo: 'Sempre uma pessoa por perto',
    texto: 'O que o assistente não resolve vai para a equipe. O cliente nunca fica sem resposta.',
  },
];

export const planos = {
  itens: [
    { nome: 'Basic', preco: 290, cota: '2.000', publico: 'Para a maioria dos escritórios' },
    { nome: 'Pro', preco: 420, cota: '5.000', publico: 'Para escritórios com muitos clientes' },
  ],
  inclui: [
    'Consulta de andamento, audiência e perícia',
    'Relatório de uso todo mês',
    'Aviso de uso da cota por e-mail',
    'Sem cobrança por consulta',
  ],
  consulta: 'Consulta é cada pedido de andamento, audiência ou perícia que um cliente faz ao assistente.',
  nota:
    'A implantação é orçada no diagnóstico gratuito, conforme o tamanho do escritório. A plataforma de atendimento e o ' +
    'sistema de gestão são contratados em nome do escritório, direto com cada fornecedor.',
};

export const perguntas = [
  {
    pergunta: 'Meu cliente vai conversar com um robô?',
    resposta:
      'Só para o que um robô faz bem: informar o andamento, a data da audiência e a da perícia. Para todo o resto, e ' +
      'sempre que o assistente não encontra a informação, a conversa vai para uma pessoa da equipe.',
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
      'Até 30 dias depois da contratação das ferramentas: kickoff, configuração, treinamento e o go-live acompanhado.',
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
      'prazos de guarda e o aviso em caso de incidente.',
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
      'A mensalidade do atendimento automático é de R$ 290 (até 2.000 consultas por mês) ou R$ 420 (até 5.000). A ' +
      'implantação é orçada no diagnóstico, conforme o tamanho do escritório. A plataforma de atendimento e o sistema ' +
      'de gestão são pagos direto aos fornecedores.',
  },
];

export const chamadaFinal = {
  titulo: 'Vamos organizar o atendimento do seu escritório?',
  texto:
    'No diagnóstico gratuito, de 30 minutos, entendemos como o escritório atende hoje e mostramos como ficaria. Sem ' +
    'compromisso.',
};
