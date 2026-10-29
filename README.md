# CORTE 14 — BARBER CLUB

Website conceitual criado para o portfólio da **Viham Dev**. Marca, equipe, preços, horários e estabelecimento fictícios. As imagens da versão atual são geradas por IA a partir de descrições textuais, sem fotografias externas como referência. Os retratos representam personagens fictícios. O fluxo de agendamento é uma simulação local: não envia dados, não gera reservas e não realiza cobranças.

## Executar

Requisitos: **Node.js 22.6+** e **pnpm 11.25+**.

```sh
pnpm install
pnpm dev
```

Abra `http://127.0.0.1:3000`. O comando prepara automaticamente as imagens responsivas antes de iniciar o Next.js.

```sh
pnpm typecheck
pnpm lint
pnpm test
pnpm build
pnpm start
```

`pnpm build` gera a exportação estática em `out/`. `pnpm start` serve essa pasta localmente. Nenhum servidor de aplicação ou banco de dados é necessário em produção.

## Arquitetura

- Next.js 16 com App Router, React 19, TypeScript e Tailwind CSS 4.
- `src/app`: estrutura semântica, metadados e tokens/estilos globais.
- `src/components/layout`: navbar, menu mobile em tela cheia e footer.
- `src/components/sections`: hero, introdução, serviços, casa, equipe, galeria, manifesto, agendamento e localização.
- `src/components/ui`: marca vetorial, imagens, links, faixa tipográfica, controle de diálogos, contexto de agendamento e animações.
- `src/lib/content.ts`: marca, serviços, preços, durações, profissionais, galeria, horários e links editáveis.
- `src/lib/booking.ts`: calendário e horários no fuso de São Paulo; domingos, datas passadas, limite de 60 dias e duração dos serviços.
- `tests/booking.test.mjs`: testes das regras de data e horários.

As seções de apresentação usam Server Components. Navbar, serviços, galeria, agendamento e movimento usam componentes client somente onde há interação.

## Identidade e movimento

Carvão `#111210`, papel `#F3F1E9` e lima `#D6DE55`. Barlow Condensed e Manrope são hospedadas localmente por `next/font/local`, com licenças em `public/fonts/`.

GSAP e ScrollTrigger coordenam o reveal da imagem e das linhas do hero, entradas por scroll, máscaras, parallax desktop e manifesto. CSS controla microinterações, navbar, diálogos, menu e marquee com pausa. `prefers-reduced-motion` desativa movimento; o conteúdo permanece acessível.

Galeria: seis imagens, contador, anterior/próximo, teclas de direção, Escape e gestos de toque. Diálogos nativos mantêm o foco dentro do modal e devolvem o foco ao fechar. O menu mobile fecha ao navegar ou usar Escape.

Agendamento: serviço → profissional → data → horário → resumo → conclusão da **simulação**. As escolhas podem ser alteradas e o serviço pode vir pré-selecionado da lista editorial.

## Alterar conteúdo e imagens

Edite dados compartilhados em `src/lib/content.ts`. Textos editoriais específicos ficam nos componentes das seções. Tokens, espaçamentos e breakpoints ficam em `src/app/globals.css`. Metadados ficam em `src/app/layout.tsx`.

Imagens conceituais: `public/images/*-concept.jpg`. Consulte **[IMAGE_CREDITS.md](IMAGE_CREDITS.md)** e o registro de prompts em `docs/image-generation-prompts.json` antes de substituir os arquivos. A versão atual não utiliza as fotografias do Pexels da primeira versão. Preserve os avisos de imagem gerada por IA e atualize também os textos alternativos ao substituir uma imagem.

```sh
pnpm images
node scripts/create-brand-assets.mjs
```

O primeiro comando gera WebP locais em cinco larguras, consumidos pelo loader do `next/image`. A geração também roda no build. O segundo recria as três versões SVG da marca em `public/logos/` e a capa Open Graph. O favicon fica em `public/icon.svg`; o logo da navbar em `src/components/ui/Logo.tsx`.

## Publicar na Vercel

Importe este repositório na Vercel com a pasta raiz do repositório como Root Directory. `vercel.json` já define Next.js, `pnpm install --frozen-lockfile` e `pnpm build`. Mantenha a pasta de saída no padrão da integração nativa do Next.js na Vercel; não sobrescreva Output Directory com `out`. A pasta `out/` continua disponível para prévia local ou outra hospedagem estática.

Se o domínio mudar, configure `NEXT_PUBLIC_SITE_URL` na Vercel e faça novo deploy para atualizar as URLs das imagens Open Graph. Nenhuma chave de API é necessária.

Também é possível publicar `out/` em qualquer hospedagem estática compatível. Não publique `.env`, `.vercel`, `node_modules`, `.next` ou credenciais.

## Verificação

O fluxo automatizado verifica tipos, lint, regras de agendamento e build estático. A revisão no navegador cobre hero desktop/mobile, menu, serviços, lightbox, foco, Escape, fluxo de simulação e larguras de 375 a 1920 pixels. Veja `QA.md` para os resultados registrados na entrega.

Projeto demonstrativo por [Viham Dev](https://vitorhamad.me).
