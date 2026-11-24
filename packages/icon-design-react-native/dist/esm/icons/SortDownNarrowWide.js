import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SortDownNarrowWide = forwardRef(function SortDownNarrowWide(
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
    createElement(Path, {"d":"M7 2L7 22","key":"0"}),
    createElement(Path, {"d":"M22 12L11 12","key":"1"}),
    createElement(Path, {"d":"M19 7L11 7","key":"2"}),
    createElement(Path, {"d":"M16 2L11 2","key":"3"}),
    createElement(Path, {"d":"M2 17L7 22L12 17","key":"4"})
  );
});

SortDownNarrowWide.displayName = 'SortDownNarrowWide';

export default SortDownNarrowWide;
export { SortDownNarrowWide };
