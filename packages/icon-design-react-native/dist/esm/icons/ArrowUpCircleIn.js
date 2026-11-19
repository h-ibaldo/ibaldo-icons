import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUpCircleIn = forwardRef(function ArrowUpCircleIn(
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
    createElement(Path, {"d":"M9 12L12 9L15 12","key":"0"}),
    createElement(Path, {"d":"M12 22L12 9","key":"1"}),
    createElement(Path, {"d":"M17 20.648C19.984 18.918 22 15.699 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 15.699 4.016 18.918 7 20.648","key":"2"})
  );
});

ArrowUpCircleIn.displayName = 'ArrowUpCircleIn';

export default ArrowUpCircleIn;
export { ArrowUpCircleIn };
