import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowCornerDownLeft = forwardRef(function ArrowCornerDownLeft(
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
    createElement(Path, {"d":"M7 12L3 16L7 20","key":"0"}),
    createElement(Path, {"d":"M3 16L13 16C17.418 16 21 12.418 21 8L21 4","key":"1"})
  );
});

ArrowCornerDownLeft.displayName = 'ArrowCornerDownLeft';

export default ArrowCornerDownLeft;
export { ArrowCornerDownLeft };
