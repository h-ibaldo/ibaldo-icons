import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MonitorCode = forwardRef(function MonitorCode(
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
    createElement(Path, {"d":"M13 7L11 13","key":"0"}),
    createElement(Path, {"d":"M16 8L18 10L16 12","key":"1"}),
    createElement(Path, {"d":"M8 8L6 10L8 12","key":"2"}),
    createElement(Path, {"d":"M20 17L4 17C2.895 17 2 16.105 2 15L2 5C2 3.895 2.895 3 4 3L20 3C21.105 3 22 3.895 22 5L22 15C22 16.105 21.105 17 20 17Z","key":"3"}),
    createElement(Path, {"d":"M5 21L19 21","key":"4"}),
    createElement(Path, {"d":"M12 17L12 21","key":"5"})
  );
});

MonitorCode.displayName = 'MonitorCode';

export default MonitorCode;
export { MonitorCode };
