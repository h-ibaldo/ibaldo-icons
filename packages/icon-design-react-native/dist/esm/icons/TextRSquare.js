import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextRSquare = forwardRef(function TextRSquare(
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
    createElement(Path, {"d":"M9 17L9 7L13 7C14.656 7 16 8.344 16 10C16 11.656 14.656 13 13 13L9 13","key":"0"}),
    createElement(Path, {"d":"M13 13L16 17","key":"1"}),
    createElement(Path, {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z","key":"2"})
  );
});

TextRSquare.displayName = 'TextRSquare';

export default TextRSquare;
export { TextRSquare };
