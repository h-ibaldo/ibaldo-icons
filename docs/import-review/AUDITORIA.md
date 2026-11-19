# O que ficou de fora da importação (auditoria de 18/11)

Ponto de partida: `ICONS-import/manifest.csv`, 3.293 pranchetas. A importação levou só as linhas com status `new`.

| Grupo | Qtd. | Situação |
|---|---:|---|
| `new` dos old sets | 2.442 | importados (121 do old-icon-set-2 entrando agora) |
| **`in-library-unmatched`** (marcados como "já importados", mas **não estão** na biblioteca) | **116** | **faltavam**. São os desenhos-base: setas e chevrons simples, balão vazio, bateria, livro, etiqueta, maleta, calendário, câmera, prancheta, cronômetro, ampulheta, arquivo. **Entraram em 18/11** (`metadata/naming/2026-11-18-import-unmatched.json`). Folha: [`unmatched-116.png`](unmatched-116.png) |
| `in-library` | 453 | conferido: todos apontam para um arquivo que existe na biblioteca |
| `duplicate` | 8 | cópias de outra página `new` do mesmo lote, que entrou |
| `empty` | 168 | pranchetas vazias |
| **`sketches-base` excluído** | **449** | **fica de fora (decisão do Henrique, 18/11)**. O arquivo inteiro ficou de fora na extração ("sketches, não é fonte"). 260 eram `new` e 189 `in-library-unmatched`. Comparando com a biblioteca de hoje: 35 muito parecidos (≥ 0,90), 63 parecidos (0,80–0,90) e **~355 sem par**: carrinho, bandeira, olho, power, câmera, megafone, banco, alinhamento, pinos de mapa, cestas, ingressos e mais. Folhas: [`sketches-base-excluded-1.png`](sketches-base-excluded-1.png), [`-2.png`](sketches-base-excluded-2.png) |
| `popular-01` excluído | 4 | estavam `new` (setas circulares cortadas, um sol). Primeiros 4 da folha acima |
| `popular-01` e `ui-application` excluídos | 688 | estavam `in-library` |

## Por que aconteceu

- **`in-library-unmatched`:** a marca de opacidade dizia "já importado", mas o comparador não achou o ícone. O REPORT pedia uma decisão sua sobre esse grupo, e eu não te mostrei. Sendo base de família, eram os mais usados.
- **`sketches-base`:** foi excluído na extração, porque o nome do arquivo diz "sketches". Pelas folhas, muitos são ícones prontos e de uso comum, não rascunhos.

## Lição para importações futuras

Antes de importar, mostrar a contagem de **todos** os status do manifest (não só `new`) e pedir decisão sobre cada grupo que não for claramente "está na biblioteca".

## old icon-set 6: desenho fora das pranchetas

Nesse arquivo só o primeiro ícone está numa prancheta. O resto (a família de arquivos em vários estilos, orelhas, globos…) está solto na tela, e por isso não aparece na parte PDF do `.ai`.
Extraí direto dos dados internos (`AIPrivateData`, zstd): 386 desenhos, 84 cópias internas e 1 já na biblioteca. **Restam 301**, sendo nomeados.
Nos outros arquivos, a extração completa acha principalmente pedaços soltos e ícones já presentes. Uma checagem fina (cruzando com as posições das pranchetas) ainda está pendente.

Palavras novas dos 116: setas pelo tamanho da ponta, (nenhuma)/`Narrow`/`Slim`; `Large` nas setas e chevrons em círculo maiores; `Open`/`In` nas setas para quadrado aberto; Battery `Boxy`; Clock `Top`; Video `Joined`.

## Desenho fora das pranchetas, em todos os arquivos (19/11)

Extraí todo o desenho dos 11 `.ai` (`scripts/ai-extract/extract_all.py`) e cruzei com as posições das pranchetas, que ficam nos dados internos do arquivo.

| Arquivo | Pranchetas | Desenhos fora | Fora e sem par na biblioteca | O que são |
|---|---:|---:|---:|---|
| old icon-set 6 | 1 | 392 | 341 | a família `File`, **já importada** (230 + 70 rascunhos fora) |
| **ui-application** | 21 | **~2.000** | **284** | a tela tem ~1.800 ícones soltos; ~1.540 já estão na biblioteca (é de onde vieram os grupos `application-1/2`). Os 284 restantes misturam variações reais (raios, acessibilidade com engrenagem, olhos, mãos, sinos, alarmes) com peças soltas. Folhas: [`ui-application-outside-1.png`](ui-application-outside-1.png), [`-2.png`](ui-application-outside-2.png) |
| media-control | 109 | 130 | 91 | peças de montagem (triângulos, barras, ondas de som) e rascunhos de arquivo |
| old-icon-set 1, 2, 4 e popular-01 | | 4 / 37 / 22 / 6 | 2 / 17 / 13 / 4 | variações de ícones já importados e peças. Folha (com o media-control): [`outside-artboards-small.png`](outside-artboards-small.png) |
| old-icon-set 5, messaging-bubbles | | 0 | 0 | — |
| sketches-base | 785 | 24 | 21 | fica de fora (decisão do Henrique) |

Conclusão: fora o old icon-set 6, só o **ui-application** tem desenho solto que poderia valer importar. **Decisão do Henrique (19/11): não precisa.** A importação dos .ai está encerrada.
