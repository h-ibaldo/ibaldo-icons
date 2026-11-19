# Extracting art that sits outside artboards in an .ai file

`old icon-set 6.ai` keeps only its first icon on an artboard; the rest is loose
on the canvas, so it is missing from the file's PDF part (what pdftocairo sees).
The full art is in Illustrator's private data. To get it (on a copy of the file):

1. Read the `AIPrivateData1..N` streams of the first page's `/PieceInfo/Illustrator/Private`
   (pypdf), concatenate them, drop the 20-byte `%AI24_ZStandard_Data` header and
   decompress with `zstd -d`. Convert `\r` to `\n` → `p.txt` (AI text format).
2. `python3 parse.py` reads the main layer's stroked paths (m/l/c/v/y, S/s) and clusters them.
3. `python3 cells.py` cuts them into 24×24 frames on the artboard grid (44 pt pitch
   for that file; edit `blocks` for another file) and writes library-format SVGs.

Then name and import as usual (`check-naming-batch.js`, `import-apply-batch.js`).
