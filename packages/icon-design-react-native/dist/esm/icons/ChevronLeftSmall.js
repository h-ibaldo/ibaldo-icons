import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronLeftSmall = forwardRef(function ChevronLeftSmall(
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
    createElement(Path, {"d":"M13 9L10 12L13 15","key":"0"})
  );
});

ChevronLeftSmall.displayName = 'ChevronLeftSmall';

export default ChevronLeftSmall;
export { ChevronLeftSmall };
