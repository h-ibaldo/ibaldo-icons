import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextBCircle = forwardRef(function TextBCircle(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Path, {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"0"}),
    createElement(Path, {"d":"M8 7L8 17L14.5 17C15.883 17 17 15.879 17 14.5C17 13.121 15.883 12 14.5 12L8 12L13.5 12C14.883 12 16 10.879 16 9.5C16 8.121 14.883 7 13.5 7Z","key":"1"})
  );
});

TextBCircle.displayName = 'TextBCircle';

export default TextBCircle;
export { TextBCircle };
