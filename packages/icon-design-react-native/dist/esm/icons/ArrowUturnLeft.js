import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUturnLeft = forwardRef(function ArrowUturnLeft(
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
    createElement(Path, {"d":"M7 12L3 8L7 4","key":"0"}),
    createElement(Path, {"d":"M3 8L15 8C18.313 8 21 10.688 21 14C21 17.313 18.313 20 15 20L12 20","key":"1"})
  );
});

ArrowUturnLeft.displayName = 'ArrowUturnLeft';

export default ArrowUturnLeft;
export { ArrowUturnLeft };
