import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SquareDashedXCorner = forwardRef(function SquareDashedXCorner(
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
    createElement(Path, {"d":"M4 22C2.895 22 2 21.105 2 20","key":"0"}),
    createElement(Path, {"d":"M20 2C21.105 2 22 2.895 22 4","key":"1"}),
    createElement(Path, {"d":"M2 4C2 2.895 2.895 2 4 2","key":"2"}),
    createElement(Path, {"d":"M8 2L10 2","key":"3"}),
    createElement(Path, {"d":"M10 22L8 22","key":"4"}),
    createElement(Path, {"d":"M14 2L16 2","key":"5"}),
    createElement(Path, {"d":"M2 16L2 14","key":"6"}),
    createElement(Path, {"d":"M2 10L2 8","key":"7"}),
    createElement(Path, {"d":"M22 10L22 8","key":"8"}),
    createElement(Path, {"d":"M16 22.082L22.082 16","key":"9"}),
    createElement(Path, {"d":"M16 16L22.082 22.082","key":"10"})
  );
});

SquareDashedXCorner.displayName = 'SquareDashedXCorner';

export default SquareDashedXCorner;
export { SquareDashedXCorner };
