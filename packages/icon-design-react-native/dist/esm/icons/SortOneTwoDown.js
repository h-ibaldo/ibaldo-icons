import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SortOneTwoDown = forwardRef(function SortOneTwoDown(
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
    createElement(Path, {"d":"M6 3L7 3L7 10","key":"0"}),
    createElement(Path, {"d":"M5 16C5 14.895 5.895 14 7 14C8.105 14 9 14.895 9 16L9 16.172C9 16.703 8.789 17.211 8.414 17.586L5 21L9 21","key":"1"}),
    createElement(Path, {"d":"M17 6L17 18","key":"2"}),
    createElement(Path, {"d":"M14 15L17 18L20 15","key":"3"})
  );
});

SortOneTwoDown.displayName = 'SortOneTwoDown';

export default SortOneTwoDown;
export { SortOneTwoDown };
