import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowRightDouble = forwardRef(function ArrowRightDouble(
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
    createElement(Path, {"d":"M14 4L22 12L14 20","key":"0"}),
    createElement(Path, {"d":"M8 4L16 12L8 20","key":"1"}),
    createElement(Path, {"d":"M2 12L16 12","key":"2"})
  );
});

ArrowRightDouble.displayName = 'ArrowRightDouble';

export default ArrowRightDouble;
export { ArrowRightDouble };
