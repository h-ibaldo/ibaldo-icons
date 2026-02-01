# Quick Start - Adding New Icons

## Super Simple: One Command

Export your icons from Illustrator to a folder in `src/icons/raw/`, then:

```bash
npm run process media-controls
```

Replace `media-controls` with your folder name. That's it!

---

## Step-by-Step Example

### 1. Export from Illustrator

Create a folder and export your icons:

```
src/icons/raw/
└── media-controls/         ← Your new folder
    ├── play-button.svg
    ├── pause-button.svg
    ├── stop-button.svg
    └── volume-up.svg
```

### 2. Run One Command

```bash
npm run process media-controls
```

### 3. Done!

Everything is generated automatically:
- ✅ AI analyzes each icon
- ✅ Creates unique component names
- ✅ Generates metadata
- ✅ Optimizes SVGs
- ✅ Builds React components
- ✅ Builds Svelte components
- ✅ Updates website index

---

## All Commands

```bash
# Process icons from a specific folder
npm run process <folder-name>

# Process all icons (new + changed)
npm run build:icons

# Force rebuild everything
npm run build:icons:all

# Start development server
npm run dev

# Build website (processes icons first)
npm run build
```

---

## Examples

```bash
# Process media controls
npm run process media-controls

# Process navigation icons
npm run process navigation

# Process social icons
npm run process social-media

# Process all your folders at once
npm run build:icons
```

---

## Folder Organization

Organize however you want:

```
src/icons/raw/
├── 2026-02-batch-1/        ← By date
├── media-controls/          ← By feature
├── client-project-alpha/    ← By project
└── navigation/              ← By category
```

The script scans all folders automatically.

---

## Tips

**Good Icon Names:**
- `play-button.svg` (descriptive)
- `brightness-control.svg` (includes context)
- `upload-cloud.svg` (action + object)

**Avoid:**
- `icon-1.svg` (not descriptive)
- `btn-23.svg` (cryptic)
- `temp.svg` (unclear)

Good names = Better AI metadata!

---

## What Gets Generated

For each icon, you get:

**1. Metadata** (`metadata/icons/play-button.json`):
```json
{
  "name": "PlayButton",
  "description": "Media play button control",
  "tags": ["play", "media", "control", "start"],
  "categories": ["media", "interface"]
}
```

**2. React Component** (`packages/icon-design-react/dist/`):
```jsx
import { PlayButton } from '@icon-design/react';
<PlayButton size={32} color="#0066CC" />
```

**3. Svelte Component** (`packages/icon-design-svelte/dist/`):
```svelte
import PlayButton from '@icon-design/svelte/icons/PlayButton.svelte';
<PlayButton size={32} color="#0066CC" />
```

**4. Optimized SVG** (`static/icons/optimized/media/play-button.svg`)

**5. Website Entry** (automatically appears on icon.design)

---

## Troubleshooting

**"Folder not found"**
- Check the folder name spelling
- Make sure it's in `src/icons/raw/`

**"No SVG files found"**
- Verify you exported SVG files (not PNG/JPG)
- Check files are in the folder, not a subfolder

**AI generating weird names**
- Improve your icon filenames (be descriptive)
- You can manually edit the metadata JSON files after

---

## Need Help?

See [WORKFLOW.md](./WORKFLOW.md) for detailed documentation.
