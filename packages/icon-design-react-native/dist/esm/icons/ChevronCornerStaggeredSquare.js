import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronCornerStaggeredSquare = forwardRef(function ChevronCornerStaggeredSquare(
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
    createElement(Path, {"d":"M14 7L14 10L11 10","key":"0"}),
    createElement(Path, {"d":"M10 17L10 14L13 14","key":"1"}),
    createElement(Path, {"d":"M17 2L7 2C4.238 2 2 4.238 2 7L2 17C2 19.762 4.238 22 7 22L17 22C19.762 22 22 19.762 22 17L22 7C22 4.238 19.762 2 17 2Z","key":"2"})
  );
});

ChevronCornerStaggeredSquare.displayName = 'ChevronCornerStaggeredSquare';

export default ChevronCornerStaggeredSquare;
export { ChevronCornerStaggeredSquare };
