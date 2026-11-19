import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronUpLeft = forwardRef(function ChevronUpLeft(
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
    createElement(Path, {"d":"M6 18L6 6L18 6","key":"0"})
  );
});

ChevronUpLeft.displayName = 'ChevronUpLeft';

export default ChevronUpLeft;
export { ChevronUpLeft };
