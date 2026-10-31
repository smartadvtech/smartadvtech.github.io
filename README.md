# Site da SmartADV

O site institucional e comercial da SmartADV (`smartadvtech.com.br`): a consultoria em gestão jurídica, os produtos de
tecnologia e a equipe. É um site estático em [Astro](https://astro.build), publicado pelo GitHub Pages.

O repositório é **público**, porque no GitHub Free o Pages só publica repositório público. Nada aqui é segredo: os
textos e as fotos são os do site, e os IDs do Google e da Meta também ficam visíveis no próprio site.

## Rodar na máquina

```bash
npm ci
npm run dev       # http://localhost:4321, com recarga automática
npm run build     # astro check e astro build, em dist/
npm run preview   # serve o dist/
```

Node 22 ou mais novo.

## Onde mudar cada coisa

| O quê | Onde |
|---|---|
| Textos das seções da home | `src/data/site.ts` |
| Textos da página do atendimento no WhatsApp (`/atendimento`) | `src/data/atendimento.ts`. A seção de prova aparece quando `prova` tiver os números; a do vídeo, enquanto `video` não for `null` |
| Vídeo da página do atendimento | `public/videos/atendimento.mp4` e o pôster `atendimento-poster.jpg` (720x1280, sem áudio), e a transcrição em `video.transcricao`, no `src/data/atendimento.ts` |
| Imagem de compartilhamento da página do atendimento | `public/og-atendimento.png` (1200x630) |
| Textos da página da consultoria (`/consultoria`) | `src/data/consultoria.ts`. As quatro fases, o prazo, o suporte e a equipe vêm do `src/data/site.ts`, os mesmos da home |
| E-mail, WhatsApp, IDs do Google e da Meta, razão social e CNPJ | `src/config.ts` |
| Fotos da equipe | `src/assets/equipe/<iniciais em minúsculas>.jpg` (`hc.jpg`, `jl.jpg`, `mm.jpg`, `pb.jpg`). Sem foto, aparece o monograma |
| Cores e fontes | `src/styles/global.css` |
| Logo, favicon e imagem de compartilhamento | `python3 scripts/recortar-logo.py`, a partir de `design/logo-original.jpeg` |

### Ligar o WhatsApp

Preencha `whatsapp.numero` em `src/config.ts`, só com dígitos, o 55 e o DDD. O botão flutuante aparece, e os botões
"Fale com a gente" passam a abrir o WhatsApp com a mensagem de `whatsapp.mensagem`. Vazio, o contato vai pelo e-mail.

### Ligar o Google Ads, o Google Analytics ou o Pixel da Meta

Preencha `rastreamento.googleTagId` (`AW-...` ou `G-...`) ou `rastreamento.metaPixelId` em `src/config.ts`. Com algum
ID:
- aparece o banner de cookies, e o rodapé ganha "Preferências de cookies";
- os scripts só carregam depois do "Aceitar" (LGPD);
- o clique nos botões de contato manda o evento de lead (`generate_lead` no Google, `Contact` na Meta).

Um parceiro novo entra em `carregar()`, no `src/components/Rastreamento.astro`, atrás do mesmo consentimento. A
política de privacidade (`src/pages/politica-de-privacidade.astro`) lista os parceiros ligados; um parceiro novo entra
nela também.

## Publicação

Cada push na `main` publica o site (`.github/workflows/publicacao.yml`). Em cada PR, o `build.yml` roda o build.

No repositório, Settings → Pages → Source tem que estar em "GitHub Actions".

### Domínio

O `smartadvtech.com.br` aponta para o GitHub Pages pelo DNS do Registro.br:

| Registro | Nome | Valor |
|---|---|---|
| A | `smartadvtech.com.br` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| AAAA (opcional, IPv6; hoje não configurado) | `smartadvtech.com.br` | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |
| CNAME | `www` | `smartadvtech.github.io.` |
| TXT | `_github-pages-challenge-smartadvtech` | o valor que o GitHub mostra em Settings → Pages → Verified domains, na organização |

**Não mexa** nos outros registros do domínio:
- o MX, o SPF e o `autodiscover`, do e-mail no Microsoft 365;
- os CNAMEs do DKIM do SES, dos avisos de cota;
- o `webhooks.`, da API do chatbot.

O domínio fica em Settings → Pages → Custom domain, com o "Enforce HTTPS" ligado: com a publicação pelo Actions, o
GitHub ignora um `public/CNAME`. O `www` e o `smartadvtech.github.io` redirecionam para o domínio raiz.

O TXT de verificação impede que outra conta do GitHub use o domínio no Pages dela, se um dia ele sair das
configurações deste repositório: o DNS continuaria apontando para o GitHub.

O `config.indexar` em `src/config.ts` libera os buscadores: o `robots.txt` passa a apontar o sitemap, e sai o
`noindex`.
