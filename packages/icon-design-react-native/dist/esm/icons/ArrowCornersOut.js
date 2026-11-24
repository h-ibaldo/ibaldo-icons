import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowCornersOut = forwardRef(function ArrowCornersOut(
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
    createElement(Path, {"d":"M2 2L9 9","key":"0"}),
    createElement(Path, {"d":"M15 15L22 22","key":"1"}),
    createElement(Path, {"d":"M2 22L9 15","key":"2"}),
    createElement(Path, {"d":"M15 9L22 2","key":"3"}),
    createElement(Path, {"d":"M2 7L2 2L7 2","key":"4"}),
    createElement(Path, {"d":"M22 17L22 22L17 22","key":"5"}),
    createElement(Path, {"d":"M7 22L2 22L2 17","key":"6"}),
    createElement(Path, {"d":"M17 2L22 2L22 7","key":"7"})
  );
});

ArrowCornersOut.displayName = 'ArrowCornersOut';

export default ArrowCornersOut;
export { ArrowCornersOut };
