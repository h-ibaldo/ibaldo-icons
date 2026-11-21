import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MonitorStop = forwardRef(function MonitorStop(
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
    createElement(Path, {"d":"M2 4L22 4L22 18L2 18Z","key":"0"}),
    createElement(Path, {"d":"M9 8L15 8L15 14L9 14Z","key":"1"}),
    createElement(Path, {"d":"M12 21L12 18","key":"2"}),
    createElement(Path, {"d":"M18 21L6 21","key":"3"})
  );
});

MonitorStop.displayName = 'MonitorStop';

export default MonitorStop;
export { MonitorStop };
