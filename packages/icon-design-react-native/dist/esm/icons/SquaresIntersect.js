import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SquaresIntersect = forwardRef(function SquaresIntersect(
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
    createElement(Path, {"d":"M4 16C2.895 16 2 15.105 2 14","key":"0"}),
    createElement(Path, {"d":"M14 2C15.105 2 16 2.895 16 4","key":"1"}),
    createElement(Path, {"d":"M2 4C2 2.895 2.895 2 4 2","key":"2"}),
    createElement(Path, {"d":"M8 2L10 2","key":"3"}),
    createElement(Path, {"d":"M2 10L2 8","key":"4"}),
    createElement(Path, {"d":"M10 22C8.895 22 8 21.105 8 20","key":"5"}),
    createElement(Path, {"d":"M20 8C21.105 8 22 8.895 22 10","key":"6"}),
    createElement(Path, {"d":"M22 20C22 21.105 21.105 22 20 22","key":"7"}),
    createElement(Path, {"d":"M16 22L14 22","key":"8"}),
    createElement(Path, {"d":"M22 16L22 14","key":"9"}),
    createElement(Path, {"d":"M10 8L16 8L16 14C16 15.105 15.105 16 14 16L8 16L8 10C8 8.895 8.895 8 10 8Z","key":"10"})
  );
});

SquaresIntersect.displayName = 'SquaresIntersect';

export default SquaresIntersect;
export { SquaresIntersect };
