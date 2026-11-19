import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronRight = forwardRef(function ChevronRight(
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
    createElement(Path, {"d":"M8 20L16 12L8 4","key":"0"})
  );
});

ChevronRight.displayName = 'ChevronRight';

export default ChevronRight;
export { ChevronRight };
