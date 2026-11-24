import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDiagonalOutLeft = forwardRef(function ArrowDiagonalOutLeft(
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
    createElement(Path, {"d":"M2 2L9 9","key":"0"}),
    createElement(Path, {"d":"M15 15L22 22","key":"1"}),
    createElement(Path, {"d":"M2 7L2 2L7 2","key":"2"}),
    createElement(Path, {"d":"M22 17L22 22L17 22","key":"3"})
  );
});

ArrowDiagonalOutLeft.displayName = 'ArrowDiagonalOutLeft';

export default ArrowDiagonalOutLeft;
export { ArrowDiagonalOutLeft };
