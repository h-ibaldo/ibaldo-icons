import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowLeftSquareOut = forwardRef(function ArrowLeftSquareOut(
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
    createElement(Path, {"d":"M9 17L4 12L9 7","key":"0"}),
    createElement(Path, {"d":"M18 12L4 12","key":"1"}),
    createElement(Path, {"d":"M2 8.023L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22L4 22C2.895 22 2 21.105 2 20L2 16.023","key":"2"})
  );
});

ArrowLeftSquareOut.displayName = 'ArrowLeftSquareOut';

export default ArrowLeftSquareOut;
export { ArrowLeftSquareOut };
