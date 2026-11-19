import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowRepeatOneCurved = forwardRef(function ArrowRepeatOneCurved(
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
    createElement(Path, {"d":"M11 10L12 10L12 14","key":"0"}),
    createElement(Path, {"d":"M5 21L3 19L5 17","key":"1"}),
    createElement(Path, {"d":"M21 5L12 5C7.027 5 3 9.027 3 14","key":"2"}),
    createElement(Path, {"d":"M19 3L21 5L19 7","key":"3"}),
    createElement(Path, {"d":"M3 19L12 19C16.973 19 21 14.973 21 10","key":"4"})
  );
});

ArrowRepeatOneCurved.displayName = 'ArrowRepeatOneCurved';

export default ArrowRepeatOneCurved;
export { ArrowRepeatOneCurved };
