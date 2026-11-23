import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextItalicX = forwardRef(function TextItalicX(
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
    createElement(Path, {"d":"M3 7L5 3L21 3L19 7","key":"0"}),
    createElement(Path, {"d":"M6 20L13 3","key":"1"}),
    createElement(Path, {"d":"M3 20L10 20","key":"2"}),
    createElement(Path, {"d":"M16 22L22 16","key":"3"}),
    createElement(Path, {"d":"M22 22L16 16","key":"4"})
  );
});

TextItalicX.displayName = 'TextItalicX';

export default TextItalicX;
export { TextItalicX };
