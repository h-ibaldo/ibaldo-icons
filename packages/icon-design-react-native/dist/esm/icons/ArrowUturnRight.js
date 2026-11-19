import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUturnRight = forwardRef(function ArrowUturnRight(
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
    createElement(Path, {"d":"M17 12L21 8L17 4","key":"0"}),
    createElement(Path, {"d":"M21 8L9 8C5.688 8 3 10.688 3 14C3 17.313 5.688 20 9 20L12 20","key":"1"})
  );
});

ArrowUturnRight.displayName = 'ArrowUturnRight';

export default ArrowUturnRight;
export { ArrowUturnRight };
