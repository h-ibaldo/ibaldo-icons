import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDiagonalOut = forwardRef(function ArrowDiagonalOut(
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
    createElement(Path, {"d":"M2 22L9 15","key":"0"}),
    createElement(Path, {"d":"M15 9L22 2","key":"1"}),
    createElement(Path, {"d":"M7 22L2 22L2 17","key":"2"}),
    createElement(Path, {"d":"M17 2L22 2L22 7","key":"3"})
  );
});

ArrowDiagonalOut.displayName = 'ArrowDiagonalOut';

export default ArrowDiagonalOut;
export { ArrowDiagonalOut };
