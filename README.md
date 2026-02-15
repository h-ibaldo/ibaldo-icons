# Icon.Design - Automated Icon Processing System

Professional icon library with AI-powered metadata generation and automated component building.

## 🚀 Quick Start

1. **Export icons from Illustrator** to `src/icons/raw/[your-folder]/`
2. **Run one command:**
   ```bash
   npm run process your-folder
   ```
3. **Done!** All outputs generated automatically.

See [QUICK-START.md](./QUICK-START.md) for detailed examples.

---

## ✨ Features

### AI-Powered Metadata Generation
- 🤖 **Visual analysis** using Claude Vision API
- 🏷️ **Smart naming** - unique component names (PlayButton, CloudUpload)
- 📝 **Rich descriptions** - what each icon represents
- 🔍 **Intelligent tags** - 5-10 keywords for search
- 📂 **Auto-categorization** - media, interface, arrows, etc.
- ♿ **Accessibility** - screen reader labels

### Automated Build Pipeline
- ⚛️ **React components** (ESM + CJS + TypeScript)
- 🔶 **Svelte components** (with TypeScript)
- 🎨 **Optimized SVGs** (safe mode - no visual distortion)
- 📋 **Website index** (automatic updates)
- 🔄 **Incremental builds** (only process changed icons)

### Developer Experience
- 📁 **Flexible organization** - any folder structure
- 🌲 **Tree-shakeable** - import individual icons
- 🎯 **Type-safe** - full TypeScript support
- ⚡ **Fast builds** - process 100 icons in ~60 seconds
- 💰 **Affordable** - ~$0.001 per 10 icons

---

## 📦 Installation

```bash
npm install
```

### Environment Setup

Create `.env` file:
```bash
ANTHROPIC_API_KEY=sk-ant-api03-your-key-here
```

Get your API key from [console.anthropic.com](https://console.anthropic.com/)

---

## 🎨 Usage

### Process Icons from a Folder

```bash
# Export icons to src/icons/raw/media-controls/
npm run process media-controls
```

### Process All Icons

```bash
# Incremental (only new/changed)
npm run build:icons

# Force rebuild all
npm run build:icons:all
```

### Development

```bash
# Start dev server
npm run dev

# Build website (processes icons first)
npm run build
```

---

## 📁 Project Structure

```
icon-design/
├── src/icons/raw/              # Your source icons (organize however you want)
│   ├── media-controls/
│   ├── navigation/
│   └── [any-folder]/
│
├── static/icons/optimized/     # Generated optimized SVGs
│   └── [ai-category]/          # AI determines category
│
├── metadata/
│   ├── icons/                  # Generated metadata JSON files
│   └── name-index.json         # Component name tracking
│
├── packages/
│   ├── icon-design-react/      # React package
│   │   └── dist/               # Generated components
│   └── icon-design-svelte/     # Svelte package
│       └── dist/               # Generated components
│
└── scripts/
    ├── build-icons.js          # Master build orchestrator
    ├── ai-generate-metadata.js # AI vision metadata generator
    └── process-folder.sh       # Quick folder processor
```

---

## 🔧 How It Works

### 1. Icon Scanning
- Recursively finds all SVGs in `src/icons/raw/`
- Supports any folder structure (organize how you want)
- Tracks changes with file modification times

### 2. AI Analysis (Claude Vision)
- Converts SVGs to PNG images
- Sends to Claude Vision API in batches of 10
- AI analyzes visual design and generates metadata
- Ensures unique component names

### 3. Name Deduplication
- Maintains `name-index.json` with all component names
- AI avoids existing names (first 50 shown in prompt)
- Code validation catches any duplicates
- Auto-numbers if needed (PlayButton → PlayButton2)

### 4. Safe Optimization
- Removes XML declarations and metadata
- Preserves path data (no visual distortion)
- ~10-15% size reduction
- Sets `currentColor` for theming

### 5. Component Generation
- React: forwardRef, customizable props, tree-shakeable
- Svelte: reactive props, spread operator support
- TypeScript declarations included
- Individual imports supported

### 6. Index Generation
- Merges new icons with existing library
- Categories from AI analysis
- Powers website search/browse

---

## 📚 Documentation

- [QUICK-START.md](./QUICK-START.md) - Simple getting started guide
- [WORKFLOW.md](./WORKFLOW.md) - Detailed workflow documentation
- [SCRIPTS.md](./SCRIPTS.md) - Complete npm scripts reference
- [CHANGELOG.md](./CHANGELOG.md) - Version history and release notes
- [ROADMAP.md](./ROADMAP.md) - Competitive strategy & future plans

---

## 🎯 Icon Naming Best Practices

Good names help AI generate better metadata:

✅ **Good:**
- `play-button.svg` - descriptive
- `brightness-control.svg` - includes context
- `upload-cloud.svg` - action + object

❌ **Avoid:**
- `icon-1.svg` - not descriptive
- `btn-23.svg` - cryptic
- `temp.svg` - unclear

---

## 🔑 Generated Metadata Example

```json
{
  "name": "PlayButton",
  "description": "Media play button control",
  "tags": ["play", "media", "control", "start", "video", "audio"],
  "categories": ["media", "interface"],
  "accessibility": {
    "role": "interactive",
    "suggestedLabel": "Play media"
  },
  "technical": {
    "viewBox": "0 0 24 24",
    "strokeWidth": 1.5,
    "hasStroke": true,
    "hasFill": false
  }
}
```

---

## 💻 Component Usage

### React

```jsx
import { PlayButton, PauseButton } from '@icon-design/react';

function MediaPlayer() {
  return (
    <div>
      <PlayButton size={32} color="#0066CC" strokeWidth={2} />
      <PauseButton size={32} color="#0066CC" strokeWidth={2} />
    </div>
  );
}
```

### Svelte

```svelte
<script>
  import PlayButton from '@icon-design/svelte/icons/PlayButton.svelte';
  import PauseButton from '@icon-design/svelte/icons/PauseButton.svelte';
</script>

<div>
  <PlayButton size={32} color="#0066CC" strokeWidth={2} />
  <PauseButton size={32} color="#0066CC" strokeWidth={2} />
</div>
```

---

## 📊 Performance

- **Build time:** ~60 seconds per 100 icons
- **AI cost:** ~$0.001 per 10 icons (Claude 3.5 Haiku)
- **Incremental:** Only processes new/changed icons
- **Scalable:** Handles 10,000+ icons efficiently

---

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `npm run process <folder>` | Process icons from specific folder |
| `npm run build:icons` | Process all icons (incremental) |
| `npm run build:icons:all` | Force rebuild all icons |
| `npm run dev` | Start development server |
| `npm run build` | Build website (processes icons first) |
| `npm run preview` | Preview production build |

For complete documentation of all scripts, see [SCRIPTS.md](./SCRIPTS.md)

---

## 🤝 Contributing

This project is not currently accepting external contributions.

---

## 📄 License

MIT - See [LICENSE](./LICENSE) for details.

---

## 🎉 Current Stats

- **Total Icons:** 2,441
- **Categories:** AI-determined (interface, media, arrows, etc.)
- **Packages:** React, Svelte
- **Website:** icon.design

---

Made with ❤️ by Henrique Ibaldo
