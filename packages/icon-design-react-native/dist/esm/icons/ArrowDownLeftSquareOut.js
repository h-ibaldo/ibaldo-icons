import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDownLeftSquareOut = forwardRef(function ArrowDownLeftSquareOut(
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
    createElement(Path, {"d":"M9.004 21L3.004 21L3.004 15","key":"0"}),
    createElement(Path, {"d":"M11.004 13L3.004 21","key":"1"}),
    createElement(Path, {"d":"M13 17.98L19 17.98C20.105 17.98 21 17.082 21 15.98L21 4.98C21 3.875 20.105 2.98 19 2.98L8 2.98C6.895 2.98 6 3.875 6 4.98L6 10.98","key":"2"})
  );
});

ArrowDownLeftSquareOut.displayName = 'ArrowDownLeftSquareOut';

export default ArrowDownLeftSquareOut;
export { ArrowDownLeftSquareOut };
