import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowClockwiseBottomCircle = forwardRef(function ArrowClockwiseBottomCircle(
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
    createElement(Path, {"d":"M7 11L10 14C11.656 15.656 14.344 15.656 16 14C17.656 12.344 17.656 9.656 16 8L15 7","key":"0"}),
    createElement(Path, {"d":"M11 11L7 11L7 15","key":"1"}),
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"2"})
  );
});

ArrowClockwiseBottomCircle.displayName = 'ArrowClockwiseBottomCircle';

export default ArrowClockwiseBottomCircle;
export { ArrowClockwiseBottomCircle };
