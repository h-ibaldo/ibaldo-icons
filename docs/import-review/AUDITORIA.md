# O que ficou de fora da importação (auditoria de 18/11)

Ponto de partida: `ICONS-import/manifest.csv`, 3.293 pranchetas. A importação levou só as linhas com status `new`.

| Grupo | Qtd. | Situação |
|---|---:|---|
| `new` dos old sets | 2.442 | importados (121 do old-icon-set-2 entrando agora) |
| **`in-library-unmatched`** (marcados como "já importados", mas **não estão** na biblioteca) | **116** | **faltavam**. São os desenhos-base: setas e chevrons simples, balão vazio, bateria, livro, etiqueta, maleta, calendário, câmera, prancheta, cronômetro, ampulheta, arquivo. Entrando agora. Folha: [`unmatched-116.png`](unmatched-116.png) |
| `in-library` | 453 | conferido: todos apontam para um arquivo que existe na biblioteca |
| `duplicate` | 8 | cópias de outra página `new` do mesmo lote, que entrou |
| `empty` | 168 | pranchetas vazias |
| **`sketches-base` excluído** | **449** | **o arquivo inteiro ficou de fora** na extração ("sketches, não é fonte"). 260 eram `new` e 189 `in-library-unmatched`. Comparando com a biblioteca de hoje: 35 muito parecidos (≥ 0,90), 63 parecidos (0,80–0,90) e **~355 sem par**: carrinho, bandeira, olho, power, câmera, megafone, banco, alinhamento, pinos de mapa, cestas, ingressos e mais. Folhas: [`sketches-base-excluded-1.png`](sketches-base-excluded-1.png), [`-2.png`](sketches-base-excluded-2.png) |
| `popular-01` excluído | 4 | estavam `new` (setas circulares cortadas, um sol). Primeiros 4 da folha acima |
| `popular-01` e `ui-application` excluídos | 688 | estavam `in-library` |

## Por que aconteceu

- **`in-library-unmatched`:** a marca de opacidade dizia "já importado", mas o comparador não achou o ícone. O REPORT pedia uma decisão sua sobre esse grupo, e eu não te mostrei. Sendo base de família, eram os mais usados.
- **`sketches-base`:** foi excluído na extração, porque o nome do arquivo diz "sketches". Pelas folhas, muitos são ícones prontos e de uso comum, não rascunhos.

## Lição para importações futuras

Antes de importar, mostrar a contagem de **todos** os status do manifest (não só `new`) e pedir decisão sobre cada grupo que não for claramente "está na biblioteca".
