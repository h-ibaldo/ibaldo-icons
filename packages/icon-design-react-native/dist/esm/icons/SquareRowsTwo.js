import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SquareRowsTwo = forwardRef(function SquareRowsTwo(
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
    createElement(Path, {"d":"M2 12L22 12","key":"0"}),
    createElement(Path, {"d":"M2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22L4 22C2.895 22 2 21.105 2 20Z","key":"1"})
  );
});

SquareRowsTwo.displayName = 'SquareRowsTwo';

export default SquareRowsTwo;
export { SquareRowsTwo };
