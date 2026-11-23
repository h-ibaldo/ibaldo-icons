import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BetweenVerticalEnd = forwardRef(function BetweenVerticalEnd(
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
    createElement(Path, {"d":"M8 21L12.242 16.758L16.484 21","key":"0"}),
    createElement(Path, {"d":"M2 13L2 3L10 3L10 13Z","key":"1"}),
    createElement(Path, {"d":"M14 13L14 3L22 3L22 13Z","key":"2"})
  );
});

BetweenVerticalEnd.displayName = 'BetweenVerticalEnd';

export default BetweenVerticalEnd;
export { BetweenVerticalEnd };
