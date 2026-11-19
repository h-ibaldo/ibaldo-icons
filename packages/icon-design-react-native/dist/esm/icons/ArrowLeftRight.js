import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowLeftRight = forwardRef(function ArrowLeftRight(
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
    createElement(Path, {"d":"M20 8L4 8","key":"0"}),
    createElement(Path, {"d":"M7 11L4 8L7 5","key":"1"}),
    createElement(Path, {"d":"M17 14L20 17L17 20","key":"2"}),
    createElement(Path, {"d":"M4 17L20 17","key":"3"})
  );
});

ArrowLeftRight.displayName = 'ArrowLeftRight';

export default ArrowLeftRight;
export { ArrowLeftRight };
