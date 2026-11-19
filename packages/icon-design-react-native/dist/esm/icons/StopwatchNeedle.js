import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const StopwatchNeedle = forwardRef(function StopwatchNeedle(
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
    createElement(Path, {"d":"M20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13C4 8.582 7.582 5 12 5C16.418 5 20 8.582 20 13Z","key":"0"}),
    createElement(Path, {"d":"M10 2L14 2","key":"1"}),
    createElement(Path, {"d":"M15 10L12 13","key":"2"}),
    createElement(Path, {"d":"M20 5L22 7","key":"3"}),
    createElement(Path, {"d":"M21 6L18.563 8.434","key":"4"}),
    createElement(Path, {"d":"M4 5L2 7","key":"5"}),
    createElement(Path, {"d":"M3 6L5.434 8.434","key":"6"}),
    createElement(Path, {"d":"M13 13C13 12.449 12.555 12 12 12C11.445 12 11 12.449 11 13C11 13.555 11.445 14 12 14C12.555 14 13 13.555 13 13Z","key":"7"})
  );
});

StopwatchNeedle.displayName = 'StopwatchNeedle';

export default StopwatchNeedle;
export { StopwatchNeedle };
