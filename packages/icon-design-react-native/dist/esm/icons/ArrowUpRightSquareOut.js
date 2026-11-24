import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUpRightSquareOut = forwardRef(function ArrowUpRightSquareOut(
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
    createElement(Path, {"d":"M15 2.98L21 2.98L21 8.98","key":"0"}),
    createElement(Path, {"d":"M13 10.98L21 2.98","key":"1"}),
    createElement(Path, {"d":"M11.004 6L5.004 6C3.898 6 3.004 6.895 3.004 8L3.004 19C3.004 20.105 3.898 21 5.004 21L16.004 21C17.109 21 18.004 20.105 18.004 19L18.004 13","key":"2"})
  );
});

ArrowUpRightSquareOut.displayName = 'ArrowUpRightSquareOut';

export default ArrowUpRightSquareOut;
export { ArrowUpRightSquareOut };
