import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SortUpWideNarrow = forwardRef(function SortUpWideNarrow(
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
    createElement(Path, {"d":"M7 22L7 2","key":"0"}),
    createElement(Path, {"d":"M22 12L11 12","key":"1"}),
    createElement(Path, {"d":"M19 17L11 17","key":"2"}),
    createElement(Path, {"d":"M16 22L11 22","key":"3"}),
    createElement(Path, {"d":"M12 7L7 2L2 7","key":"4"})
  );
});

SortUpWideNarrow.displayName = 'SortUpWideNarrow';

export default SortUpWideNarrow;
export { SortUpWideNarrow };
