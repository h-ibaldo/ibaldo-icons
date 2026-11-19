import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SortTwoOneDown = forwardRef(function SortTwoOneDown(
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
    createElement(Path, {"d":"M6 14L7 14L7 21","key":"0"}),
    createElement(Path, {"d":"M5 5C5 3.895 5.895 3 7 3C8.105 3 9 3.895 9 5L9 5.172C9 5.703 8.789 6.211 8.414 6.586L5 10L9 10","key":"1"}),
    createElement(Path, {"d":"M17 6L17 18","key":"2"}),
    createElement(Path, {"d":"M14 15L17 18L20 15","key":"3"})
  );
});

SortTwoOneDown.displayName = 'SortTwoOneDown';

export default SortTwoOneDown;
export { SortTwoOneDown };
