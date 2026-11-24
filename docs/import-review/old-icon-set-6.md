# Importação: old icon-set 6 (desenho fora das pranchetas)

**230 ícones importados** da grade principal. Biblioteca: 5.103 → **5.333**.
Folha com os nomes: [`old-icon-set-6.png`](old-icon-set-6.png). Lote: `metadata/naming/2026-11-18-import-old-icon-set-6.json`.

Nesse `.ai` só o primeiro ícone está numa prancheta, e o resto está solto na tela. Por isso a extração de 17/11 viu um ícone só.
Extraí o desenho dos dados internos do arquivo (ver `scripts/ai-extract/`).

## O que entrou

- **Família `File`, em 3 desenhos** com os mesmos ~66 selos: canto dobrado (nenhuma palavra, igual a `File`/`FileCode` da biblioteca), canto cortado `Cut` e retângulo `Plain`.
  Exemplo: `FilePlusCorner` / `FilePlusCornerCut` / `FilePlusCornerPlain`.
- Linha 5: `CropMarks…`, `ScanFile…`, `ScanGlobe`, `FileJoined…`, `TrayLines…`, `DownloadTrayStep`/`UploadTrayStep`, `Ear…` e `Globe…`.
- Linha 4: `SquareRounded` e `SquareLinesLeft`. Linha 6: `SquareEdit` + X/Check/Plus/Minus.

## Fora da importação

- **70 rascunhos** (a fileira apagada de arquivos com outro canto e os desenhos soltos na tela): ficaram de fora, por decisão do Henrique.
- `a-r01-c001` é o mesmo desenho do `File` que já tinha entrado.

## Para o Henrique olhar

- Se o desenho com canto dobrado deve ganhar uma palavra própria (ficou sem, como na biblioteca).
- `ScanFile` × `ScanFileLarge` (só muda o tamanho da folha), `UserDouble` (selo com duas pessoas) e `CropMarks` como família separada de `Crop`.
