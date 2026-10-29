# Verificação de entrega — CORTE 14

Revisão feita em 28 de outubro de 2026, no fuso de São Paulo.

## Comandos

- Build Next.js de produção: aprovado; página exportada estaticamente.
- TypeScript (`tsc --noEmit`): aprovado.
- ESLint: aprovado, sem erros ou avisos.
- Testes das regras de agendamento: 4 aprovados.

## Navegador

O build estático foi servido localmente para validar o comportamento de produção.

| Largura | Rolagem horizontal | Título do hero cortado | Imagens carregadas com erro |
| --- | --- | --- | --- |
| 375 px | Não | Não | Nenhuma |
| 390 px | Não | Não | Nenhuma |
| 430 px | Não | Não | Nenhuma |
| 768 px | Não | Não | Nenhuma |
| 1024 px | Não | Não | Nenhuma |
| 1440 px | Não | Não | Nenhuma |
| 1920 px | Não | Não | Nenhuma |

- Âncoras internas: todos os destinos existem.
- Menu mobile: abertura em tela cheia, navegação, fechamento por Escape, retorno do foco e liberação da rolagem aprovados.
- Serviços: expansão, troca da fotografia e abertura do agendamento com o serviço correto pré-selecionado aprovados.
- Agendamento: as cinco etapas foram percorridas em desktop e mobile. Alteração de horário a partir do resumo, preço correto e mensagem explícita de que nenhuma reserva foi realizada aprovados.
- Datas: domingo bloqueado no seletor e no campo de data. Testes cobrem passado, datas inválidas, limite de 60 dias, mudança de ano e fuso brasileiro.
- Horários: duração do serviço respeita o fechamento de dias úteis e sábados; horários já passados são excluídos.
- Lightbox: abertura, anterior/próximo por teclado, Escape, devolução de foco e desbloqueio da rolagem aprovados. Gestos de toque estão implementados; não foi usado dispositivo físico.
- Console da versão estática: nenhum erro ou aviso da implementação observado.
- Fontes e fotografias são servidas localmente. A imagem do hero usa uma variante WebP adequada à largura da tela.
- Preferência de movimento reduzido e cleanup das animações foram revisados no código; a preferência do sistema não foi alterada durante a revisão.

Os testes no navegador não substituem avaliação com leitor de tela ou teste em dispositivos físicos.

## Revisão do acervo — 29 de outubro de 2026

- As 11 imagens de conteúdo foram substituídas por imagens geradas por IA a partir de texto, sem fotos de referência. A capa Open Graph também foi recriada a partir do novo hero e recebeu uma URL diferente.
- Fotografias e WebP antigos foram retirados de `public/`. A exportação foi conferida: os caminhos antigos `images/hero.jpg` e `images/rafael.jpg` não estão no build.
- Proveniência conferida por SHA-256 para os 11 arquivos finais; prompts, arquivos de origem gerados e dimensões estão documentados em `docs/`.
- Equipe e galeria revisadas no navegador: avisos de personagens fictícios e imagens geradas por IA aparecem no conteúdo visível e nas descrições alternativas. O lightbox mantém a navegação por teclado e o fechamento por Escape.
- Build de produção e lint aprovados após a substituição.
- O histórico Git anterior e eventuais caches externos não foram apagados. Essa revisão trata dos arquivos ativos e da nova publicação.
