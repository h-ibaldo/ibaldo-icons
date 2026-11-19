import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const StopwatchClockwise = forwardRef(function StopwatchClockwise(
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
    createElement(Path, {"d":"M5 5L3 7","key":"0"}),
    createElement(Path, {"d":"M19 5L21 7","key":"1"}),
    createElement(Path, {"d":"M10 3L14 3","key":"2"}),
    createElement(Path, {"d":"M12 3L12 6","key":"3"}),
    createElement(Path, {"d":"M4 21L4 17L8 17","key":"4"}),
    createElement(Path, {"d":"M5.07 18C6.453 20.391 9.039 22 12 22C16.418 22 20 18.418 20 14C20 9.582 16.418 6 12 6C7.922 6 4.563 9.055 4.07 13","key":"5"}),
    createElement(Path, {"d":"M12 10L12 14","key":"6"})
  );
});

StopwatchClockwise.displayName = 'StopwatchClockwise';

export default StopwatchClockwise;
export { StopwatchClockwise };
