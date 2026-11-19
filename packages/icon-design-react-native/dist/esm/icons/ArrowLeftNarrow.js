import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowLeftNarrow = forwardRef(function ArrowLeftNarrow(
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
    createElement(Path, {"d":"M9 7L4 12L9 17","key":"0"}),
    createElement(Path, {"d":"M20 12L4 12","key":"1"})
  );
});

ArrowLeftNarrow.displayName = 'ArrowLeftNarrow';

export default ArrowLeftNarrow;
export { ArrowLeftNarrow };
