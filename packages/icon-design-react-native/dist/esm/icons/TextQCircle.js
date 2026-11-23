import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextQCircle = forwardRef(function TextQCircle(
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
    createElement(Path, {"d":"M7 12C7 9.238 9.238 7 12 7C14.762 7 17 9.238 17 12C17 14.762 14.762 17 12 17C9.238 17 7 14.762 7 12Z","key":"1"}),
    createElement(Path, {"d":"M13 14L16 18","key":"2"})
  );
});

TextQCircle.displayName = 'TextQCircle';

export default TextQCircle;
export { TextQCircle };
