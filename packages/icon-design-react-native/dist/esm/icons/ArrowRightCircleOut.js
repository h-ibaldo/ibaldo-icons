import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowRightCircleOut = forwardRef(function ArrowRightCircleOut(
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
    createElement(Path, {"d":"M18 9L21 12L18 15","key":"0"}),
    createElement(Path, {"d":"M9 12L21 12","key":"1"}),
    createElement(Path, {"d":"M20.98 18C19.156 20.426 16.27 22 13 22C7.477 22 3 17.523 3 12C3 6.477 7.477 2 13 2C16.27 2 19.156 3.574 20.98 6","key":"2"})
  );
});

ArrowRightCircleOut.displayName = 'ArrowRightCircleOut';

export default ArrowRightCircleOut;
export { ArrowRightCircleOut };
