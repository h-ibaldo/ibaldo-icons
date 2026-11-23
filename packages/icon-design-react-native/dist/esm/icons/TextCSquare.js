import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextCSquare = forwardRef(function TextCSquare(
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
    createElement(Path, {"d":"M15.727 15.332C14.813 16.355 13.48 17 12 17C9.238 17 7 14.762 7 12C7 9.238 9.238 7 12 7C13.48 7 14.813 7.645 15.727 8.668","key":"0"}),
    createElement(Path, {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z","key":"1"})
  );
});

TextCSquare.displayName = 'TextCSquare';

export default TextCSquare;
export { TextCSquare };
