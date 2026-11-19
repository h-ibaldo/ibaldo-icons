import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUturnDownLong = forwardRef(function ArrowUturnDownLong(
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
    createElement(Path, {"d":"M12 17L16 21L20 17","key":"0"}),
    createElement(Path, {"d":"M16 21L16 9C16 5.688 13.313 3 10 3C6.688 3 4 5.688 4 9L4 20","key":"1"})
  );
});

ArrowUturnDownLong.displayName = 'ArrowUturnDownLong';

export default ArrowUturnDownLong;
export { ArrowUturnDownLong };
