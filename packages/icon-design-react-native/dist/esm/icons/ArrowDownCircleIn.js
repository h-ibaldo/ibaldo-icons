import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDownCircleIn = forwardRef(function ArrowDownCircleIn(
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
    createElement(Path, {"d":"M9 12L12 15L15 12","key":"0"}),
    createElement(Path, {"d":"M12 2L12 15","key":"1"}),
    createElement(Path, {"d":"M17 3.352C19.984 5.082 22 8.301 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 8.301 4.016 5.082 7 3.352","key":"2"})
  );
});

ArrowDownCircleIn.displayName = 'ArrowDownCircleIn';

export default ArrowDownCircleIn;
export { ArrowDownCircleIn };
