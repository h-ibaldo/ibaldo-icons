import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDiagonalInLeft = forwardRef(function ArrowDiagonalInLeft(
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
    createElement(Path, {"d":"M15 20L15 15L20 15","key":"3"})
  );
});

ArrowDiagonalInLeft.displayName = 'ArrowDiagonalInLeft';

export default ArrowDiagonalInLeft;
export { ArrowDiagonalInLeft };
