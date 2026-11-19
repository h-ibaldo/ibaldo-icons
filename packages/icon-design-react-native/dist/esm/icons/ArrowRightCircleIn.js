import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowRightCircleIn = forwardRef(function ArrowRightCircleIn(
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
    createElement(Path, {"d":"M12 9L15 12L12 15","key":"0"}),
    createElement(Path, {"d":"M2 12L15 12","key":"1"}),
    createElement(Path, {"d":"M3.352 17C5.082 19.984 8.301 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C8.301 2 5.082 4.016 3.352 7","key":"2"})
  );
});

ArrowRightCircleIn.displayName = 'ArrowRightCircleIn';

export default ArrowRightCircleIn;
export { ArrowRightCircleIn };
