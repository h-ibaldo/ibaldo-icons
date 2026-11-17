# Importação: messaging-bubbles (balões de conversa)

**864 ícones importados** (865 novos no manifest; 1 fica de fora). Biblioteca: 2.545 → **3.409**.
Folhas com os nomes: [`messaging-bubbles-1.png`](messaging-bubbles-1.png) a [`-4.png`](messaging-bubbles-4.png).
Lote de nomes: `metadata/naming/2026-11-17-import-messaging-bubbles.json` (chave = página de origem).

## Como ficou

- Família `Chat` (524) e `ChatStack` para dois balões (336), mais 2 `UserChat…` e 3 `MonitorChat…` (famílias que já existiam).
- Cada formato de balão repete a mesma sequência de ~60 selos. O formato é a palavra de estilo no fim, igual em todos os ícones dele.

| Formato | Estilo |
|---|---|
| Oval com cauda enrolada | (nenhuma) |
| Quadrado arredondado, cauda no canto | `Boxy` |
| Retângulo com cauda em V centrada | `Tooltip` |
| Círculo com cauda de "pezinho" / com cauda pontuda | `Round` / `Sharp` |
| Retângulo com cauda inclinada / com cauda solta | `Slant` / `Broken` |
| Oval largo / balão de cauda longa / gota alta | `Wide` / `Pointed` / `Tall` |
| Cauda para a esquerda / retângulo achatado | `Side` / `Flat` |
| `ChatStack`: dois ovais (nenhuma), quadrado atrás completo, frente a frente, entalhe, cauda para cima, em escada | `Layered`, `Facing`, `Notch`, `Flipped`, `Staggered` |

`ChatStack` com o contorno de outro balão atrás reaproveita a palavra do balão da frente (`Broken`, `Boxy`, `Tooltip`, `Slant`).

- Selos do vocabulário (`Check`, `CheckDouble`, `Plus`, `X`, `Clock`, `Lock`, `Search`, `Alert`, `Warning`, `Heart`, `Edit`, `Ban`…) e os pedidos:
  `Typing` (três pontos), `Dots` (dois), `Image`, `Forward`, `Reply`, `ReplyAll`, `Video`, `Hash`, `Chart`, `Quote`, `Letters` (SOS), `LetterT`.
- Palavras novas: `Laugh`, `Sun`, `DotsVertical`, `DotsCursor`, `DotsUnderscore`, `Equals`, `List`, `TextOff`, `InfoItalic`, `Underline`, `Rays`, `Thought`.
- `Corner` só quando o mesmo selo aparece também dentro do balão em algum formato (ex.: `ChatCheckCorner` × `ChatCheck`).

## Para o Henrique olhar

- **`Settings` = porca sextavada, `Sun` = sol de 6 raios** (ex.: `ChatSettings`, `ChatSun`). Se o sol era a engrenagem, é só trocar.
- **`Underline`** (10 pares): balão com uma linha solta embaixo. Não sei o que significa; o nome descreve o desenho.
- Quase-duplicados com `2`: `ChatStackLetterTTooltip2` e `ChatStackLetterTSlant2` (o balão de trás virou uma linha).
- `QuestionAnswer` e `QuestionAnswerOverlap` da biblioteca parecem `ChatStack`/`ChatStackFacing`: podem virar aliases.

## Fora da importação

- **p0396** (`ChatClockTooltip2`, hold): está entre os `Broken`, mas tem a cauda em V dos `Tooltip` e é quase cópia de p0135 (`ChatClockTooltip`).
