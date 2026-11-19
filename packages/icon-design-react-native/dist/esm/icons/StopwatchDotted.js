import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const StopwatchDotted = forwardRef(function StopwatchDotted(
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
    createElement(Path, {"d":"M12 9.5L12 14","key":"4"}),
    createElement(Path, {"d":"M12 6C16.418 6 20 9.582 20 14C20 18.418 16.418 22 12 22C7.582 22 4 18.418 4 14","key":"5"}),
    createElement(Path, {"d":"M12 6C7.582 6 4 9.582 4 14","strokeDasharray":"0 3.2","key":"6"})
  );
});

StopwatchDotted.displayName = 'StopwatchDotted';

export default StopwatchDotted;
export { StopwatchDotted };
