import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextUSquare = forwardRef(function TextUSquare(
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
    createElement(Path, {"d":"M8 8L8 13C8 15.211 9.789 17 12 17C14.211 17 16 15.211 16 13L16 8","key":"0"}),
    createElement(Path, {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z","key":"1"})
  );
});

TextUSquare.displayName = 'TextUSquare';

export default TextUSquare;
export { TextUSquare };
