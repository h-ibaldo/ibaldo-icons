# Publishing Packages to npm

This guide explains how to publish new versions of the React and Svelte packages.

## Automated Release (Recommended)

The easiest way to release new versions is using the automated release script:

### Quick Release Commands

```bash
# For bug fixes and minor updates (0.1.0 → 0.1.1)
npm run release:patch

# For new features and icons (0.1.0 → 0.2.0)
npm run release:minor

# For breaking changes (0.1.0 → 1.0.0)
npm run release:major
```

### What the Script Does

The automated release script handles everything:

1. ✅ Rebuilds both React and Svelte packages from latest icons
2. ✅ Updates version numbers in both package.json files
3. ✅ Updates CHANGELOG.md files with new version entries
4. ✅ Creates git commit with release message
5. ✅ Creates git tag (e.g., `v0.1.1`)
6. ✅ Publishes both packages to npm
7. ✅ Pushes commits and tags to GitHub

### Dry Run (Preview Changes)

To see what would happen without actually doing it:

```bash
npm run release:dry-run
```

This shows the full release plan without making any changes.

### Advanced Options

You can customize the release process:

```bash
# Skip building (if packages are already built)
node scripts/release-packages.js patch --skip-build

# Skip npm publish (for testing)
node scripts/release-packages.js patch --skip-publish

# Skip git push (to review before pushing)
node scripts/release-packages.js patch --skip-push

# Combine options
node scripts/release-packages.js minor --skip-build --skip-push
```

---

## Manual Release (Advanced)

If you need fine-grained control, you can release manually:

### Step 1: Build Packages

```bash
# Build React package
cd packages/icon-design-react
npm run build

# Build Svelte package
cd ../icon-design-svelte
npm run build
```

### Step 2: Update Versions

Edit `package.json` in each package:

```json
{
  "version": "0.1.1"  // Bump from 0.1.0
}
```

Or use npm:

```bash
cd packages/icon-design-react
npm version patch  # or minor, or major

cd ../icon-design-svelte
npm version patch
```

### Step 3: Update CHANGELOGs

Add new version entry to each `CHANGELOG.md`:

```markdown
## [0.1.1] - 2026-02-15

### Changed
- Package rebuild with latest icons

### Added
- New social media icons
```

### Step 4: Commit and Tag

```bash
git add packages/*/package.json packages/*/CHANGELOG.md
git commit -m "chore: Release v0.1.1"
git tag -a v0.1.1 -m "Release v0.1.1"
```

### Step 5: Publish to npm

```bash
cd packages/icon-design-react
npm publish

cd ../icon-design-svelte
npm publish
```

### Step 6: Push to GitHub

```bash
git push
git push --tags
```

---

## First-Time Publishing

For the initial v0.1.0 release, use:

```bash
cd packages/icon-design-react
npm publish --access public

cd ../icon-design-svelte
npm publish --access public
```

The `--access public` flag is only needed for the first publish. After that, just use `npm publish`.

---

## Pre-Publishing Checklist

Before running the release script or publishing manually:

### 1. Check npm Login

```bash
npm whoami
```

If not logged in:
```bash
npm login
```

### 2. Verify Build Output

```bash
# Check React package
ls -lh packages/icon-design-react/dist/

# Check Svelte package
ls -lh packages/icon-design-svelte/dist/
```

Both should show a `dist/` directory with icons.

### 3. Test Packages Locally

Create a test tarball:

```bash
cd packages/icon-design-react
npm pack
# Creates icon-design-react-0.1.0.tgz

cd ../icon-design-svelte
npm pack
# Creates icon-design-svelte-0.1.0.tgz
```

Install in a test project:

```bash
cd /path/to/test-project
npm install /path/to/icon-design-react-0.1.0.tgz
```

### 4. Check What Will Be Published

```bash
cd packages/icon-design-react
npm publish --dry-run

cd ../icon-design-svelte
npm publish --dry-run
```

This shows exactly what files will be included in the package.

---

## Versioning Guidelines

Follow [Semantic Versioning](https://semver.org/):

### Patch (0.1.0 → 0.1.1)

Use for:
- Bug fixes
- Minor tweaks to existing icons
- Documentation updates
- Internal improvements

**Command:** `npm run release:patch`

### Minor (0.1.0 → 0.2.0)

Use for:
- New icons added
- New features
- Improvements that are backward compatible

**Command:** `npm run release:minor`

### Major (0.1.0 → 1.0.0)

Use for:
- Breaking changes
- Removed icons
- API changes (prop names, component structure)
- Large-scale refactoring

**Command:** `npm run release:major`

---

## Troubleshooting

### "Cannot publish over the previously published version"

You tried to publish a version that already exists on npm.

**Solution:** Bump the version number:
```bash
npm run release:patch  # or minor/major
```

### "You must verify your email to publish"

Your npm account email is not verified.

**Solution:** Check your email and click the verification link from npm.

### "403 Forbidden"

You don't have permission to publish to `@icon-design` scope.

**Solution:**
1. Make sure you're logged in: `npm whoami`
2. Check package ownership: `npm owner ls @icon-design/react`
3. If you own it, try logging out and back in: `npm logout && npm login`

### "You do not have permission to publish"

The package is owned by someone else.

**Solution:** Either:
- Ask the owner to add you: `npm owner add <your-username> @icon-design/react`
- Use a different package name

### "ENEEDAUTH"

Not logged in to npm.

**Solution:**
```bash
npm login
```

---

## Post-Publishing

After publishing:

### 1. Verify on npm

Check that packages are live:

- React: https://www.npmjs.com/package/@icon-design/react
- Svelte: https://www.npmjs.com/package/@icon-design/svelte

### 2. Test Installation

```bash
# In a fresh test project
npm install @icon-design/react
npm install @icon-design/svelte
```

### 3. Update Documentation

If you added new icons or features, update:
- README.md (icon count, new features)
- Website (rebuild and deploy)

### 4. Announce (Optional)

Consider announcing on:
- Twitter/X
- Reddit (r/reactjs, r/sveltejs)
- Your website/blog

---

## Release Workflow Example

Here's a complete workflow for releasing a new version:

```bash
# 1. Make changes (add icons, fix bugs, etc.)
# ... work on your icons ...

# 2. Preview what will happen
npm run release:dry-run

# 3. Run automated release (patch version)
npm run release:patch

# 4. Script will:
#    - Build both packages
#    - Update versions
#    - Update CHANGELOGs
#    - Create git commit and tag
#    - Publish to npm
#    - Push to GitHub
#    - Show success message with links

# 5. Verify on npm
#    Visit the package pages to confirm

# Done! 🎉
```

---

## Rollback (Emergency)

If you published a bad version, you have **72 hours** to unpublish:

```bash
npm unpublish @icon-design/react@0.1.1
npm unpublish @icon-design/svelte@0.1.1
```

**⚠️ Warning:** After 72 hours, you cannot unpublish. Instead:

1. Publish a fixed version: `npm run release:patch`
2. Deprecate the bad version:
   ```bash
   npm deprecate @icon-design/react@0.1.1 "This version has issues, use 0.1.2"
   ```

---

## Questions?

- npm CLI docs: https://docs.npmjs.com/cli/
- Semantic Versioning: https://semver.org/
- Script source: [scripts/release-packages.js](scripts/release-packages.js)
