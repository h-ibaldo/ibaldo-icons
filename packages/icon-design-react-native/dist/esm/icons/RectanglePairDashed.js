import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const RectanglePairDashed = forwardRef(function RectanglePairDashed(
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
    createElement(Path, {"d":"M16 22L20 22C21.105 22 22 21.105 22 20L22 4C22 2.895 21.105 2 20 2L16 2C14.895 2 14 2.895 14 4L14 20C14 21.105 14.895 22 16 22Z","key":"0"}),
    createElement(Path, {"d":"M10 2L8 2","key":"1"}),
    createElement(Path, {"d":"M8 22L10 22","key":"2"}),
    createElement(Path, {"d":"M4 2C2.895 2 2 2.895 2 4","key":"3"}),
    createElement(Path, {"d":"M2 8L2 10","key":"4"}),
    createElement(Path, {"d":"M2 14L2 16","key":"5"}),
    createElement(Path, {"d":"M2 20C2 21.105 2.895 22 4 22","key":"6"})
  );
});

RectanglePairDashed.displayName = 'RectanglePairDashed';

export default RectanglePairDashed;
export { RectanglePairDashed };
