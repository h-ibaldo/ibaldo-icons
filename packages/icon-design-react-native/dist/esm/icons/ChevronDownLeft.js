import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronDownLeft = forwardRef(function ChevronDownLeft(
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
    createElement(Path, {"d":"M18 18L6 18L6 6","key":"0"})
  );
});

ChevronDownLeft.displayName = 'ChevronDownLeft';

export default ChevronDownLeft;
export { ChevronDownLeft };
