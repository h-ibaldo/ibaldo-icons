import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUpFromDot = forwardRef(function ArrowUpFromDot(
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
    createElement(Path, {"d":"M9 5L12 2L15 5","key":"0"}),
    createElement(Path, {"d":"M12 12L12 2","key":"1"}),
    createElement(Path, {"d":"M15 19C15 17.344 13.656 16 12 16C10.344 16 9 17.344 9 19C9 20.656 10.344 22 12 22C13.656 22 15 20.656 15 19Z","key":"2"})
  );
});

ArrowUpFromDot.displayName = 'ArrowUpFromDot';

export default ArrowUpFromDot;
export { ArrowUpFromDot };
