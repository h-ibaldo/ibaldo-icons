# Scripts Reference

This document provides detailed information about all npm scripts available in the icon-design project.

## Development

### `npm run dev`
Starts the SvelteKit development server for the icon browser website.

```bash
npm run dev
```

- **Port:** http://localhost:5173
- **Hot reload:** Enabled
- **Use case:** Local development and testing

---

## Icon Processing

### `npm run build:icons`
Processes icons from `src/icons/raw/` to `static/icons/optimized/` with fast algorithm naming.

```bash
npm run build:icons
```

- **Naming:** Algorithm-based (fast, no AI)
- **Metadata:** Not generated
- **Time:** ~30 seconds for 500 icons
- **Use case:** Quick development builds

### `npm run build:icons:all`
Same as `build:icons` but forces a full rebuild of all icons.

```bash
npm run build:icons:all
```

- **Use case:** When you need to reprocess everything from scratch

### `npm run build:icons:test`
Test build with only 5 icons for quick validation.

```bash
npm run build:icons:test
```

- **Icons:** First 5 from optimized directory
- **Time:** ~10 seconds
- **Use case:** Testing build pipeline changes

---

## AI Testing

### `npm run test:ai-naming`
Tests the AI naming system on sample icons.

```bash
npm run test:ai-naming
```

- **Icons:** Predefined test set
- **Output:** Before/after name comparisons
- **Use case:** Verifying AI naming quality

### `npm run test:metadata:small`
Generates AI metadata for 5 icons.

```bash
npm run test:metadata:small
```

- **Icons:** 5
- **Time:** ~30 seconds
- **Cost:** ~$0.01
- **Use case:** Quick metadata generation test

### `npm run test:metadata`
Generates AI metadata for 10 icons.

```bash
npm run test:metadata
```

- **Icons:** 10
- **Time:** ~1 minute
- **Cost:** ~$0.02
- **Use case:** Standard metadata testing

### `npm run test:metadata:medium`
Generates AI metadata for 50 icons.

```bash
npm run test:metadata:medium
```

- **Icons:** 50
- **Time:** ~3-5 minutes
- **Cost:** ~$0.10
- **Use case:** Larger scale testing before full generation

---

## Index Generation

### `npm run generate:index`
Generates icons-index.json with AI naming (default strategy).

```bash
npm run generate:index
```

- **Naming:** AI-powered (if ANTHROPIC_API_KEY set)
- **Metadata:** Not generated
- **Time:** ~5-10 minutes for 500 icons
- **Use case:** Regenerating index with consistent names

### `npm run generate:index:ai`
Explicitly uses AI naming strategy.

```bash
npm run generate:index:ai
```

- **Naming:** AI-powered
- **Metadata:** Not generated
- **Faster than:** `:full` (no metadata generation)

### `npm run generate:index:algorithm`
Uses algorithmic naming (no AI, very fast).

```bash
npm run generate:index:algorithm
```

- **Naming:** Algorithm-based
- **Metadata:** Not generated
- **Time:** ~30 seconds
- **Cost:** Free (no API calls)
- **Use case:** Development builds, CI/CD

### `npm run generate:index:full` ⭐
Complete AI pipeline: naming + metadata for all icons.

```bash
npm run generate:index:full
```

- **Naming:** AI-powered (Claude Haiku 4.5)
- **Metadata:** Full generation (descriptions, tags, categories)
- **Time:** ~20-30 minutes for 500 icons
- **Cost:** ~$0.25-$0.40
- **Output:**
  - `static/icons-index.json` (enhanced with metadata)
  - `metadata/icons/*.json` (individual icon metadata)
- **Use case:** Production index generation before release

---

## Building

### `npm run build`
Builds the website for production deployment.

```bash
npm run build
```

- **Triggers:** `prebuild` hook (runs `build:icons` first)
- **Output:** `.svelte-kit/` and `build/`
- **Adapter:** Vercel
- **Use case:** Production deployment

### `npm run preview`
Previews the production build locally.

```bash
npm run preview
```

- **Requires:** `npm run build` first
- **Port:** http://localhost:4173
- **Use case:** Testing production build

---

## Code Quality

### `npm run format`
Formats all code with Prettier.

```bash
npm run format
```

- **Files:** All JS, Svelte, MD, JSON files
- **Config:** `.prettierrc`
- **Use case:** Before committing changes

### `npm run lint`
Checks code formatting without modifying files.

```bash
npm run lint
```

- **Exit code:** 0 if formatted correctly, 1 if issues found
- **Use case:** CI/CD pipelines

---

## Package Publishing

### `npm run release:patch` ⭐
Automated release for bug fixes and minor updates (0.1.0 → 0.1.1).

```bash
npm run release:patch
```

- **What it does:**
  - Rebuilds React and Svelte packages
  - Updates version numbers (patch bump)
  - Updates CHANGELOG.md files
  - Creates git commit and tag
  - Publishes to npm
  - Pushes to GitHub
- **Use case:** Bug fixes, documentation updates, minor tweaks
- **Time:** ~5-10 minutes
- **Requires:** npm login (`npm whoami`)

### `npm run release:minor` ⭐
Automated release for new features and icons (0.1.0 → 0.2.0).

```bash
npm run release:minor
```

- **What it does:** Same as `release:patch` but with minor version bump
- **Use case:** New icons, new features (backward compatible)
- **Time:** ~5-10 minutes

### `npm run release:major`
Automated release for breaking changes (0.1.0 → 1.0.0).

```bash
npm run release:major
```

- **What it does:** Same as `release:patch` but with major version bump
- **Use case:** Breaking API changes, removed icons, major refactoring
- **Time:** ~5-10 minutes

### `npm run release:dry-run`
Preview release changes without actually publishing.

```bash
npm run release:dry-run
```

- **What it shows:**
  - Version numbers that would be updated
  - Commands that would be executed
  - Files that would be modified
- **Use case:** Testing release process before running it
- **Makes changes:** No (safe to run anytime)

**For complete publishing documentation, see [PUBLISHING.md](PUBLISHING.md)**

---

## Package Building

### React Package

```bash
cd packages/icon-design-react
npm run build
```

- **Output:** `dist/esm/` and `dist/cjs/`
- **Icons:** All 1,485 icons as React components
- **Time:** ~2-3 minutes

### Svelte Package

```bash
cd packages/icon-design-svelte
npm run build
```

- **Output:** `dist/`
- **Icons:** All 1,485 icons as Svelte components
- **Time:** ~2-3 minutes

---

## Advanced Workflows

### Full Production Pipeline

```bash
# 1. Generate complete index with AI
npm run generate:index:full

# 2. Build website
npm run build

# 3. Build React package
cd packages/icon-design-react && npm run build

# 4. Build Svelte package
cd ../icon-design-svelte && npm run build
```

### Quick Development Iteration

```bash
# 1. Quick icon build
npm run build:icons

# 2. Start dev server
npm run dev
```

### Testing Before Full Generation

```bash
# 1. Test with 5 icons
npm run test:metadata:small

# 2. Review output in metadata/icons/

# 3. If good, run full generation
npm run generate:index:full
```

---

## Environment Variables

All scripts that use AI require an Anthropic API key:

```bash
# Copy example file
cp .env.example .env

# Add your API key
ANTHROPIC_API_KEY=sk-ant-...
```

Get your API key from: https://console.anthropic.com/settings/keys

---

## Script Performance

| Script | Icons | Time | API Calls | Cost |
|--------|-------|------|-----------|------|
| `build:icons` | All | ~30s | 0 | Free |
| `test:metadata:small` | 5 | ~30s | 1 | ~$0.01 |
| `test:metadata` | 10 | ~1m | 1 | ~$0.02 |
| `test:metadata:medium` | 50 | ~5m | 4 | ~$0.10 |
| `generate:index:ai` | 500 | ~10m | 25 | ~$0.10 |
| `generate:index:full` | 500 | ~30m | 60 | ~$0.30 |

*Note: Times and costs are approximate and based on 500 icons using Claude Haiku 4.5*

---

## Troubleshooting

### "ANTHROPIC_API_KEY not found"
- Ensure `.env` file exists with valid API key
- Check that `.env` is not gitignored (it should be)
- Verify API key format: `sk-ant-...`

### Build fails with "out of memory"
- Increase Node.js memory: `NODE_OPTIONS=--max-old-space-size=4096 npm run build`

### Icons not appearing after build
- Run `npm run generate:index` to rebuild the index
- Check `static/icons-index.json` exists
- Clear browser cache (Ctrl/Cmd + Shift + R)

---

For more information, see:
- [README.md](README.md) - Project overview
- [CHANGELOG.md](CHANGELOG.md) - Version history
- [ICON-WORKFLOW.md](ICON-WORKFLOW.md) - Icon processing details
