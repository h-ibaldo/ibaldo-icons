import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MonitorXCorner = forwardRef(function MonitorXCorner(
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
    createElement(Path, {"d":"M22 13L22 18L2 18L2 4L13 4","key":"0"}),
    createElement(Path, {"d":"M12 21L12 18","key":"1"}),
    createElement(Path, {"d":"M18 21L6 21","key":"2"}),
    createElement(Path, {"d":"M17 9L22 4","key":"3"}),
    createElement(Path, {"d":"M17 4L22 9","key":"4"})
  );
});

MonitorXCorner.displayName = 'MonitorXCorner';

export default MonitorXCorner;
export { MonitorXCorner };
