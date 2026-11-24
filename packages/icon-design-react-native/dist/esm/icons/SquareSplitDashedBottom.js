import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SquareSplitDashedBottom = forwardRef(function SquareSplitDashedBottom(
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
    createElement(Path, {"d":"M2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22L4 22C2.895 22 2 21.105 2 20Z","key":"0"}),
    createElement(Path, {"d":"M2 15L4 15","key":"1"}),
    createElement(Path, {"d":"M8 15L10 15","key":"2"}),
    createElement(Path, {"d":"M14 15L16 15","key":"3"}),
    createElement(Path, {"d":"M20 15L22 15","key":"4"})
  );
});

SquareSplitDashedBottom.displayName = 'SquareSplitDashedBottom';

export default SquareSplitDashedBottom;
export { SquareSplitDashedBottom };
