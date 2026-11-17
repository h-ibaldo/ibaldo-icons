# Importação piloto: media-control (old icon-set 7)

**105 ícones novos** entraram na biblioteca, que passa de 2.440 para **2.545**.
Eles vêm das linhas `media-control` com status `new` do `ICONS-import/manifest.csv`.

- Folha de revisão com os nomes: [`media-control.png`](media-control.png)
- O site com a busca "volume" a 48px: [`media-control-site-volume.jpg`](media-control-site-volume.jpg)
- Os nomes ficam em `metadata/naming/2026-11-17-import-media-control.json`, e os SVGs limpos em `src/icons/raw/media-control/`.

## O que entrou

| Grupo | Qtd. | Exemplos |
|---|---:|---|
| Controles em círculo | 14 | `PauseCircle`, `SkipForwardCircle`, `EjectCircle` |
| Controles em quadrado | 16 | `PlaySquare`, `RecordSquare`, `StopSquare` |
| Controles soltos | 15 | `Play`, `Pause`, `Stop`, `FastForward`, `Rewind` |
| Soltos com barras grossas | 9 | `PauseThick`, `SkipBackThick`, `EjectThick` |
| Repetir e aleatório | 5 | `ArrowRepeatTall`, `ArrowRepeatOneCurved`, `ArrowShuffle` |
| Avançar/voltar segundos | 15 | `ArrowClockwiseTen`, `ArrowCounterclockwiseThirtyChevron`, `ArrowCounterclockwiseChevron` |
| Barras de nível | 2 | `SignalBars`, `SignalBarsSquare` |
| Microfone | 16 | `Microphone`, `MicrophoneOffBare`, `MicrophonePlayCircleGrille`, `MicrophoneBanBoxy` |
| Volume | 13 | `Volume`, `VolumeHigh`, `VolumeX`, `VolumeHighOffWide`, `VolumeTranslate` |

## Decisões de nome

- **Três estilos dos controles:** contêiner no fim (`PlayCircle`, `PlaySquare`) e o solto sem palavra (`Play`).
  O solto tem uma segunda versão, com as barras desenhadas como retângulos vazados (págs. 33–41). Ela ganhou a palavra de estilo `Thick`.
- **Pular e passo:** triângulo encostado na barra (▶|) é `SkipForward`. Barra antes do triângulo (|▶) é `StepForward`, como no Lucide.
  Dois triângulos com barra (▶▶|) é `SkipForwardDouble`.
- **Ejetar invertido** (barra em cima, triângulo para baixo) é `EjectDown`. O nome diz o que está desenhado. "insert" e "load" ficaram nas tags.
- **Gravar:** o círculo cortado é `RecordOff`. O círculo com um arco de som ao lado é `RecordRing`, porque `Ring` já é a palavra do guia para "linhas de som".
  O significado ("ao vivo") foi para as tags.
- **Setas circulares com número** (avançar/voltar 5, 10, 15 e 30 s) entraram na família que já existe, `ArrowClockwise`/`ArrowCounterclockwise`, com o dígito por extenso (`Five`, `Ten`, `Fifteen`, `Thirty`).
  Há duas bases. A com ponta em canto, igual à `ArrowClockwise` da biblioteca, não leva palavra. A com ponta em chevron saindo do círculo leva `Chevron`.
- **Repetir** entrou na família `ArrowRepeat`, que já existe. O retangular alto é `Tall` e o oval é `Curved`. O "1" desenhado é `One`.
- **Microfone:** quatro bases. A redonda com pé não leva palavra. A sem pé é `Bare`, a de estúdio com grade é `Grille` e a de cápsula quadrada é `Boxy`.
  Os selos são `Off`, `PlayCircle` (play dentro de um círculo) e `Ban`.
- **Volume:** os níveis seguem o número de arcos: `Low` (1), `Medium` (2) e `High` (3). A segunda base, com arco interno pequeno e externos mais largos, é `Wide`.
- Palavras novas foram registradas no `NAMING-GUIDE.md`: `Thick`, `Bare`/`Grille`/`Boxy` do microfone, `Tall`/`Curved`, `Chevron` e `Wide`, os dígitos e `Low`/`Medium`/`High`.

**Para o Henrique decidir:**
- `Low`/`Medium`/`High` descreve nível, não a marca desenhada. A outra opção seria contar os arcos (`VolumeOne`…), mas isso lê mal.
- Os dois nomes mais longos (`ArrowCounterclockwiseFifteenDoubleChevron`, 5 palavras) só existem porque o 15 tem ponta dupla. Daria para tirar `Chevron` deles.
- `SignalBars` (barras crescentes) estava no arquivo de mídia como nível de volume. Pelo desenho também é sinal de celular. Deixei `SignalBars`, com "volume" nas tags.

## Coisas estranhas

- **`PlayCircle` ficou de fora de propósito.** A página 1 é duplicata da `old-icon-set-1-p0127`, que vai entrar com o old-icon-set-1.
  Quando ela entrar, deve se chamar `PlayCircle`. O nome está livre.
- **Gravar em círculo e gravar solto já existem** com outros nomes: `CircleConcentric` (pág. 6) e `CheckboxCircleCompact` (pág. 47).
  Vale considerar dar a eles os aliases `RecordCircle`/`Record`, ou ícones próprios.
- **Família `Skip`:** já existe `Skip` (seta pulando sobre quadrados), então `SkipForward…` e `SkipBack…` aparecem junto dela no autocomplete. Não chega a ser problema.
- **Traço:** a arte original usa traço 2, e o site mostra com 1,5 por padrão. No traço 1,5, o triângulo de play pequeno dentro do microfone (págs. 89–92) fica com um furinho no meio.
  No traço 2 ele fica sólido. É só estético e não mexi.
- O resumo por arquivo no `REPORT.md` diz "99", e a tabela diz 105. A diferença são os 6 que eram duplicatas do sketches-base e viraram `new` quando esse arquivo foi excluído. Os 105 estão certos.

## Como foi feito (e o que automatizar para os outros ~2.440)

1. `node scripts/import-clean-svg.js <saída> --map map.json` **(novo)**. Ele achata o `transform="matrix(1,0,0,-1,…)"` do pdftocairo nas coordenadas, arredonda para 3 casas e escreve paths com `currentColor`, pontas e junções redondas e sem `stroke-width`.
   Ele recusa arquivos com preenchimento, opacidade, grupos ou máscaras, para que nada se perca em silêncio.
   Comparei a renderização de cada original com a do limpo (192px, traço 2): no máximo 2 pixels de antialias diferentes. O otimizador do `build:icons` não mudou nada.
2. Coloquei os arquivos em `src/icons/raw/<set>/` e rodei `npm run build:icons`.
3. `node scripts/apply-metadata.js <lote>.json --create` **(opção nova)**. Ela cria os JSON dos ícones novos, exige todos os campos e agora também confere os nomes contra os **aliases** da biblioteca.
4. `node scripts/generate-icons-index.js` e os builds do React e do Svelte. Depois, a checagem de que os nomes batem nos quatro lugares.

**Lições para os próximos conjuntos:**
- **O `build:icons` decide o que reprocessar pela data do arquivo** (SVG mais novo que o JSON). Num worktree ou checkout novo, isso pega 1.654 ícones antigos.
  Não estragou nada, porque o otimizador é idempotente, mas é lento e confuso. Vale trocar por "só o que não tem SVG em optimized/ ou mudou de conteúdo".
- **Marcar o que já está na biblioteca** (status `in-library`/`duplicate`) e tirar do lote antes de limpar. O manifest já faz isso bem.
- **Gerar o lote de nomes por templates de família.** Neste piloto, descrição, tags e rótulo saíram de uma tabela por família + selo + estilo. Para `Chat` (865 balões = ~6 bases × ~30 selos), isso é o que torna o trabalho viável.
  Os nomes em si precisam ser olhados, mas seguem o mesmo padrão. Proposta: um script `import-name-from-grid.js` que recebe "página → família, selo, contêiner, estilo" e monta o lote.
- **Revisar por bases:** em cada conjunto, primeiro identificar as bases (aqui: círculo/quadrado/solto/grosso, 4 microfones, 2 volumes) e as palavras de estilo, depois nomear em massa.
- **Folha de revisão:** o `contact-sheet.js --names` corta nomes com mais de ~35 letras na célula de 200px. Seria bom diminuir a fonte para nomes longos.
- **Grupos `old-icon-set-2` com traço 1,5:** usar os arquivos de `converted/`, não os de `exports/`.
