import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDownLeftCircleLarge = forwardRef(function ArrowDownLeftCircleLarge(
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
    createElement(Path, {"d":"M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2Z","key":"0"}),
    createElement(Path, {"d":"M15 16L8 16L8 9","key":"1"}),
    createElement(Path, {"d":"M15 9L8 16","key":"2"})
  );
});

ArrowDownLeftCircleLarge.displayName = 'ArrowDownLeftCircleLarge';

export default ArrowDownLeftCircleLarge;
export { ArrowDownLeftCircleLarge };
