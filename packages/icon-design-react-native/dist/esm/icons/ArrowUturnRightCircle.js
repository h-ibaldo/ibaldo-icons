import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUturnRightCircle = forwardRef(function ArrowUturnRightCircle(
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
    createElement(Path, {"d":"M13 6L16 9L13 12","key":"0"}),
    createElement(Path, {"d":"M16 9L11 9C8.789 9 7 10.789 7 13C7 15.211 8.789 17 11 17L13 17","key":"1"}),
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"2"})
  );
});

ArrowUturnRightCircle.displayName = 'ArrowUturnRightCircle';

export default ArrowUturnRightCircle;
export { ArrowUturnRightCircle };
