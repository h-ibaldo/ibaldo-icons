import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUturnDownFlippedCircle = forwardRef(function ArrowUturnDownFlippedCircle(
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
    createElement(Path, {"d":"M6 13L9 16L12 13","key":"0"}),
    createElement(Path, {"d":"M9 16L9 11C9 8.789 10.789 7 13 7C15.211 7 17 8.789 17 11L17 13","key":"1"}),
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"2"})
  );
});

ArrowUturnDownFlippedCircle.displayName = 'ArrowUturnDownFlippedCircle';

export default ArrowUturnDownFlippedCircle;
export { ArrowUturnDownFlippedCircle };
