import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowCornerUpRight = forwardRef(function ArrowCornerUpRight(
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
    createElement(Path, {"d":"M17 12L21 8L17 4","key":"0"}),
    createElement(Path, {"d":"M21 8L11 8C6.582 8 3 11.582 3 16L3 20","key":"1"})
  );
});

ArrowCornerUpRight.displayName = 'ArrowCornerUpRight';

export default ArrowCornerUpRight;
export { ArrowCornerUpRight };
