import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronDoubleDownLeft = forwardRef(function ChevronDoubleDownLeft(
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
    createElement(Path, {"d":"M16 20L4 20L4 8","key":"0"}),
    createElement(Path, {"d":"M20 16L8 16L8 4","key":"1"})
  );
});

ChevronDoubleDownLeft.displayName = 'ChevronDoubleDownLeft';

export default ChevronDoubleDownLeft;
export { ChevronDoubleDownLeft };
