# Icon Processing Workflow

This document describes the new scalable workflow for adding and managing icons in Ibaldo Icons.

## Philosophy

> Icons are opinions. Choose variations, not conclusions.

Our icon library emphasizes:
- **Multiple interpretations** of concepts
- **Searchable metadata** for easy discovery
- **Accessibility-first** design
- **Clean, optimized** SVG output
- **Descriptive naming** over cryptic codes

---

## Directory Structure

```
icon-design/
├── static/icons/
│   ├── raw/                    # Export from Illustrator here (temporary)
│   ├── optimized/              # Processed, clean SVG files
│   │   ├── interface/
│   │   ├── arrows/
│   │   ├── people/
│   │   └── [other categories]/
│   ├── popular/                # Legacy (to be migrated)
│   ├── application-1/          # Legacy (to be migrated)
│   └── application-2/          # Legacy (to be migrated)
│
├── metadata/
│   ├── icons/                  # Individual icon metadata JSON files
│   │   ├── user-circle.json
│   │   ├── arrow-left.json
│   │   └── ...
│   └── examples/               # Example metadata files
│
├── schemas/
│   └── icon-metadata.schema.json  # JSON schema for metadata
│
└── scripts/
    ├── optimize-svg.js         # SVG optimization tool
    ├── process-new-icon.js     # Interactive icon processor
    └── generate-icons-index.js # Build the searchable icon index
```

---

## Workflow for Adding New Icons

### Step 1: Export from Illustrator

**Naming Convention**: Use descriptive kebab-case names

```
✅ GOOD:
user-avatar-circle.svg
arrow-left-bold.svg
notification-bell-with-badge.svg
settings-gear-outline.svg

❌ BAD:
1-user-head-1.svg
icon-23.svg
usr-av.svg
```

**Export Settings**:
- Format: SVG
- SVG Profile: SVG 1.1
- Decimal Places: Don't worry (optimizer will fix)
- Save to: `static/icons/raw/`

### Step 2: Optimize the SVG

Run the optimization script to clean up the exported SVG:

```bash
node scripts/optimize-svg.js static/icons/raw/your-icon.svg
```

**What this does**:
- ✓ Removes excessive decimal precision (`11.974731445219732` → `11.97`)
- ✓ Removes UUIDs and metadata (`id="uuid-..."` → removed)
- ✓ Ensures `stroke="currentColor"` for theming
- ✓ Standardizes `viewBox="0 0 24 24"`
- ✓ Removes XML declarations
- ✓ Reduces file size by ~30%

**Batch processing** (whole directory):

```bash
node scripts/optimize-svg.js static/icons/raw/ static/icons/optimized/temp/
```

### Step 3: Add Metadata

Run the interactive processor:

```bash
node scripts/process-new-icon.js static/icons/raw/your-icon.svg
```

**The script will prompt you for**:

1. **Component Name** (PascalCase)
   - Example: `UserCircle`, `ArrowLeft`, `SettingsGear`

2. **Filename** (kebab-case)
   - Example: `user-circle`, `arrow-left`, `settings-gear`

3. **Description** (Clear, concise explanation)
   - Example: "A circular user avatar icon representing a person's profile or account"
   - Used for: Documentation, search, accessibility

4. **Tags** (Keywords for search)
   - Example: user, profile, avatar, person, account, circle
   - Include: Visual descriptors, functional concepts, alternatives

5. **Categories** (1-3 from predefined list)
   - Options: interface, arrows, communication, media, files, business, social, weather, devices, health, education, transportation, food, people, accessibility, nature, sports, development, security, shopping, time, location

6. **Accessibility Role**
   - **decorative**: Purely visual, hide from screen readers
   - **informative**: Conveys meaning, needs label
   - **interactive**: Used in buttons/links, needs clear label

7. **Suggested aria-label** (for interactive use)
   - Example: "User profile", "Go back", "Open settings"

8. **Variations** (optional, if part of a series)
   - Base concept, style variant, related icons
   - Example: Base="user", Style="circle", Related=["UserSquare", "UserHexagon"]

9. **Usage Examples** (optional but recommended)
   - Common use cases
   - Example contexts

10. **Aliases** (optional alternative search terms)
    - Example: "avatar", "profile-circle" for UserCircle

**Output**:
- Metadata JSON saved to: `metadata/icons/your-icon.json`
- Optimized SVG saved to: `static/icons/optimized/<category>/your-icon.svg`
- Original removed from raw folder (optional)

---

## Metadata Schema

Each icon has a JSON metadata file with this structure:

```json
{
  "name": "UserCircle",
  "filename": "user-circle",
  "description": "A circular user avatar icon representing a person's profile",
  "tags": ["user", "profile", "avatar", "person", "account", "circle"],
  "categories": ["people", "interface"],
  "variations": {
    "base": "user",
    "style": "circle",
    "related": ["UserSquare", "UserHexagon"],
    "number": 1
  },
  "accessibility": {
    "role": "informative",
    "suggestedLabel": "User profile",
    "description": "Icon representing a user account or profile page"
  },
  "usage": {
    "common": [
      "Profile page links",
      "Account menu buttons",
      "User listings"
    ],
    "examples": [
      "Navigation bar user menu",
      "Settings page",
      "Comment author indicators"
    ]
  },
  "technical": {
    "viewBox": "0 0 24 24",
    "strokeWidth": 1.5,
    "hasStroke": true,
    "hasFill": false
  },
  "contributors": ["Henrique Ibaldo"],
  "version": "1.0.0",
  "deprecated": false,
  "aliases": ["avatar", "profile-circle", "account-circle"]
}
```

See `schemas/icon-metadata.schema.json` for the complete schema.

---

## Build System Integration

Once icons have metadata, the build scripts will:

1. **Read metadata** from `metadata/icons/*.json`
2. **Read optimized SVG** from `static/icons/optimized/<category>/*.svg`
3. **Generate components** for each framework (React, Svelte, Vue, etc.)
4. **Include metadata** in component docs and search index
5. **Generate searchable index** with tags, categories, descriptions

### Building Packages

```bash
# Generate searchable icon index (uses metadata)
npm run prebuild

# Build React package
cd packages/icon-design-react && npm run build

# Build Svelte package
cd packages/icon-design-svelte && npm run build
```

---

## Benefits of This System

### 1. **Scalability**
- Add icons quickly without manual metadata entry
- Automated optimization and processing
- Consistent naming and structure

### 2. **Discoverability**
- Rich keyword search with tags
- Category-based browsing
- Alias support for alternative terms

### 3. **Accessibility**
- Built-in aria-label suggestions
- Role-based usage guidance
- Clear descriptions for all users

### 4. **Quality**
- Automated SVG optimization
- Consistent file sizes
- Clean, readable SVG code

### 5. **Developer Experience**
- Clear component names
- Usage examples in docs
- TypeScript support with metadata
- Easy-to-understand variation system

### 6. **Community**
- Contributor attribution
- Versioning support
- Deprecation workflow

---

## Icon Naming Best Practices

### Component Names (PascalCase)
- Start with noun or concept: `User`, `Arrow`, `Settings`
- Add descriptors: `UserCircle`, `ArrowLeft`, `SettingsGear`
- Avoid numbers: Use descriptive variations instead

### Filenames (kebab-case)
- Match component name: `user-circle.svg`
- Descriptive, not cryptic: `notification-bell` not `notif-1`
- Hyphenate multi-word: `shopping-cart-full.svg`

### Variations
Instead of:
```
user-head-1.svg
user-head-2.svg
user-head-3.svg
```

Use:
```
user-circle.svg        (circular avatar)
user-square.svg        (square avatar)
user-hexagon.svg       (hexagonal avatar)
user-outlined.svg      (outlined style)
user-filled.svg        (filled style)
```

---

## Categories

Icons should be categorized by their primary function:

| Category       | Description                                  | Examples                              |
|----------------|----------------------------------------------|---------------------------------------|
| interface      | UI controls, buttons, navigation             | menu, close, maximize, minimize       |
| arrows         | Directional indicators                       | arrow-left, chevron-up, corner-up     |
| communication  | Messaging, contact, social                   | mail, phone, chat, message            |
| media          | Audio, video, playback                       | play, pause, volume, music            |
| files          | Documents, folders, file types               | file, folder, document, pdf           |
| business       | Commerce, finance, analytics                 | chart, money, briefcase, bank         |
| social         | Social media, sharing                        | share, like, heart, star              |
| weather        | Climate and conditions                       | sun, cloud, rain, snow                |
| devices        | Electronics and hardware                     | phone, laptop, desktop, tablet        |
| health         | Medical, wellness                            | heart, pill, cross, medical           |
| education      | Learning, academic                           | book, graduation, pencil, school      |
| transportation | Vehicles, travel                             | car, plane, train, bike               |
| food           | Dining, cuisine                              | utensils, coffee, pizza, apple        |
| people         | Users, profiles, accessibility               | user, team, accessibility, person     |
| accessibility  | Inclusive design icons                       | wheelchair, audio-description, braille|
| nature         | Plants, animals, environment                 | tree, leaf, flower, animal            |
| sports         | Athletics, recreation                        | ball, trophy, fitness, game           |
| development    | Coding, tools, technical                     | code, terminal, git, package          |
| security       | Safety, privacy, protection                  | lock, shield, key, security           |
| shopping       | E-commerce, retail                           | cart, bag, store, credit-card         |
| time           | Calendar, clock, scheduling                  | clock, calendar, timer, stopwatch     |
| location       | Maps, places, navigation                     | map, pin, compass, location           |

---

## Accessibility Guidelines

### Decorative Icons
Icons that are purely visual and don't convey meaning:

```jsx
// React example
<HeartIcon aria-hidden="true" />
```

### Informative Icons
Icons that convey meaning but aren't interactive:

```jsx
// React example
<WarningIcon role="img" aria-label="Warning" />
<span className="visually-hidden">Warning</span>
```

### Interactive Icons
Icons used in buttons or links:

```jsx
// React example - Icon in button
<button aria-label="Close dialog">
  <XIcon aria-hidden="true" />
</button>

// React example - Icon with visible text
<button>
  <SaveIcon aria-hidden="true" />
  <span>Save Document</span>
</button>
```

**Key Rule**: Add `aria-label` to the interactive element (button/link), not the icon itself.

---

## Migration Plan for Existing Icons

We have 2,441 existing icons that need to be migrated to the new system:

### Phase 1: Category Organization (Manual)
1. Review existing icons in `popular/`, `application-1/`, `application-2/`
2. Determine proper categories
3. Move to appropriate folders in `optimized/`

### Phase 2: SVG Optimization (Automated)
```bash
node scripts/optimize-svg.js static/icons/popular/ static/icons/optimized/temp/
```

### Phase 3: Metadata Generation (Semi-automated)
- Use batch processor (to be built)
- AI-assisted metadata suggestions
- Manual review and refinement

### Phase 4: Build System Update
- Update `generate-icons-index.js` to use metadata
- Update framework build scripts to include metadata
- Generate new component documentation

---

## Quick Reference Commands

```bash
# Optimize a single SVG
node scripts/optimize-svg.js static/icons/raw/icon.svg

# Optimize a directory
node scripts/optimize-svg.js static/icons/raw/ static/icons/optimized/temp/

# Process new icon interactively
node scripts/process-new-icon.js static/icons/raw/icon.svg

# Rebuild icon index
npm run prebuild

# Build all packages
npm run build
```

---

## Example Workflow

```bash
# 1. Export from Illustrator as "notification-bell-badge.svg"
#    Save to: static/icons/raw/

# 2. Process the icon
node scripts/process-new-icon.js static/icons/raw/notification-bell-badge.svg

# The script will ask:
# - Component Name: [NotificationBellBadge] ✓
# - Filename: [notification-bell-badge] ✓
# - Description: A notification bell icon with a badge indicator for unread alerts
# - Tags: notification, bell, alert, badge, unread, updates
# - Categories: interface, communication
# - Accessibility Role: interactive
# - Suggested aria-label: View notifications
# - ... (more prompts)

# 3. Metadata saved to: metadata/icons/notification-bell-badge.json
# 4. SVG saved to: static/icons/optimized/interface/notification-bell-badge.svg

# 5. Build packages
npm run prebuild  # Regenerate index with new icon
cd packages/icon-design-react && npm run build
```

Done! Your icon is now available in all frameworks with full metadata support.

---

## Questions?

See `schemas/icon-metadata.schema.json` for the complete metadata specification.

Check `metadata/examples/` for sample metadata files.

Run scripts with no arguments to see usage help.
