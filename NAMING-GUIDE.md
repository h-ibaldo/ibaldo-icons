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

- PascalCase, 2–4 words, must start with a letter: `UserFaceCurlyBob`, not `1UserHead12`.
- **Family first, then the difference.** Icons that belong together share a prefix,
  so they sort together and autocomplete together: `UserHead…`, `UserFace…`.
- Name the **visible difference**, never a number. `UserHeadSpaceBuns` beats `UserHead24`.
- Use a trailing number only when two icons are truly the same idea with a tiny
  drawing difference no one would describe in words: `UserHeadShoulderCenterPart2`.
- One word per synonym group:
  - add / plus / positive → `Add`
  - remove / delete / minus / negative → `Remove`
  - close / x → `Close`
  - check / checked / checkmark → `Check`
  - notification / alarm / alert → `Alert` (use `Bell` when a bell is drawn)
- Common UI words over clever ones: `Close` not `Dismiss`, `Settings` not `Preferences`.
- No style words that apply to the whole library (`Line`, `Outline`, `Icon`).

## People icons

- **Describe what is drawn, never gender or ethnicity.** Name hair, accessories,
  pose: `UserFaceLongWavy`, not `UserFaceWoman`. Hair texture words (`Curly`,
  `Textured`, `Braids`, `Afro`) are fine because they describe the drawing.
- `UserHead…` = head outline with no face details.
- `UserFace…` = head with eyes (and sometimes a smile).
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
