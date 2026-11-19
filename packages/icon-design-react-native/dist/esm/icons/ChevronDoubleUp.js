import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronDoubleUp = forwardRef(function ChevronDoubleUp(
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
    createElement(Path, {"d":"M4 13L12 5L20 13","key":"0"}),
    createElement(Path, {"d":"M4 19L12 11L20 19","key":"1"})
  );
});

ChevronDoubleUp.displayName = 'ChevronDoubleUp';

export default ChevronDoubleUp;
export { ChevronDoubleUp };
