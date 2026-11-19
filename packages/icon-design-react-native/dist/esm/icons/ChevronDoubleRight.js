import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronDoubleRight = forwardRef(function ChevronDoubleRight(
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
    createElement(Path, {"d":"M11 4L19 12L11 20","key":"0"}),
    createElement(Path, {"d":"M5 4L13 12L5 20","key":"1"})
  );
});

ChevronDoubleRight.displayName = 'ChevronDoubleRight';

export default ChevronDoubleRight;
export { ChevronDoubleRight };
