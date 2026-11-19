import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDownRightSlim = forwardRef(function ArrowDownRightSlim(
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
    createElement(Path, {"d":"M18 14L18 18L14 18","key":"0"}),
    createElement(Path, {"d":"M18 18L6 6","key":"1"})
  );
});

ArrowDownRightSlim.displayName = 'ArrowDownRightSlim';

export default ArrowDownRightSlim;
export { ArrowDownRightSlim };
