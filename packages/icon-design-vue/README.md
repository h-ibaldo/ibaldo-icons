# @ibaldo/icons-vue (Ibaldo Icons)

Vue 3 components for [Ibaldo Icons](https://icons.ibald.ooo) — A line-based icon library with variations, not conclusions.

## Installation

```bash
npm install @ibaldo/icons-vue
# or
yarn add @ibaldo/icons-vue
# or
pnpm add @ibaldo/icons-vue
```

## Usage

```vue
<script setup>
import { Play, ChatCheck, Volume } from '@ibaldo/icons-vue';
</script>

<template>
  <Play />
  <ChatCheck :size="32" />
  <Volume color="#333" :stroke-width="2" />
</template>
```

Import a single icon by path:

```js
import Play from '@ibaldo/icons-vue/icons/Play';
```

Works with Vue 3 and Nuxt 3. Components are plain render functions, so no extra build step is needed.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Width and height of the icon |
| `color` | `string` | `'currentColor'` | Stroke color of the icon |
| `strokeWidth` (`stroke-width`) | `number \| string` | `1.5` | Stroke width of the icon |

Other attributes (`class`, `style`, `aria-*`, listeners) are passed to the `<svg>` element.

## License

MIT © Henrique Ibaldo
