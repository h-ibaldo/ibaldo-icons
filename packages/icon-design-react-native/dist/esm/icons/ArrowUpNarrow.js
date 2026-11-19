import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUpNarrow = forwardRef(function ArrowUpNarrow(
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
    createElement(Path, {"d":"M7 9L12 4L17 9","key":"0"}),
    createElement(Path, {"d":"M12 4L12 20","key":"1"})
  );
});

ArrowUpNarrow.displayName = 'ArrowUpNarrow';

export default ArrowUpNarrow;
export { ArrowUpNarrow };
