# smartadvtech.github.io

O site institucional e comercial da SmartADV (`smartadvtech.com.br`), em Astro, publicado pelo GitHub Pages. O
`README.md` diz onde mudar cada coisa e como o domínio aponta para o Pages.

@../smartadv/ARQUITETURA.md
@../smartadv/CONVENCOES.md
@../smartadv/ARMADILHAS.md

## Onde este repositório se encaixa

- **Não depende dos outros repositórios** e não toca na AWS: é só conteúdo estático.
- **O domínio é o mesmo dos webhooks e do e-mail.** O site usa o domínio raiz e o `www`. O `webhooks.` é da API do
  chatbot (`smartadv-infra`), e o MX, o SPF e o DKIM são do e-mail.
- **O contato vira lead no WhatsApp:** o número em `src/config.ts` é o do atendimento comercial da SmartADV, não o de
  um escritório cliente.

## Estrutura

| Pasta | O que tem |
|---|---|
| `src/data/site.ts` | os textos das seções da home |
| `src/data/atendimento.ts` | os textos da página do atendimento no WhatsApp (`/atendimento`), a página da campanha |
| `src/config.ts` | e-mail, WhatsApp, IDs dos parceiros de anúncio, dados da empresa e `indexar` |
| `src/components/` | uma seção por componente; `Rastreamento` (consentimento e parceiros), `ConsentBanner` e `WhatsAppButton`. As seções só da página do atendimento ficam em `src/components/atendimento/` |
| `src/pages/` | a página inicial, a do atendimento, a política de privacidade, a 404 e o `robots.txt` |
| `src/assets/` | os recortes do logo e as fotos da equipe |
| `public/videos/` | o vídeo da página do atendimento e o pôster dele; o preview do link da página é o `public/og-atendimento.png` |
| `scripts/recortar-logo.py` | gera os recortes, o favicon e o `og.png` a partir de `design/logo-original.jpeg` |

## Como trabalhar

- **Prévia:** `npm run build && npm run preview`, e capturas em 393 px (iPhone), 768 px (tablet) e 1440 px antes do
  PR.
- **Alinhamento:**
  - os títulos das seções e o texto do hero ficam centralizados no celular e no tablet, e à esquerda do desktop
    (`lg`) para cima. Seção nova usa o `Titulo.astro`, que já faz isso;
  - no celular (abaixo de `sm`), os botões do hero ficam empilhados, com a mesma largura, e a equipe numa coluna,
    centralizada;
  - a partir do tablet (`sm`), os botões ficam lado a lado, e a equipe em duas colunas (quatro no desktop), à esquerda;
  - listas e cartões de texto ficam à esquerda em qualquer largura.
- **Conferência:** Lighthouse com acessibilidade, boas práticas e SEO em 100, no site publicado. Na prévia local, o
  canonical aponta para o domínio.
- **Texto novo:** em português, no tom do resto do site, e só o que a SmartADV entrega hoje. A IA das perguntas fora
  do menu aparece só na página do atendimento, e sempre como adicional: fora dos planos e ligada só com a autorização
  do escritório.
- **Página de campanha** (como a `/atendimento`): `cabecalhoSimples` no `Base` (só o logo e o botão, sem o menu que leva
  para fora dela), a imagem de preview própria (`imagem`) e o `contato` da página: a mensagem, o assunto e o
  `rastrear`, o método do evento de lead, para o lead chegar dizendo de onde veio. Todo botão de contato usa esse
  mesmo `contato`.
- **Animação:** sem fade de opacidade em texto. O Lighthouse mede o contraste no meio da animação e reprova; esconda com
  `visibility` até a vez do elemento e respeite o `prefers-reduced-motion`.
- **Vídeo:** hospedado no `public/`, num `<video>` com `preload="none"`, nunca um player de terceiros (YouTube,
  Instagram), que carregaria antes do consentimento.

## Armadilhas deste repositório

- **O repositório é público.** Nada de segredo, dado de cliente ou trecho do diagnóstico de um escritório: o deck
  comercial de onde vieram os textos é confidencial, e só as partes genéricas entram aqui.
- **O logo só existe em JPEG, com fundo navy.** Os recortes têm o navy transparente e só servem sobre o navy exato
  (`#021033`, `bg-navy-950`). Num fundo claro, ou com transparência no fundo (o `bg-navy-950/95` do cabeçalho, por
  exemplo), reaparece o contorno. Não redesenhe o logo nem monte uma versão horizontal: o cabeçalho usa só o símbolo.
- **Nada de terceiros antes do consentimento:** as fontes são do próprio site (`@fontsource`). Um script de parceiro
  entra no `Rastreamento.astro`, nunca direto numa página.
- **Entrar no repositório já é publicar,** mesmo o que o site não mostra. Os números de resultado (os do Molina &
  Molina) só entram em `src/data/site.ts` depois de confirmados e com a autorização para citá-lo; sem eles, a seção
  não aparece.
- **O domínio fica nas configurações do Pages, não num arquivo:** com a publicação pelo Actions, o GitHub ignora o
  `public/CNAME`.
- **O merge feito pelo GitHub (botão ou `gh`) leva o e-mail da conta de quem mergeia,** a menos que ela tenha "Keep my
  email addresses private". Num repositório público, confira o autor depois do merge (`git log origin/main
  --format=%ae`). Os commits feitos na máquina usam o e-mail privado do GitHub (`git config user.email` deste
  repositório).
