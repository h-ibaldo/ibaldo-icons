import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowLeftDouble = forwardRef(function ArrowLeftDouble(
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
    createElement(Path, {"d":"M10 20L2 12L10 4","key":"0"}),
    createElement(Path, {"d":"M16 20L8 12L16 4","key":"1"}),
    createElement(Path, {"d":"M22 12L8 12","key":"2"})
  );
});

ArrowLeftDouble.displayName = 'ArrowLeftDouble';

export default ArrowLeftDouble;
export { ArrowLeftDouble };
