import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Timer = forwardRef(function Timer(
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
    createElement(Path, {"d":"M8 8L12 12","key":"0"}),
    createElement(Path, {"d":"M4.934 4.934C3.125 6.742 2 9.238 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2L12 5","key":"1"})
  );
});

Timer.displayName = 'Timer';

export default Timer;
export { Timer };
