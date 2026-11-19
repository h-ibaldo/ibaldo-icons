import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronRightCircle = forwardRef(function ChevronRightCircle(
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
    createElement(Path, {"d":"M11 15L14 12L11 9","key":"0"}),
    createElement(Path, {"d":"M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z","key":"1"})
  );
});

ChevronRightCircle.displayName = 'ChevronRightCircle';

export default ChevronRightCircle;
export { ChevronRightCircle };
