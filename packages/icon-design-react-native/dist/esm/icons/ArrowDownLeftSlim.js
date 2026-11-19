import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDownLeftSlim = forwardRef(function ArrowDownLeftSlim(
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
    createElement(Path, {"d":"M10 18L6 18L6 14","key":"0"}),
    createElement(Path, {"d":"M6 18L18 6","key":"1"})
  );
});

ArrowDownLeftSlim.displayName = 'ArrowDownLeftSlim';

export default ArrowDownLeftSlim;
export { ArrowDownLeftSlim };
