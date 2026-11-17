# Proposta: sistema de nomes para toda a Primor Icons

Status: **proposta**. Nada foi renomeado em `metadata/icons/`.
O mapeamento completo dos 2.441 ícones está em `metadata/naming/proposed-all.json`
e já passou no teste (`apply-metadata.js --dry-run`): todos os nomes são válidos e únicos.

---

## 1. O problema em números

| Medida | Hoje |
|---|---:|
| Ícones | 2.441 |
| Nomes com número (`Bell4`, `Cloud3UploadAlt2`) | **1.672 (68%)** |
| Nomes que terminam em número | 1.272 |
| Nomes com `Alt`, `Second`, `Third`, `New`, `Variant` | 65 |
| Primeiras palavras diferentes nos nomes | 179 |
| Palavras por nome de arquivo (média / máximo) | 4,7 / 12 |
| Ícones com a categoria `interface` | 2.212 (91%) |

Os números vêm do Illustrator: `bell-4`, `cloud-3`, `lock-2` são **desenhos-base diferentes**
do mesmo objeto, não versões. O nome de hoje copia o número e não diz o que muda.
O mesmo sinal também tem vários nomes: o "x" aparece como `X` (60 nomes),
`Close` (51), `Delete` (30) e `Remove` (26), e o "+" como `Plus` (45) e `Add` (37).

Exemplos de nomes ruins de hoje:

| Arquivo | Nome de hoje | Problema |
|---|---|---|
| `cloud-3-upload-2` | `Cloud3UploadAlt2` | "3" e "Alt2" não dizem nada |
| `cloud-1-network-2` | `CloudNetworkSecond` | "Second" não descreve o desenho |
| `table-and-graph` | `TechnicalSupportLaptopGear` | errado: é uma tabela com gráfico |
| `chart-line-increase-1` / `chart-line-volatile` | `ChartLineRising` / `ChartLineVolatile` | as duas linhas sobem; o nome não mostra a diferença |
| `cursor-7` | `Cursor79` | número sem sentido |
| `tab-2-...` (3 ícones) | `TabCheckmark`, `TabCheck`, `TabCheck2` | três posições do mesmo selo com nomes arbitrários |

## 2. Como a proposta foi feita

- **Todos os 2.441 ícones foram vistos** em folhas de contato (`scripts/contact-sheet.js`),
  divididos em 9 grupos de famílias, com zoom (`--large`) quando dois ícones eram parecidos.
- Cada grupo usou a mesma regra-rascunho. As regras abaixo são a versão final,
  corrigida com o que os grupos encontraram.
- Também olhei uma amostra dos ~2.800 ícones que esperam importação
  (`ICONS-import/sheets`: messaging-bubbles, media-control, old-icon-set-1, 2 e 4, sketches-base),
  para garantir que o vocabulário serve para eles (seção 10).

## 3. A regra: estrutura do nome

```
<Família> <Variante?> <Selo?> <Direção?> <Contêiner?> <Posição?> <Estilo?>
   Cloud              Upload                                     Round   → CloudUploadRound
   Bell               X                    Circle                Rim     → BellXCircleRim
   Chart   Line       Plus                 Circle                        → ChartLinePlusCircle
   Lock    Open       Check                          Corner      Narrow  → LockOpenCheckCornerNarrow
```

| Parte | O que é | Exemplos |
|---|---|---|
| **Família** | O objeto principal. Um substantivo, a palavra que as pessoas buscam. | `Cloud`, `Bell`, `Chart`, `Window`, `Hand`, `Lock` |
| **Variante** | Que tipo daquele objeto. | `ChartPie`, `LockOpen`, `HandPointer`, `FolderOpen` |
| **Selo** (badge) | Uma marca pequena colocada no objeto. Nomeie a **marca desenhada**, não um significado adivinhado. | `Plus`, `X`, `Check`, `Alert`, `Lock`, `Clock` |
| **Direção** | Para onde a seta aponta. Vem depois do que aponta. | `Up`, `Down`, `LeftRight`, `UpRight` |
| **Contêiner** | Uma forma que envolve algo. Vem **logo depois do que ela envolve**. | `BellSquare` (sino dentro do quadrado), `BellXCircle` (só o X dentro do círculo) |
| **Posição** | Onde o selo fica, só quando a família tem o mesmo selo em dois lugares. | `Corner`, `Center` |
| **Estilo** | Qual desenho-base, quando a mesma ideia existe em vários desenhos. Sempre **no fim**. | `Round`, `Tall`, `Sharp`, `Narrow` |

**Por que essa ordem?**
1. **Família primeiro:** o autocomplete agrupa tudo (`Cloud…`, `Bell…`), e a lista do site fica em ordem.
2. **Significado antes do estilo:** quem busca `CloudUpload` vê `CloudUpload`, `CloudUploadTall`
   e `CloudUploadRound` juntos. Se o estilo viesse antes (`CloudTallUpload`), as versões de upload ficariam espalhadas.
3. **Contêiner logo depois do que envolve:** é a única forma de diferenciar
   "sino dentro do círculo" (`BellCircle`) de "X dentro de um círculo no canto do sino" (`BellXCircle`).

**Regras de apoio**
- PascalCase, de 1 a 4 palavras na maioria dos casos (hoje: 92% têm até 4 palavras).
- **Nada de números do Illustrator.** Um número no fim só serve para quase-duplicatas (seção 5).
- Nunca use `Alt`, `Second`, `New`, `Line`, `Outline`, `Icon` ou `Variant`, nem gênero ou etnia.
- Uma palavra omitida é o **padrão**: o desenho-base mais comum não leva estilo, e o selo
  na posição mais comum não leva posição.
- Para marcas de produtos (Excel, Word, Internet Explorer), descreva o desenho: `WindowLetterX`, `WindowLetterE`.

## 4. Vocabulário controlado

### 4.1 Selos (marcas sobre o objeto)

| Palavra | Desenho | Substitui |
|---|---|---|
| `Plus` | + | add, positive, plus |
| `Minus` | − | remove, negative, minus, delete (quando é um traço) |
| `X` | × | close, clear, delete, remove, error |
| `Check` | ✓ | checked, verified, success |
| `CheckDouble` | ✓✓ | read, double-check |
| `Alert` | ! | exclamation, alert |
| `Warning` | triângulo com ! | warning |
| `Question` | ? | help, faq |
| `Info` | i | information |
| `Off` | barra cortando o **próprio objeto** | silent, disabled, bar, slash |
| `Ban` | **círculo com barra** (sinal de proibido) | forbidden, slash dentro de círculo |
| `Dot` | bolinha de notificação | red-dot |
| `Ring` | linhas de som | sounding |
| `Snooze` | z | z, sleep |
| `Lock` / `Unlock` | cadeado fechado / aberto | locked, unlocked |
| `Clock` | relógio | time, schedule |
| `Search` | lupa | lupe, magnifier, zoom |
| `Settings` | engrenagem | gear, cog |
| `Edit` | lápis | pencil, edit |
| `Eye` | olho | view, visibility, privacy |
| `Sync` | duas setas curvas | synchronize |
| `Refresh` | uma seta curva | reload, rescan |
| `Upload` / `Download` | seta subindo / descendo **ligada ao objeto** | send, receive |
| `Arrow` + direção | seta solta no canto | arrow-up, arrow-in |
| `Transfer` | duas setas retas opostas | transfer |
| `Link`, `Star`, `Heart`, `Mail`, `User`, `Shield`, `Bolt`, `Music`, `Dots`, `Dollar`, `Pin`, `Paperclip`, `Chat` | o objeto desenhado | envelope → `Mail`, lightning → `Bolt`, speech bubble → `Chat`, … |
| `Happy` / `Sad` | rostinhos | smile |
| `One`, `Two`, `Three` | algarismo desenhado como selo | number-one |

### 4.2 Contêineres e formas
`Circle`, `Square`, `Octagon`, `Hexagon`, `Triangle`, `Diamond`, `Pentagon`.
Contorno: `Dashed`, `Dotted`. Preenchimento: `Striped`, `Dotted`, `Filled`.

**Regra:** quando o selo já é redondo (relógio), o círculo fica implícito: `BellClock`, não `BellClockCircle`.

### 4.3 Direções
`Up`, `Down`, `Left`, `Right`, `UpDown`, `LeftRight`, `UpRight`, `UpLeft`, `DownRight`, `DownLeft`,
`Clockwise`, `Counterclockwise`, `In`, `Out` (para entrar/sair de algo, como em `DoorArrowIn`).

### 4.4 Estados
`Open`/`Closed` (só quando a família tem os dois), `Off`, `On`, `Empty`, `Half`, `Full`.

### 4.5 Quantidade
- `Stack`: cópias sobrepostas (`BookmarkStack`, `FolderStack`). Não use famílias no plural.
- `Double`: duas marcas iguais (`CheckDouble`, `CloudMusicDouble`).
- `Two`, `Three`, … só quando a quantidade é o assunto (`HandTapTwoFingers`).

### 4.6 Posição do selo
- **Padrão:** a posição mais comum na família, sem palavra.
- `Corner`: selo fora do objeto, no canto (muitas vezes cortando o contorno).
- `Center`: selo centralizado dentro do objeto.
- `<Selo>Circle`: o selo dentro de um pequeno círculo próprio.

Exemplo, nuvens: `CloudPlus` (+ dentro da nuvem) e `CloudPlusCorner` (+ fora, no canto).

### 4.7 Tamanho e proporção (uma escala só)
`Small` · (nada) · `Large`, e `XS` / `XL` só em séries de vários degraus.
Proporção: `Wide`, `Tall`, `Narrow`.

### 4.8 Famílias: sinônimos resolvidos

| Hoje (arquivo ou nome) | Família proposta |
|---|---|
| lupe, search, zoom | `Search` |
| envelope, email | `Mail` |
| at-sign | `At` |
| bulb, idea | `Lightbulb` |
| lightning, energy | `Bolt` |
| application-window, window, website sem barra de endereço, pop-up | `Window` |
| browser, website com barra de endereço | `Browser` |
| page-view (diagramas de layout) | `Layout` |
| graph, chart | `Chart` (barras de progresso: `ProgressBar`) |
| loading | `Spinner`, `ProgressBar`, `ProgressDots` |
| levels-adjust | `Adjust` (vários sliders) / `Slider` (um só) |
| switch (UI de liga/desliga) | `Toggle`; chave física: `Switch` |
| hand-touch (mão desenhada) | `Hand` (`HandSwipe…`, `HandTap…`) |
| touch-screen (só círculos, sem mão) | `Touch` |
| bookmarks | `BookmarkStack` |
| 1-user-head / 1-user-person | `AvatarHead` / `AvatarFace` (já aplicado em outro ramo) |
| language, translation | `Translate` |
| computer | `Monitor`; desktop → `Screen` |
| online-shop | `Store`, `LaptopBag`, `MobileCart`… (o objeto desenhado) |
| signal-cell-tower | `Antenna` |
| wifi-signal-hotspot | `Hotspot` |
| connect | `Nodes` |
| screensharing | `ScreenShare` |
| piramid | `Pyramid` |
| agenda, contacts | `AddressBook` |
| upvote | `Vote`; like/dislike → `HandThumbUp` / `HandThumbDown` |
| themes | `Swatch` |
| house | `House` (com a tag `home`) |

A proposta termina com **174 famílias** (hoje são 179 primeiras palavras, muitas delas sinônimas).
As maiores: Window 179, Cloud 153, Chart 106, Bell 93, Bookmark 79, Tab 77, Avatar 72, Arrow 65, At 64, Hand 63, Lock 55.

## 5. Quase-duplicatas (o fim de `Cloud3UploadAlt2`)

São dois casos diferentes, cada um com sua regra.

**A. Séries de estilo:** a mesma ideia desenhada sobre vários desenhos-base
(cloud-1/2/3, bell-1…6, lock-1…5, at-sign-1…5, tab-1…4).
1. O desenho-base mais neutro não leva palavra.
2. Cada outro base ganha **uma palavra de estilo que descreve o desenho**, sempre a mesma, no fim do nome.
3. Só se não houver diferença descritível, use as letras `B`, `C` (isso aconteceu numa única série, a das lupas).

Séries encontradas (cerca de 60 no total). Algumas:

| Família | Bases e palavra de estilo |
|---|---|
| Bell | bell-2 (nenhuma) · bell-1 `Rim` (aba larga) · bell-3 `Knob` (bolinha no topo) · bell-4 `Flat` (base reta, haste) · bell-5 `Dash` (badalo em traço) · bell-6 `Wide` (mais largo) |
| Cloud | cloud-1 (nenhuma) · cloud-2 `Tall` (bolha central alta) · cloud-3 `Round` (bolhas simétricas) |
| Lock | (nenhuma) · `Sharp` · `Narrow` · `Wide` · `Round` |
| At | (nenhuma) · `Curved` · `Circle` · `Tall` · `Boxy` |
| Tab | tab-1 (nenhuma) · tab-2 `Step` · tab-3 `Sharp` · tab-4 `Striped` |
| Window | (nenhuma) · `Bare` (sem linha de título) · `Plain` (sem os três pontos) |
| Chart (barras) | caixas (nenhuma) · `Thin` (barras de um traço só) |
| Search | (nenhuma) · `B` · `C` (só muda a proporção lente/cabo) |

**B. Quase-duplicatas de verdade:** mesmo base, mesmo selo, diferença mínima de desenho
(ex.: `chart-pie-pizza-1/2`, onde só uma fatia muda).
1. Se a diferença puder ser descrita, ela vira o nome: `CloudDownload` / `CloudDownloadLarge`, `ChartLineCircle` / `ChartLineWideCircle`.
2. Se não puder, o segundo ganha `2` (e `3`). **Ficaram só 50 nomes assim** (eram 1.672 com número).
3. Esses 50 são candidatos a **remover ou fundir**. A lista sai com:
   `node -e 'const b=require("./metadata/naming/proposed-all.json");for(const[f,v]of Object.entries(b))if(/\d/.test(v.name))console.log(f,v.name)'`

Os grupos também acharam cerca de 110 pares parecidos. A maioria ganhou um nome que descreve a diferença.
Uma duplicata é exata: `user-head-36` é igual a `1-user-head-36`.

## 6. Famílias, prefixos e autocomplete

- A família é sempre a **primeira palavra**. Por isso `Bell…`, `Cloud…`, `AvatarFace…` aparecem juntos no autocomplete e na lista.
- Quando a família precisa de duas palavras (`AvatarHead`, `AvatarFace`, `HardDrive`, `AddressBook`, `ScreenShare`, `ProgressBar`), elas funcionam como um prefixo só.
- Um ícone entra na família do **objeto desenhado**, não do nome do arquivo.
  Exemplo: `cart-line-square` é um gráfico, então vira `ChartLineSquareWide`;
  `save-search-list-favorite-star` é uma lista, então vira `ListStar`.
- Objeto com selo de outro objeto: a família é o objeto **maior** (`CloudLock`, não `LockCloud`).

## 7. Categorias, tags e `featured`

- **Categoria vem da família.** Uma tabela família → categoria (ex.: `Cloud` → `devices`/`files`,
  `Bell` → `communication`, `Chart` → `business`, `Hand`/`Touch` → `gestures`, `Avatar` → `people`)
  corrige o problema de 91% dos ícones estarem em `interface`. `interface` fica só para controles
  genéricos (`X`, `Menu`, `Toggle`, `Checkbox`, `Arrow`).
- **Tags carregam o significado, o nome carrega o desenho.** O nome diz `X`; as tags dizem
  `close`, `delete`, `remove`, `error`. Os sinônimos que saem do nome (alarm, notification, lupe, envelope) **viram tags**, e a busca continua achando.
- **`featured`:** é independente do nome. A outra sessão marcou os avatares `AvatarHead*`/`AvatarFace*`
  com `featured: true`. Esta proposta usa exatamente esses nomes para os 71 avatares, e o batch
  não toca no campo `featured`. O mesmo vale depois para o ícone "principal" de cada família:
  o base sem estilo (`Bell`, `Cloud`, `Lock`) é o candidato natural a `featured`.

## 8. Comparação com outras bibliotecas

| Biblioteca | Como faz | O que adotamos / evitamos |
|---|---|---|
| **Lucide** | Objeto + marca desenhada: `BellOff`, `BellRing`, `CloudUpload`, `FileX`. | Adotamos "nomear a marca" (`X`, `Plus`, `Off`, `Ring`). |
| **Phosphor** | Um nome por ideia; o estilo (thin, bold, fill) é uma prop, não um nome. | Nossas séries de estilo são desenhos diferentes, não pesos. Por isso o estilo vai no nome, mas no fim, como um sufixo. |
| **Material Symbols** | `snake_case`, ação primeiro às vezes (`add_circle`, `cloud_upload`); estilo em fontes separadas. | Evitamos começar pela ação: `PlusCircle` sim, mas `CloudPlus` em vez de `AddCloud`. |
| **Heroicons** | Poucos ícones, nomes curtos com contêiner no fim (`ArrowUpCircle`). | Mesma ordem: contêiner depois do que ele envolve. |

A Primor tem uma situação que nenhuma dessas tem: **várias versões desenhadas do mesmo objeto**
(6 sinos, 5 cadeados). Por isso precisamos da palavra de estilo no fim, e não de números.

## 9. Antes e depois (12 famílias)

**Cloud** (153; 3 bases: nenhuma / `Tall` / `Round`)
| Arquivo | Hoje | Proposto |
|---|---|---|
| `cloud-3-upload-2` | `Cloud3UploadAlt2` | `CloudUploadRound` |
| `cloud-1-upload-2` | `CloudUpload2` | `CloudUploadLarge` |
| `cloud-1-exclamation` | `CloudAlert2` | `CloudAlert` |
| `cloud-1-positive` | `CloudAdd2` | `CloudPlusCorner` |
| `cloud-1-network-2` | `CloudNetworkSecond` | `CloudNetworkDots` |
| `cloud-2-link-B` | `Cloud2LinkB` | `CloudLinkDiagonalTall` |
| `cloud-3-slash-1` | `Cloud3Slash` | `CloudBanRound` |
| `cloud-2-box-transmission` | `Cloud2Transmission` | `CloudSquareSignalTall` |

**Bell** (93; 6 bases)
| Arquivo | Hoje | Proposto |
|---|---|---|
| `bell-4-…-z-` | `Bell4Z` | `BellSnoozeFlat` |
| `bell-2-…-octagon-silent-off-disable-bar` | `Bell2OctagonSilent` | `BellOctagonOff` |
| `bell-5-…-sounding-1` | `Bell5Sounding1` | `BellRingLinesDash` |
| `bell-1-…-x-close-delete-remove-circle` | `Bell1XCircle` | `BellXCircleRim` |
| `bell-6-…-red-dot` | `Bell6Dot` | `BellDotWide` |
| `bell-2-…-alert-check-checked` | `Bell2Check` | `BellCheck` |

**Application → Window** (136)
| Arquivo | Hoje | Proposto |
|---|---|---|
| `application-window-1-1` | `ApplicationWindow1` | `Window` |
| `application-window-1-5` | `ApplicationWindow5` | `WindowTwoDots` |
| `application-window-1-bulb-idea-2` | `ApplicationWindow1Bulb2` | `WindowLightbulb` |
| `application-window-1-energy-lightning-1` | `ApplicationWindow1Lightning1` | `WindowBoltCenter` |
| `application-window-1-gear-settings-2` | `ApplicationWindow1Settings4` | `WindowSettings` |
| `application-window-1-key-password-protected-5` | `ApplicationWindow1Key5` | `WindowPassword` |

**Chart** (104)
| Arquivo | Hoje | Proposto |
|---|---|---|
| `chart-arrow-up-rectangle-check-checked` | `ChartArrowUpRectangleCheck` | `ChartTrendUpSquareCheck` |
| `chart-doughnut-storage-filled-stripes` | `ChartDoughnutStorageStripes` | `ChartDonutStriped` |
| `chart-horizontal-bars-4` | `ChartHorizontalBars4` | `ChartBarHorizontalPeakAxis` |
| `chart-line-circle-3` | `ChartLineCircle3` | `ChartLinePeakCircle` |
| `chart-vertical-columns-5` | `ChartVerticalColumns5` | `ChartBar` |
| `table-and-graph` | `TechnicalSupportLaptopGear` | `TableChartLine` |

**Hand** (55)
| Arquivo | Hoje | Proposto |
|---|---|---|
| `hand-cursor-pointer` | `HandCursor` | `HandPointer` |
| `hand-gear-services-1` | `HandGear1` | `HandSettings` |
| `hand-touch-one-finger-tap-single-tap-` | `HandTouchTap2` | `HandTap` |
| `hand-touch-one-finger-directional-arrows-move` | `HandTouchOneFingerMove` | `HandMove` |
| `hand-touch-four-fingers-swipe-down-arrow-down` | `HandTouchFourFingersSwipeDown` | `HandSwipeDownFourFingers` |

**At** (64)
| Arquivo | Hoje | Proposto |
|---|---|---|
| `at-sign-6-email-contact-address` | `AtSign6` | `AtRounded` |
| `at-sign-…-1-x-close-delete-remove` | `AtSign1X` | `AtXCurved` |
| `at-sign-…-2-arrow-reload-refresh-synchronize` | `AtSign2ArrowSync` | `AtSync` |
| `at-sign-…-3-circle-dots-settings-menu` | `AtSign3CircleDotsMenu` | `AtDotsCircle` |

**Lock** (55)
| Arquivo | Hoje | Proposto |
|---|---|---|
| `lock-3-locked` | `Lock3Locked` | `LockNarrow` |
| `lock-2-check-checked-2` | `Lock2Check2` | `LockCheckCorner` |
| `lock-1-unlocked-open` | `LockUnlockedOpen` | `LockOpenSharp` |
| `lock-2-password-dots-1` | `LockPassword` | `LockDots` |

**Tab** (74)
| Arquivo | Hoje | Proposto |
|---|---|---|
| `tab-1-x-clear-close-delete-remove-2` | `TabClose` | `TabX` |
| `tab-1-negative-remove-minus-delete-circle-2` | `TabRemoveCircle2` | `TabMinus` |
| `tab-2-negative-remove-minus-delete` | `TabDelete` | `TabMinusCenterStep` |
| `tab-2-arrow-x-close-remove-right-tab-` | `TabCloseRight2` | `TabArrowRightXStep` |

**Bookmark** (79)
| Arquivo | Hoje | Proposto |
|---|---|---|
| `bookmark-1-circle-x` | `BookmarkCircleClose` | `BookmarkXCircle` |
| `bookmark-1-folded-minus` | `Bookmark1FoldedRemove` | `BookmarkMinusRolled` |
| `bookmark-1-circle-large-plus` | `BookmarkCircleLargeAdd` | `BookmarkPlusCircleLarge` |

**Lupe → Search** (38)
| Arquivo | Hoje | Proposto |
|---|---|---|
| `lupe-search-1-zoom-out-negative-remove-minus-delete` | `LupeZoomOut` | `SearchMinus` |
| `lupe-search-arrows-find-and-replace-3` | `LupeSearchReplace3` | `SearchSync` |
| `lupe-search-in-list-3` | `LupeSearchInList3` | `ListSearch` |
| `lupe-zoom-1-actual-size-one-to-one` | `LupeZoomActual` | `SearchOneToOne` |

**Folder** (34)
| Arquivo | Hoje | Proposto |
|---|---|---|
| `folder-5` | `Folder5` | `FolderStack` |
| `folder-17` | `Folder17` | `FolderOpen` |
| `folder-negative-2` | `FolderNegative2` | `FolderMinusCenter` |

**Switch → Toggle / Switch** (34)
| Arquivo | Hoje | Proposto |
|---|---|---|
| `switch-toggle-button-1-off` | `SwitchToggleButtonOff` | `ToggleOff` |
| `switch-toggle-two-buttons-on-and-off` | `SwitchToggleOnOff` | `ToggleMultiple` |
| `switch-button-off-1` | `SwitchButtonOff` | `SwitchRockerOff` |

## 10. Os ~2.800 ícones novos (ICONS-import)

Amostra vista: messaging-bubbles, media-control, old-icon-set-1, old-icon-set-2, old-icon-set-4 e sketches-base.
**As regras servem.** Esses ícones repetem o mesmo padrão: objeto + selo + contêiner + base.
Eles acrescentam:

| Novo | Como nomear |
|---|---|
| ~865 balões de conversa (messaging-bubbles) | Família `Chat`. Bases: redondo (nenhuma) e quadrado (`Square` como estilo, ou `Sharp`; decidir). Dois balões: `ChatStack`. Selos novos: `CheckDouble` (lido), `Reply`, `ReplyAll`, `Forward`, `Video`, `Image`, `Quote`, `Typing` (três pontos). Texto desenhado (SOS): `ChatLetters`. |
| Controles de mídia (media-control) | Famílias `Play`, `Pause`, `Stop`, `Record`, `SkipForward`/`SkipBack`, `FastForward`, `Rewind`, `Eject`, `StepForward`/`StepBack`; contêineres `Circle`/`Square`. |
| Setas simples (old-icon-set-1) | `Arrow` + direção + contêiner: `ArrowUpCircle`, `ArrowUpCircleDashed`, `ArrowLeftCircleOpen`. **Hoje a biblioteca não tem setas simples**, então `ArrowUp`, `ArrowDown`… ficam livres para elas. |
| Clipes, prédios, código, câmeras, bandeiras, pinos de mapa | Famílias `Paperclip`, `Building`, `Code` (chaves `{ }`), `Camera`, `Flag`, `MapPin`, `Megaphone`. |
| Alinhamento e redimensionar | `Align` + direção (`AlignTop`, `AlignCenterVertical`), `Maximize`/`Minimize`. |
| Lixeiras-balde (old-icon-set-2) | Novo base de `Trash` → palavra de estilo `Bucket`. |

Cuidado ao importar: um ícone novo deve seguir a mesma série de estilo do seu base.
Se for um base novo, ele ganha uma palavra de estilo nova, e essa palavra deve ser
registrada no `NAMING-GUIDE.md`.

## 11. Quantos nomes mudam

| | Ícones |
|---|---:|
| Mudam de nome | **2.367 (97%)**, incluindo os 72 avatares (`UserHead*` → `AvatarHead*`, já aplicado no outro ramo) |
| Já estão como o proposto | 74 (ex.: `Cloud`, `ClockCheck`, `Folder`, `LockKeyhole`) |
| Nomes com número depois da mudança | 50 (eram 1.672) |
| Nomes com 1–4 palavras | 2.301 (94%) |
| Nomes com 5+ palavras | 140 (a revisar; ex.: `LockOpenCheckCornerNarrow`) |

Mudar 97% dos nomes **quebra o código de quem já usa os pacotes**. Por isso o plano de migração abaixo prevê apelidos (aliases).

## 12. Decisões em aberto (para o Henrique escolher)

1. **Marca ou significado?** A proposta usa a marca desenhada (`X`, `Plus`, `Minus`).
   A alternativa é usar o significado (`Close`, `Add`, `Remove`), como o `NAMING-GUIDE.md` diz hoje.
   *Recomendo a marca:* o mesmo X quer dizer fechar, apagar ou erro, e o significado vai para as tags.
2. **Estilo no fim ou logo depois da família?** `CloudUploadRound` (recomendado, agrupa por significado)
   ou `CloudRoundUpload` (agrupa por desenho).
3. **Letras B/C nas lupas.** Ficam `SearchB`/`SearchC`, ou escolhemos um base e removemos os outros?
4. **Os 50 nomes com `2`/`3`:** manter, ou remover os ícones repetidos da biblioteca?
5. **Avatar vs User:** `user-head-36` duplica `1-user-head-36`. Remover?
6. **Nomes com 5 ou mais palavras (140):** aceitar, ou cortar a palavra de posição (`Corner`/`Center`)
   quando ela não for necessária para diferenciar?
7. **`Window` tem 179 ícones.** Aceitar uma família grande, ou separar `WindowDots` (com os três pontos) como família própria?
8. **Balões de conversa:** a família é `Chat` (recomendado), `Message` (Lucide) ou `Bubble`?
9. **Aliases:** manter os nomes antigos como apelidos por uma versão major (recomendado) ou quebrar de uma vez?

## 13. Plano de migração

1. **Aprovar as regras.** Depois que as decisões da seção 12 forem tomadas, atualizar o `NAMING-GUIDE.md` com as seções 3–7.
2. **Revisar o mapeamento** em `metadata/naming/proposed-all.json`. Ele tem o mesmo formato dos outros batches
   (`arquivo → { name, displayName }`). Para revisar com os desenhos:
   ```bash
   node scripts/contact-sheet.js /tmp/sheets --names static/icons/optimized/cloud
   ```
   (depois de aplicar um batch, `--names` mostra o nome novo sob cada ícone).
3. **Aplicar em lotes por família**, e não tudo de uma vez, para revisar o `git diff` com calma:
   ```bash
   # gerar um batch só com Cloud e Bell a partir do proposto
   node -e 'const b=require("./metadata/naming/proposed-all.json");const o={};for(const[f,v]of Object.entries(b))if(/^(cloud|bell)-/.test(f))o[f]=v;require("fs").writeFileSync("metadata/naming/2026-11-xx-cloud-bell.json",JSON.stringify(o,null,2))'
   node scripts/apply-metadata.js metadata/naming/2026-11-xx-cloud-bell.json --dry-run
   node scripts/apply-metadata.js metadata/naming/2026-11-xx-cloud-bell.json
   ```
   Ordem sugerida: Avatar (já feito) → Cloud, Bell → Window, Browser → Chart, Tab → o resto.
   Em cada lote, completar também `description`, `tags` (com os sinônimos antigos) e `categories` (seção 7).
4. **Aliases (apelidos):** gravar o nome antigo no campo `aliases` que já existe no schema,
   e fazer os pacotes React e Svelte exportarem também o nome antigo, marcado como `@deprecated`.
   Isso exige uma pequena mudança em `scripts/utils/icon-names.cjs` e nos scripts dos pacotes.
   Remover os aliases na versão major seguinte.
5. **Publicar como versão major**, com uma tabela de nomes antigo → novo no `CHANGELOG.md`.
6. **Remover duplicatas** (seção 12, itens 4 e 5) usando `deprecated: true` + `replacedBy`, que já existem no schema.
7. **Importação dos ~2.800 novos:** nomear com estas regras desde o começo (seção 10).
