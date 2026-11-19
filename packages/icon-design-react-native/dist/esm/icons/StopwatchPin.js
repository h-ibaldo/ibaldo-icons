import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const StopwatchPin = forwardRef(function StopwatchPin(
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
    createElement(Path, {"d":"M6 4L4 6","key":"0"}),
    createElement(Path, {"d":"M20 4L22 6","key":"1"}),
    createElement(Path, {"d":"M11 2L15 2","key":"2"}),
    createElement(Path, {"d":"M13 2L13 5","key":"3"}),
    createElement(Path, {"d":"M6 16L6 16","key":"4"}),
    createElement(Path, {"d":"M6 12C8.211 12 10 13.789 10 16C10 19 6 22 6 22C6 22 2 19 2 16C2 13.789 3.789 12 6 12","key":"5"}),
    createElement(Path, {"d":"M8.457 19.582C9.746 20.473 11.309 21 13 21C17.418 21 21 17.418 21 13C21 8.582 17.418 5 13 5C8.879 5 5.484 8.117 5.051 12.125","key":"6"}),
    createElement(Path, {"d":"M13 9L13 13","key":"7"})
  );
});

StopwatchPin.displayName = 'StopwatchPin';

export default StopwatchPin;
export { StopwatchPin };
