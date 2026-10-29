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
