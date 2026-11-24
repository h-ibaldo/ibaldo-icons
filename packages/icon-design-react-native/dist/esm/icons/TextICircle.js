import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextICircle = forwardRef(function TextICircle(
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
    createElement(Path, {"d":"M12 7L12 17","key":"1"})
  );
});

TextICircle.displayName = 'TextICircle';

export default TextICircle;
export { TextICircle };
