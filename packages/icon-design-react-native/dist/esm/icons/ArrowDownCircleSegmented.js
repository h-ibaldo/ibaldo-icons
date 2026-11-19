import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDownCircleSegmented = forwardRef(function ArrowDownCircleSegmented(
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
    createElement(Path, {"d":"M15 13L12 16L9 13","key":"0"}),
    createElement(Path, {"d":"M12 8L12 16","key":"1"}),
    createElement(Path, {"d":"M5 4.863C3.148 6.68 2 9.203 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 9.203 20.852 6.68 19 4.863","key":"2"}),
    createElement(Path, {"d":"M16 2.84C14.773 2.301 13.422 2 12 2C10.578 2 9.227 2.301 8 2.84","key":"3"})
  );
});

ArrowDownCircleSegmented.displayName = 'ArrowDownCircleSegmented';

export default ArrowDownCircleSegmented;
export { ArrowDownCircleSegmented };
