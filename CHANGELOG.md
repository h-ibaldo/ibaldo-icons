# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### ⚠️ BREAKING — new naming system (next major version)
- 2,366 of 2,440 icons have new component names, following `NAMING-GUIDE.md`
  (family first, drawn mark instead of meaning, style word last, no Illustrator numbers).
  Examples: `Cloud3UploadAlt2` → `CloudUploadRound`, `Bell4Z` → `BellSnoozeFlat`,
  `TechnicalSupportLaptopGear` → `TableChartLine`. Full table: [`RENAMED-ICONS.md`](RENAMED-ICONS.md).
- Old names still work as **deprecated aliases** in `@ibaldo/icons-react` and `@ibaldo/icons-svelte`
  (re-exports from the package index, marked `@deprecated` in the types). They will be removed in the
  major version after this one. Deep imports (`/icons/<Name>`) only work with the new names.
- 26 old names now belong to a different icon, so they have no alias (listed at the top of `RENAMED-ICONS.md`).
- Removed `user-head-36` (`UserHead362`), an exact duplicate of `1-user-head-36` (`AvatarHeadSpikySide`).
- Categories now come from each icon's family; `interface` is only used for generic UI controls.
  Old synonym words (alarm, notification, lupe, close, delete…) were added to the tags, so search still finds them.
- The site search also matches old names.

### Added
- AI-powered icon naming system using Claude Haiku 4.5
- Rich metadata generation (descriptions, tags, categories, accessibility)
- Enhanced search with tags and descriptions
- React package (@icon-design/react) with 1,485 icons
- Svelte package (@icon-design/svelte) with 1,485 icons
- Three name formats: PascalCase, Sentence case, Original title
- Test commands for incremental generation
- Batch processing for cost efficiency

### Changed
- Switched from Sonnet to Haiku for 12x cost reduction
- Frontend displays sentence case names (e.g., "Bell 1 clock")
- Deduplication removes 122+ duplicate names
- Fast algorithm naming for dev builds

### Fixed
- Preserved functional words in icon names (search, settings, filter)
- Consistent naming for icon series (Bell1, Bell2, Bell3)

## [0.1.0] - 2026-02-14

### Added
- Initial release with automated icon processing pipeline
- 2,441+ line-based icons
- SvelteKit-based icon browser website
- AI-powered naming and metadata generation
- React component library
- Svelte component library
- Comprehensive documentation

[unreleased]: https://github.com/[USERNAME]/icon-design/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/[USERNAME]/icon-design/releases/tag/v0.1.0
