import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronDownRight = forwardRef(function ChevronDownRight(
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
    createElement(Path, {"d":"M18 6L18 18L6 18","key":"0"})
  );
});

ChevronDownRight.displayName = 'ChevronDownRight';

export default ChevronDownRight;
export { ChevronDownRight };
