import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowClockwiseFive = forwardRef(function ArrowClockwiseFive(
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
    createElement(Path, {"d":"M14 8L10 8L10 11.5L11.75 11.5C12.992 11.5 14 12.508 14 13.75C14 14.992 12.992 16 11.75 16L10 16","key":"0"}),
    createElement(Path, {"d":"M19 2L19 5L16 5","key":"1"}),
    createElement(Path, {"d":"M19 4.875C17.195 3.102 14.73 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 10.953 21.84 9.945 21.539 9","key":"2"})
  );
});

ArrowClockwiseFive.displayName = 'ArrowClockwiseFive';

export default ArrowClockwiseFive;
export { ArrowClockwiseFive };
