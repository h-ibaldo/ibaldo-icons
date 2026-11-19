import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUpRightNarrow = forwardRef(function ArrowUpRightNarrow(
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
    createElement(Path, {"d":"M11 6L18 6L18 13","key":"0"}),
    createElement(Path, {"d":"M18 6L6 18","key":"1"})
  );
});

ArrowUpRightNarrow.displayName = 'ArrowUpRightNarrow';

export default ArrowUpRightNarrow;
export { ArrowUpRightNarrow };
