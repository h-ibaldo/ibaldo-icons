import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronUp = forwardRef(function ChevronUp(
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
    createElement(Path, {"d":"M4 16L12 8L20 16","key":"0"})
  );
});

ChevronUp.displayName = 'ChevronUp';

export default ChevronUp;
export { ChevronUp };
