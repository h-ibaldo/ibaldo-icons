# @primor/icons-svelte (Primor Icons)

Svelte components for [Primor Icons](https://primoricons.com) — A line-based icon library with variations, not conclusions.

## Installation

```bash
npm install @primor/icons-svelte
# or
yarn add @primor/icons-svelte
# or
pnpm add @primor/icons-svelte
```

## Usage

### Import individual icons (recommended for tree-shaking)

```svelte
<script>
  import { UserHead1, AddPlus1, Settings } from '@primor/icons-svelte';
</script>

<UserHead1 />
<AddPlus1 size={32} />
<Settings color="#333" strokeWidth={2} />
```

### Import from specific path

```svelte
<script>
  import UserHead1 from '@primor/icons-svelte/icons/UserHead1.svelte';
</script>

<UserHead1 />
```

## Props

All icons accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Width and height of the icon |
| `color` | `string` | `'currentColor'` | Stroke color of the icon |
| `strokeWidth` | `number \| string` | `1.5` | Stroke width of the icon |
| `class` | `string` | `''` | Additional CSS classes |

All other props are spread to the underlying `<svg>` element via `{...$$restProps}`.

## Examples

### Basic usage

```svelte
<UserHead1 />
```

### Custom size

```svelte
<UserHead1 size={48} />
```

### Custom color

```svelte
<UserHead1 color="#6366f1" />
```

### Custom stroke width

```svelte
<UserHead1 strokeWidth={2} />
```

### With Tailwind classes

```svelte
<UserHead1 class="w-8 h-8 text-blue-500 hover:text-blue-700" />
```

## Svelte 5 Compatibility

This package is compatible with Svelte 3, 4, and 5.

## Philosophy

> Icons are opinions. Choose variations, not conclusions.

Primor Icons offers multiple interpretations of the same concept rather than a single "correct" form. This is especially intentional in human-related symbols, where plurality, inclusion, and representation matter.

## License

Primor Icons License © Henrique Ibaldo
