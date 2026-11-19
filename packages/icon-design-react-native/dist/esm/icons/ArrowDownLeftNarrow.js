import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDownLeftNarrow = forwardRef(function ArrowDownLeftNarrow(
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
    createElement(Path, {"d":"M13 18L6 18L6 11","key":"0"}),
    createElement(Path, {"d":"M6 18L18 6","key":"1"})
  );
});

ArrowDownLeftNarrow.displayName = 'ArrowDownLeftNarrow';

export default ArrowDownLeftNarrow;
export { ArrowDownLeftNarrow };
