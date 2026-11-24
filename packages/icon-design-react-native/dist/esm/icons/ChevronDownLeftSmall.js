import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronDownLeftSmall = forwardRef(function ChevronDownLeftSmall(
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
    createElement(Path, {"d":"M10 9L10 14L15 14","key":"0"})
  );
});

ChevronDownLeftSmall.displayName = 'ChevronDownLeftSmall';

export default ChevronDownLeftSmall;
export { ChevronDownLeftSmall };
