import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUturnUpFlippedCircle = forwardRef(function ArrowUturnUpFlippedCircle(
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
    createElement(Path, {"d":"M6 11L9 8L12 11","key":"0"}),
    createElement(Path, {"d":"M9 8L9 13C9 15.211 10.789 17 13 17C15.211 17 17 15.211 17 13L17 11","key":"1"}),
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"2"})
  );
});

ArrowUturnUpFlippedCircle.displayName = 'ArrowUturnUpFlippedCircle';

export default ArrowUturnUpFlippedCircle;
export { ArrowUturnUpFlippedCircle };
