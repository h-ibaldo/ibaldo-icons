import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUpDouble = forwardRef(function ArrowUpDouble(
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
    createElement(Path, {"d":"M4 10L12 2L20 10","key":"0"}),
    createElement(Path, {"d":"M4 16L12 8L20 16","key":"1"}),
    createElement(Path, {"d":"M12 22L12 8","key":"2"})
  );
});

ArrowUpDouble.displayName = 'ArrowUpDouble';

export default ArrowUpDouble;
export { ArrowUpDouble };
