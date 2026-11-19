import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowRightFromDotCircle = forwardRef(function ArrowRightFromDotCircle(
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
    createElement(Path, {"d":"M14 9L17 12L14 15","key":"0"}),
    createElement(Path, {"d":"M10 12L17 12","key":"1"}),
    createElement(Path, {"d":"M4 14C5.105 14 6 13.105 6 12C6 10.895 5.105 10 4 10C2.895 10 2 10.895 2 12C2 13.105 2.895 14 4 14Z","key":"2"}),
    createElement(Path, {"d":"M4.016 18C5.84 20.426 8.73 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C8.73 2 5.84 3.574 4.016 6","key":"3"})
  );
});

ArrowRightFromDotCircle.displayName = 'ArrowRightFromDotCircle';

export default ArrowRightFromDotCircle;
export { ArrowRightFromDotCircle };
