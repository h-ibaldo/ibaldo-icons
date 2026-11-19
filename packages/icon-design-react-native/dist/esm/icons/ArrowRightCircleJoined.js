import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowRightCircleJoined = forwardRef(function ArrowRightCircleJoined(
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
    createElement(Path, {"d":"M11 9L14 12L11 15","key":"0"}),
    createElement(Path, {"d":"M3.348 17C5.234 20.254 8.891 22.352 13.004 21.949C17.633 21.5 21.426 17.762 21.938 13.141C22.605 7.105 17.898 2 12 2C8.008 2 4.563 4.34 2.961 7.723C2.02 9.707 3.484 12 5.68 12L14 12","key":"1"})
  );
});

ArrowRightCircleJoined.displayName = 'ArrowRightCircleJoined';

export default ArrowRightCircleJoined;
export { ArrowRightCircleJoined };
