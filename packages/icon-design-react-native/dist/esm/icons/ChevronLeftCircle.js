import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronLeftCircle = forwardRef(function ChevronLeftCircle(
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
    createElement(Path, {"d":"M13 9L10 12L13 15","key":"0"}),
    createElement(Path, {"d":"M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z","key":"1"})
  );
});

ChevronLeftCircle.displayName = 'ChevronLeftCircle';

export default ChevronLeftCircle;
export { ChevronLeftCircle };
