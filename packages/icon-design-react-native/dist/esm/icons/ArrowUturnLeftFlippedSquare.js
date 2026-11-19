import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUturnLeftFlippedSquare = forwardRef(function ArrowUturnLeftFlippedSquare(
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
    createElement(Path, {"d":"M22 19L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22L19 22C20.656 22 22 20.656 22 19Z","key":"0"}),
    createElement(Path, {"d":"M11 18L8 15L11 12","key":"1"}),
    createElement(Path, {"d":"M8 15L13 15C15.211 15 17 13.211 17 11C17 8.789 15.211 7 13 7L11 7","key":"2"})
  );
});

ArrowUturnLeftFlippedSquare.displayName = 'ArrowUturnLeftFlippedSquare';

export default ArrowUturnLeftFlippedSquare;
export { ArrowUturnLeftFlippedSquare };
