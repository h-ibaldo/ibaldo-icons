import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDownDouble = forwardRef(function ArrowDownDouble(
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
    createElement(Path, {"d":"M20 14L12 22L4 14","key":"0"}),
    createElement(Path, {"d":"M20 8L12 16L4 8","key":"1"}),
    createElement(Path, {"d":"M12 2L12 16","key":"2"})
  );
});

ArrowDownDouble.displayName = 'ArrowDownDouble';

export default ArrowDownDouble;
export { ArrowDownDouble };
