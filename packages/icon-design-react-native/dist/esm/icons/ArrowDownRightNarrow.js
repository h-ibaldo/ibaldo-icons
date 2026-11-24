import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDownRightNarrow = forwardRef(function ArrowDownRightNarrow(
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
    createElement(Path, {"d":"M18 11L18 18L11 18","key":"0"}),
    createElement(Path, {"d":"M18 18L6 6","key":"1"})
  );
});

ArrowDownRightNarrow.displayName = 'ArrowDownRightNarrow';

export default ArrowDownRightNarrow;
export { ArrowDownRightNarrow };
