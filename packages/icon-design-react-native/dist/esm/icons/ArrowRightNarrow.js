import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowRightNarrow = forwardRef(function ArrowRightNarrow(
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
    createElement(Path, {"d":"M15 7L20 12L15 17","key":"0"}),
    createElement(Path, {"d":"M4 12L20 12","key":"1"})
  );
});

ArrowRightNarrow.displayName = 'ArrowRightNarrow';

export default ArrowRightNarrow;
export { ArrowRightNarrow };
