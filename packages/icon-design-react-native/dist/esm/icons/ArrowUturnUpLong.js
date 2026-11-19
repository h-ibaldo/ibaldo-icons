import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUturnUpLong = forwardRef(function ArrowUturnUpLong(
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
    createElement(Path, {"d":"M12 7L16 3L20 7","key":"0"}),
    createElement(Path, {"d":"M16 3L16 15C16 18.313 13.313 21 10 21C6.688 21 4 18.313 4 15L4 4","key":"1"})
  );
});

ArrowUturnUpLong.displayName = 'ArrowUturnUpLong';

export default ArrowUturnUpLong;
export { ArrowUturnUpLong };
