import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowCornersIn = forwardRef(function ArrowCornersIn(
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
    createElement(Path, {"d":"M22 22L15 15","key":"0"}),
    createElement(Path, {"d":"M9 9L2 2","key":"1"}),
    createElement(Path, {"d":"M9 4L9 9L4 9","key":"2"}),
    createElement(Path, {"d":"M15 20L15 15L20 15","key":"3"}),
    createElement(Path, {"d":"M22 2L15 9","key":"4"}),
    createElement(Path, {"d":"M9 15L2 22","key":"5"}),
    createElement(Path, {"d":"M4 15L9 15L9 20","key":"6"}),
    createElement(Path, {"d":"M20 9L15 9L15 4","key":"7"})
  );
});

ArrowCornersIn.displayName = 'ArrowCornersIn';

export default ArrowCornersIn;
export { ArrowCornersIn };
