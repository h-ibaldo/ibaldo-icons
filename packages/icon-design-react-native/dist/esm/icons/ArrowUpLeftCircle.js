import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUpLeftCircle = forwardRef(function ArrowUpLeftCircle(
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
    createElement(Path, {"d":"M9 14L9 9L14 9","key":"0"}),
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"1"}),
    createElement(Path, {"d":"M15 15L9 9","key":"2"})
  );
});

ArrowUpLeftCircle.displayName = 'ArrowUpLeftCircle';

export default ArrowUpLeftCircle;
export { ArrowUpLeftCircle };
