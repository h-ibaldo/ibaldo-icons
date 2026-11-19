# @ibaldo/icons-svelte (Ibaldo Icons)

Svelte components for [Ibaldo Icons](https://ibald.ooo/icons) — A line-based icon library with variations, not conclusions.

## Installation

```bash
npm install @ibaldo/icons-svelte
# or
yarn add @ibaldo/icons-svelte
# or
pnpm add @ibaldo/icons-svelte
```

## Usage

### Import individual icons (recommended for tree-shaking)

```svelte
<script>
  import { UserHead1, AddPlus1, Settings } from '@ibaldo/icons-svelte';
</script>

<UserHead1 />
<AddPlus1 size={32} />
<Settings color="#333" strokeWidth={2} />
```

### Import from specific path

```svelte
<script>
  import UserHead1 from '@ibaldo/icons-svelte/icons/UserHead1.svelte';
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

Ibaldo Icons offers multiple interpretations of the same concept rather than a single "correct" form. This is especially intentional in human-related symbols, where plurality, inclusion, and representation matter.

## License

MIT © Henrique Ibaldo
