# Naming guide

How icons in Primor Icons get their names and metadata. Read this before naming
or renaming any icon, whether you are a person or Claude.

The files in `metadata/icons/*.json` are the **single source of truth**. The site,
the React package and the Svelte package all take the name from there.

## Workflow

1. Render the icons as contact sheets and look at them:
   ```bash
   node scripts/contact-sheet.js /tmp/sheets static/icons/optimized/<prefix>
   node scripts/contact-sheet.js /tmp/sheets --large <file.svg> ...   # zoom on details
   ```
2. Name from **what you see**, not from the filename. Filenames are a hint only.
3. Write the changes to a mapping file (see `metadata/naming/` for examples) and apply it:
   ```bash
   node scripts/apply-metadata.js metadata/naming/<batch>.json
   ```
   The script validates against `schemas/icon-metadata.schema.json`, checks that
   every name is unique, and updates `metadata/name-index.json`.
4. Review `git diff metadata/` before committing.

## Component names

The full rationale, with before/after tables, is in `NAMING-SYSTEM-PROPOSAL.md`.

### Structure

```
<Family> <Variant?> <Badge?> <Direction?> <Container?> <Position?> <Style?>
Cloud                Upload                                       Round   → CloudUploadRound
Bell                 X                    Circle                  Rim     → BellXCircleRim
Lock   Open          Check                           Corner       Narrow  → LockOpenCheckCornerNarrow
```

- PascalCase, must start with a letter, usually 1–4 words.
- **Family** = the drawn object, one noun, the word people search for. Always first, so
  related icons sort and autocomplete together (`Bell…`, `Cloud…`, `AvatarFace…`).
  Two-word families act as one prefix: `AvatarHead`, `AvatarFace`, `AddressBook`, `HardDrive`, `ProgressBar`, `ScreenShare`.
- **Variant** = which kind of that object: `ChartPie`, `LockOpen`, `HandPointer`.
- **Badge** = a small mark on the object. Name the **mark that is drawn**, never a guessed meaning
  (`X`, not `Close`/`Delete`; meanings go to tags).
- **Direction** after the thing that points: `CloudArrowUp`, `HandSwipeLeft`.
- **Container** right after the part it encloses: `BellSquare` (bell in a square), `BellXCircle` (only the X is circled).
  If the badge is itself round (clock), the circle is implied: `BellClock`.
- **Position** (`Corner` = outside at the corner, `Center` = centered inside) only when the family
  has the same badge in two places **and** the name would not be unique without it.
- **Style** = which base drawing, always **last**: `CloudUpload`, `CloudUploadTall`, `CloudUploadRound`.
- Name the object that is drawn, not the filename: `cart-line-square` is a chart (`ChartLineSquareWide`).
- Brand marks: describe the drawing (`WindowLetterX`, not `WindowExcel`).
- Never: Illustrator numbers (`Bell4`), `Alt`, `Second`, `New`, `Variant`, `Line`, `Outline`, `Icon`, gender or ethnicity.

### Vocabulary (use exactly these words)

- Badges: `Plus` (+), `Minus` (−), `X` (×), `Check` (✓), `CheckDouble` (✓✓), `Alert` (!), `Warning` (triangle with !),
  `Question`, `Info`, `Off` (slash through the object), `Ban` (circle with a slash), `Dot` (notification dot),
  `Ring` (sound lines), `Snooze` (z), `Lock`/`Unlock`, `Clock`, `Search` (magnifier), `Settings` (gear),
  `Edit` (pencil), `Eye`, `Sync` (two curved arrows), `Refresh` (one curved arrow), `Upload`/`Download`
  (arrow joined to the object), `Arrow` + direction (loose arrow), `Transfer` (two straight opposite arrows),
  `Link`, `Star`, `Heart`, `Mail`, `User`, `Shield`, `Bolt`, `Music`, `Dots`, `Dollar`, `Pin`, `Paperclip`,
  `Chat`, `Happy`/`Sad`/`Laugh`, `Typing` (three dots; two dots = `Dots`), `Reply`/`ReplyAll`/`Forward`, `Image`, `Video`, `Quote`, `Hash`, `Letters` (drawn text), `One`/`Two`/`Three`/`Five`/`Seven`/`Ten`/`Fifteen`/`Seventeen`/`Thirty`/`ThirtyOne` (drawn digits), `Percent`, `Translate` (文 glyph).
- Containers and shapes: `Circle`, `Square`, `Octagon`, `Hexagon`, `Triangle`, `Diamond`, `Pentagon`.
  Outline: `Dashed`, `Dotted`. Fill: `Striped`, `Dotted`, `Filled`.
- Directions: `Up`, `Down`, `Left`, `Right`, `UpDown`, `LeftRight`, `UpRight`, `UpLeft`, `DownRight`, `DownLeft`,
  `Clockwise`, `Counterclockwise`, `In`, `Out`.
- States: `Open`/`Closed` (only if the family has both), `On`, `Off`, `Empty`, `Half`, `Full`.
- Levels: `Low`/`Medium`/`High` (how many sound arcs are drawn: 1/2/3), e.g. `VolumeHigh`.
- Count: `Stack` (overlapping copies; never plural families), `Double` (two equal marks), `Two`/`Three` when count is the point.
- Size: `Small` · (none) · `Large`; `XS`/`XL` only for graded series. Proportion: `Wide`, `Tall`, `Narrow`.

### Synonyms → one family

| Old word | Family |
|---|---|
| lupe, search, zoom | `Search` |
| envelope, email | `Mail` |
| at-sign | `At` |
| bulb, idea | `Lightbulb` |
| lightning, energy | `Bolt` |
| application window, pop-up, window without address bar | `Window` |
| browser, website with address bar | `Browser` |
| speech bubble, message | `Chat` |
| graph | `Chart` / `ProgressBar` |
| switch (UI on/off) | `Toggle`; physical switch → `Switch` |
| hand-touch (hand drawn) | `Hand`; touch-screen (circles only) → `Touch` |
| bookmarks | `BookmarkStack` |
| 1-user-head / 1-user-person | `AvatarHead` / `AvatarFace` |
| language, translation | `Translate` |
| signal-cell-tower / wifi-hotspot / connect / screensharing | `Antenna` / `Hotspot` / `Nodes` / `ScreenShare` |
| piramid | `Pyramid` |
| agenda, contacts | `AddressBook` |

### Style series and near-duplicates

- **Style series** (the same ideas drawn on several base drawings, e.g. bell-1…6): the most neutral base gets
  no word; every other base gets **one descriptive style word, the same on every icon of that base**, at the end.
  Current series: Bell `Rim`/`Knob`/`Flat`/`Dash`/`Wide`; Cloud `Tall`/`Round`; Lock `Sharp`/`Narrow`/`Wide`/`Round`;
  At `Curved`/`Circle`/`Tall`/`Boxy`; Tab `Step`/`Sharp`/`Striped`; Window `Bare`/`Plain`; Chart bars `Thin`;
  media controls `Circle`/`Square` (container) and `Thick` (bars drawn as outlined thick bars);
  Microphone `Bare` (no foot)/`Grille`/`Boxy`; ArrowRepeat `Tall`/`Curved`; ArrowClockwise/Counterclockwise `Chevron`
  (chevron arrowhead leaving the circle); Volume `Wide` (small inner arc, wider outer arcs).
  Chat (bubble shape; the oval has no word) `Boxy`/`Tooltip`/`Round`/`Slant`/`Sharp`/`Broken`/`Wide`/`Pointed`/`Tall`/`Side`/`Flat`;
  ChatStack `Layered`/`Facing`/`Notch`/`Flipped`/`Staggered` (or the front bubble's word).
  Paperclip `Wide`/`Long`/`Short`/`Round`/`Vertical`/`Slim`/`Narrow`/`Flipped`/`Curl`/`Thin`; Alarm `Arc`/`Straight`/`Bare`;
  Stopwatch `Tick`/`Bare`/`Knob`/`Detached`; Hourglass `Curved`/`Diagonal` (`Stand` = with boards); ClosedCaption `Boxy`/`Barrel`/`Cushion`/`Bare`;
  Pointer (arrow without tail) `Straight`; Cursor `Ripple`/`RippleDouble` (click arcs) and `Stem`; Navigation `Sharp`/`Round`;
  Gauge frames `Square`/`Dashed`/`Open`/`Flat`/`Half`/`Semicircle`/`Split`/`ThreeQuarter`/`Arch`/`Curved`; SquareStack `Overlap`/`Shadow`;
  Calendar (no word = header line) `Plain`/`Slot`/`Bar`/`Flip`; Bluetooth `Narrow`; Tag `Round`/`Tilted`; Book `Block`; Notebook `Detached`;
  ClosedCaption `Wide`/`Compact`; List with dash bullets `Dash`; Trash `Bucket`;
  Link (11 bases, all named) `Slanted`/`Wide`/`Bracket`/`Round`/`Flat`/`Bar`/`Notched`/`Clip`/`Compact`/`Interlocked`/`Slim`, vertical `Vertical`/`Boxy`;
  Arrow parts `Uturn`, `Corner`, `Converge`/`Diverge`, `Orbit`, `Harpoon`, `Hook`, `FromDot`/`ToDot`/`FromBar`, `Joined`, `Segmented`, `Out`/`In` (through a gap);
  Medal `Strap`/`Banner`/`Hook`/`Folded`/`Stripe`;
  File (folded corner = no word) `Cut`/`Plain`; simple arrows by head size (none)/`Narrow`/`Slim`, larger circle arrows/chevrons `Large`;
  Clipboard lists with 2 rows `Short`; dashed rings `DashedHalf`/`DashedHalfSmall`/`DashedHalfSparse`/`DashedHalfLong`/`DashedLong`/`DashedQuarter`.
  Letters `B`, `C` only when no difference can be described (today only `Search`, `SearchB`, `SearchC`).
- **Near-duplicates** (same base, same badge, tiny drawing difference): name the difference when you can
  (`CloudDownloadLarge`). Only when you cannot, add a trailing `2`, `3`. The library keeps these (about 50).

### Renaming an existing icon

Put the old name in `aliases`. The React and Svelte packages export every alias as a deprecated
re-export of the new component, and the site search still finds the icon by its old name.
Aliases are removed in the next major version.

## People icons

- **Describe what is drawn, never gender or ethnicity.** Name hair, accessories,
  pose: `AvatarFaceLongWavy`, not `AvatarFaceWoman`. Hair texture words (`Curly`,
  `Textured`, `Braids`, `Afro`) are fine because they describe the drawing.
- `AvatarHead…` = head outline with no face details.
- `AvatarFace…` = head with eyes (and sometimes a smile).
- Avatars have `"featured": true`. Featured icons are shown first on the homepage
  (before the alphabetical list), with or without a category selected. Don't rely
  on the name for ordering; set `featured` instead. Use it sparingly.
- Hair vocabulary, use these exact words:
  `Long`, `Shoulder`, `Short`, `Bob`, `Bangs`, `CenterPart`, `SidePart`, `Swept`,
  `Wavy`, `Curly`, `Textured`, `Braids`, `Afro`, `Buns`, `TopKnot`, `Ponytail`,
  `Mohawk`, `Spiky`, `FlatTop`, `Bald`.

## Description

- One sentence, 10–200 characters, says what is **drawn**.
- Good: "Head outline with shoulder-length hair parted in the center."
- Bad: "A user person icon variant 19 representing identity." (says nothing; "variant" is noise)

## Tags

- 5–12 lowercase tags; single words or kebab-case (`space-buns`), no spaces.
- Include: what it is, what people search for (synonyms, use cases), visible details.
- Never: `variant`, numbers, `icon`, the library name.

## Categories

- 1–3 from the schema list. Pick the **most specific** first.
- Use `interface` only for generic UI controls (close, menu, chevrons, toggles).
  It is not a fallback. Today 94% of icons are tagged `interface`, which makes the
  filter useless; every renaming pass should fix this for the icons it touches.

## Accessibility

- `role`: `informative` by default; `interactive` for icons that are almost always
  buttons (close, menu, search); `decorative` only for ornaments.
- `suggestedLabel`: 1–4 words a screen reader should say: "User avatar", "Close".
