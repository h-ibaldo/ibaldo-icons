import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronUpSmall = forwardRef(function ChevronUpSmall(
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
    createElement(Path, {"d":"M9 13L12 10L15 13","key":"0"})
  );
});

ChevronUpSmall.displayName = 'ChevronUpSmall';

export default ChevronUpSmall;
export { ChevronUpSmall };
