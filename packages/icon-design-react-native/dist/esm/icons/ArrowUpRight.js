import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUpRight = forwardRef(function ArrowUpRight(
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
    createElement(Path, {"d":"M6 6L18 6L18 18","key":"0"}),
    createElement(Path, {"d":"M18 6L6 18","key":"1"})
  );
});

ArrowUpRight.displayName = 'ArrowUpRight';

export default ArrowUpRight;
export { ArrowUpRight };
