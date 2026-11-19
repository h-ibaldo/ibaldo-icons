import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronLeft = forwardRef(function ChevronLeft(
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
    createElement(Path, {"d":"M16 20L8 12L16 4","key":"0"})
  );
});

ChevronLeft.displayName = 'ChevronLeft';

export default ChevronLeft;
export { ChevronLeft };
