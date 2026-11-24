import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronRightLeftStaggeredSquare = forwardRef(function ChevronRightLeftStaggeredSquare(
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
    createElement(Path, {"d":"M10 11L12 9L10 7","key":"0"}),
    createElement(Path, {"d":"M14 13L12 15L14 17","key":"1"}),
    createElement(Path, {"d":"M17 2L7 2C4.238 2 2 4.238 2 7L2 17C2 19.762 4.238 22 7 22L17 22C19.762 22 22 19.762 22 17L22 7C22 4.238 19.762 2 17 2Z","key":"2"})
  );
});

ChevronRightLeftStaggeredSquare.displayName = 'ChevronRightLeftStaggeredSquare';

export default ChevronRightLeftStaggeredSquare;
export { ChevronRightLeftStaggeredSquare };
