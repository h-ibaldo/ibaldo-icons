import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowRightSlim = forwardRef(function ArrowRightSlim(
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
    createElement(Path, {"d":"M17 9L20 12L17 15","key":"0"}),
    createElement(Path, {"d":"M4 12L20 12","key":"1"})
  );
});

ArrowRightSlim.displayName = 'ArrowRightSlim';

export default ArrowRightSlim;
export { ArrowRightSlim };
