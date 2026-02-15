# Testing Guide - Icon Processing

## Quick Test Commands

### Process First 5 Batches (50 icons)
```bash
npm run build:icons:test
```
- Processes first 50 icons (5 batches of 10)
- Time: ~5 minutes
- Cost: ~$0.005
- Perfect for testing!

### Force Rebuild First 5 Batches
```bash
npm run build:icons:test:all
```
- Rebuilds first 50 icons even if metadata exists
- Use this to test changes to the system

### Custom Number of Batches
```bash
# Process first 10 batches (100 icons)
node scripts/build-icons-test.js 10

# Process first 20 batches (200 icons)  
node scripts/build-icons-test.js 20

# Force rebuild 10 batches
node scripts/build-icons-test.js 10 --all
```

---

## Test Workflow

### 1. Quick Smoke Test (50 icons)
```bash
npm run build:icons:test
```

**Verify:**
- ✅ Check `metadata/icons/` has 50+ JSON files
- ✅ Check `static/icons/optimized/` has 50+ SVGs
- ✅ Check AI metadata quality
- ✅ Check component names are unique

### 2. Medium Test (100 icons)
```bash
node scripts/build-icons-test.js 10
```

**Verify:**
- ✅ Name deduplication working
- ✅ Multiple categories generated
- ✅ React components building correctly
- ✅ Svelte components building correctly

### 3. Large Test (500 icons)
```bash
node scripts/build-icons-test.js 50
```

**Verify:**
- ✅ Batch processing stable
- ✅ Performance acceptable
- ✅ No memory issues
- ✅ API rate limiting handled

---

## What Gets Generated

Each test run generates:

**Metadata** (`metadata/icons/`)
```
icon-name.json (one per icon)
```

**Optimized SVGs** (`static/icons/optimized/[category]/`)
```
icon-name.svg (organized by AI category)
```

**React Components** (`packages/icon-design-react/dist/`)
```
esm/icons/ComponentName.js
cjs/icons/ComponentName.js  
icons/ComponentName.d.ts
```

**Svelte Components** (`packages/icon-design-svelte/dist/`)
```
icons/ComponentName.svelte
icons/ComponentName.svelte.d.ts
```

---

## Monitoring Progress

The script shows real-time progress:

```
============================================================
  ICON BUILD PIPELINE (TEST MODE - 5 BATCHES)
============================================================

📁 Scanning for icons...
Found 2441 icon(s) in src/icons/raw/
2435 icon(s) need processing

⚠️  TEST MODE: Processing only 5 batches (50 icons)
   Total available: 2435 icons

Processing batch 1/5...
🤖 Generating AI metadata for 10 icons...
📸 Converting SVGs to images...
🔍 Analyzing icons with Claude Vision...
✅ Generated metadata for 10 icons

Processing batch 2/5...
...
```

---

## Verify Results

### Check Metadata Quality
```bash
# View a sample metadata file
cat metadata/icons/play-button.json

# Count generated files
ls metadata/icons/*.json | wc -l
```

### Check Component Names
```bash
# View name index
cat metadata/name-index.json | head -20

# Search for duplicate names
cat metadata/name-index.json | jq 'keys[]' | sort | uniq -d
```

### Check Optimized SVGs
```bash
# Count optimized files
find static/icons/optimized -name "*.svg" | wc -l

# View categories
ls static/icons/optimized/
```

### Check Components
```bash
# Count React components
find packages/icon-design-react/dist/esm/icons -name "*.js" | wc -l

# Count Svelte components
find packages/icon-design-svelte/dist/icons -name "*.svelte" | wc -l
```

---

## Cleaning Up Test Data

To clean test data and start fresh:

```bash
# Remove generated metadata
rm -rf metadata/icons/*.json

# Remove optimized SVGs
rm -rf static/icons/optimized/*

# Remove name index
rm metadata/name-index.json

# Then run test again
npm run build:icons:test
```

---

## Common Issues

### "AI metadata generation failed"
- Check `.env` has valid `ANTHROPIC_API_KEY`
- System will use fallback (filename-based) automatically

### "Missing metadata for icon.svg"
- Normal - AI occasionally returns incomplete data
- Fallback metadata is generated automatically
- Icon still processes successfully

### "Model deprecated" warning
- Expected - Claude 3.5 Haiku deprecates Feb 2026
- Still works fine
- Update model in `scripts/ai-generate-metadata.js` when needed

---

## Performance Expectations

| Batches | Icons | Time | Cost |
|---------|-------|------|------|
| 5 | 50 | ~5 min | $0.005 |
| 10 | 100 | ~10 min | $0.01 |
| 50 | 500 | ~50 min | $0.05 |
| 100 | 1,000 | ~100 min | $0.10 |
| 244 | 2,441 | ~4-5 hours | $0.24 |

---

## Full Build Commands

Once testing is complete, use these for production:

```bash
# Process all icons (incremental)
npm run build:icons

# Force rebuild everything
npm run build:icons:all

# Process specific folder
npm run process media-controls
```

---

## Next Steps After Testing

1. ✅ Run test (5 batches)
2. ✅ Verify outputs look good
3. ✅ Check AI metadata quality
4. ✅ Confirm components build correctly
5. 🚀 Run full build when ready!

---

Happy testing! 🧪
