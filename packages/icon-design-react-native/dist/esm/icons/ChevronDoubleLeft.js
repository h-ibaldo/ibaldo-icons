import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronDoubleLeft = forwardRef(function ChevronDoubleLeft(
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
    createElement(Path, {"d":"M13 20L5 12L13 4","key":"0"}),
    createElement(Path, {"d":"M19 20L11 12L19 4","key":"1"})
  );
});

ChevronDoubleLeft.displayName = 'ChevronDoubleLeft';

export default ChevronDoubleLeft;
export { ChevronDoubleLeft };
