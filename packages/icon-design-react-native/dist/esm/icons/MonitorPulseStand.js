import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MonitorPulseStand = forwardRef(function MonitorPulseStand(
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
    createElement(Path, {"d":"M12 21L12 18","key":"1"}),
    createElement(Path, {"d":"M18 21L6 21","key":"2"}),
    createElement(Path, {"d":"M6 11L8 11L10 8L14 14L15 11L18 11","key":"3"})
  );
});

MonitorPulseStand.displayName = 'MonitorPulseStand';

export default MonitorPulseStand;
export { MonitorPulseStand };
