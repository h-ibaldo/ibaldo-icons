# @ibaldo/icons-react (Ibaldo Icons)

React components for [Ibaldo Icons](https://ibald.ooo/icons) — A line-based icon library with variations, not conclusions.

## Installation

```bash
npm install @ibaldo/icons-react
# or
yarn add @ibaldo/icons-react
# or
pnpm add @ibaldo/icons-react
```

## Usage

### Import individual icons (recommended for tree-shaking)

```jsx
import { UserHead1, AddPlus1, Settings } from '@ibaldo/icons-react';

function App() {
  return (
    <div>
      <UserHead1 />
      <AddPlus1 size={32} />
      <Settings color="#333" strokeWidth={2} />
    </div>
  );
}
```

### Import from specific path

```jsx
import UserHead1 from '@ibaldo/icons-react/icons/UserHead1';
```

## Props

All icons accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Width and height of the icon |
| `color` | `string` | `'currentColor'` | Stroke color of the icon |
| `strokeWidth` | `number \| string` | `1.5` | Stroke width of the icon |
| `className` | `string` | `''` | Additional CSS classes |

All other props are passed to the underlying `<svg>` element.

## Examples

### Basic usage

```jsx
<UserHead1 />
```

### Custom size

```jsx
<UserHead1 size={48} />
```

### Custom color

```jsx
<UserHead1 color="#6366f1" />
```

### Custom stroke width

```jsx
<UserHead1 strokeWidth={2} />
```

### With ref

```jsx
import { useRef } from 'react';
import { UserHead1 } from '@ibaldo/icons-react';

function App() {
  const iconRef = useRef(null);
  return <UserHead1 ref={iconRef} />;
}
```

### With className

```jsx
<UserHead1 className="my-icon hover:text-blue-500" />
```

## Philosophy

> Icons are opinions. Choose variations, not conclusions.

Ibaldo Icons offers multiple interpretations of the same concept rather than a single "correct" form. This is especially intentional in human-related symbols, where plurality, inclusion, and representation matter.

## License

Ibaldo Icons License © Henrique Ibaldo
