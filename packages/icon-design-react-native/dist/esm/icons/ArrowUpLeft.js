import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUpLeft = forwardRef(function ArrowUpLeft(
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
    createElement(Path, {"d":"M6 18L6 6L18 6","key":"0"}),
    createElement(Path, {"d":"M6 6L18 18","key":"1"})
  );
});

ArrowUpLeft.displayName = 'ArrowUpLeft';

export default ArrowUpLeft;
export { ArrowUpLeft };
