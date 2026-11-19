# @ibaldo/icons-react-native (Ibaldo Icons)

React Native components for [Ibaldo Icons](https://ibald.ooo/icons) — A line-based icon library with variations, not conclusions.

## Installation

```bash
npm install @ibaldo/icons-react-native react-native-svg
# Expo
npx expo install @ibaldo/icons-react-native react-native-svg
```

## Usage

```jsx
import { Play, ChatCheck, Volume } from '@ibaldo/icons-react-native';

export default function App() {
  return (
    <>
      <Play />
      <ChatCheck size={32} />
      <Volume color="#333" strokeWidth={2} />
    </>
  );
}
```

Import a single icon by path:

```jsx
import Play from '@ibaldo/icons-react-native/icons/Play';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Width and height of the icon |
| `color` | `string` | `'currentColor'` | Stroke color of the icon |
| `strokeWidth` | `number \| string` | `1.5` | Stroke width of the icon |

All other props (`style`, `accessibilityLabel`, ...) are passed to the `<Svg>` from `react-native-svg`.

## License

MIT © Henrique Ibaldo
