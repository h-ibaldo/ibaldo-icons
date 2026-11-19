import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUturnDownSquare = forwardRef(function ArrowUturnDownSquare(
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
    createElement(Path, {"d":"M19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2Z","key":"0"}),
    createElement(Path, {"d":"M18 13L15 16L12 13","key":"1"}),
    createElement(Path, {"d":"M15 16L15 11C15 8.789 13.211 7 11 7C8.789 7 7 8.789 7 11L7 13","key":"2"})
  );
});

ArrowUturnDownSquare.displayName = 'ArrowUturnDownSquare';

export default ArrowUturnDownSquare;
export { ArrowUturnDownSquare };
