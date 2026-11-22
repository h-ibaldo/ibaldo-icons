import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDiagonalIn = forwardRef(function ArrowDiagonalIn(
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
    createElement(Path, {"d":"M20 9L15 9L15 4","key":"2"}),
    createElement(Path, {"d":"M4 15L9 15L9 20","key":"3"})
  );
});

ArrowDiagonalIn.displayName = 'ArrowDiagonalIn';

export default ArrowDiagonalIn;
export { ArrowDiagonalIn };
