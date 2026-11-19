import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronDoubleUpRight = forwardRef(function ChevronDoubleUpRight(
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
    createElement(Path, {"d":"M8 4L20 4L20 16","key":"0"}),
    createElement(Path, {"d":"M4 8L16 8L16 20","key":"1"})
  );
});

ChevronDoubleUpRight.displayName = 'ChevronDoubleUpRight';

export default ChevronDoubleUpRight;
export { ChevronDoubleUpRight };
