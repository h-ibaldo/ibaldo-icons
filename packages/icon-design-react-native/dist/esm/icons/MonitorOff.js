import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MonitorOff = forwardRef(function MonitorOff(
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
    createElement(Path, {"d":"M21 3.75L21 17L3.332 17","key":"0"}),
    createElement(Path, {"d":"M3 13L3 4L15 4","key":"1"}),
    createElement(Path, {"d":"M12 21L12 17","key":"2"}),
    createElement(Path, {"d":"M18 21L6 21","key":"3"}),
    createElement(Path, {"d":"M2 18L22 3","key":"4"})
  );
});

MonitorOff.displayName = 'MonitorOff';

export default MonitorOff;
export { MonitorOff };
