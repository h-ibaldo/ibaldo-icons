import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUpDown = forwardRef(function ArrowUpDown(
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
    createElement(Path, {"d":"M17 5L17 20","key":"0"}),
    createElement(Path, {"d":"M14 17L17 20L20 17","key":"1"}),
    createElement(Path, {"d":"M10 7.5L7 4.5L4 7.5","key":"2"}),
    createElement(Path, {"d":"M7 19L7 4.5","key":"3"})
  );
});

ArrowUpDown.displayName = 'ArrowUpDown';

export default ArrowUpDown;
export { ArrowUpDown };
