import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ClockTicks = forwardRef(function ClockTicks(
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
    createElement(Path, {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z","key":"0"}),
    createElement(Path, {"d":"M12 8L12 12L16 12","key":"1"}),
    createElement(Path, {"d":"M12 4L12 2","key":"2"}),
    createElement(Path, {"d":"M12 22L12 20","key":"3"}),
    createElement(Path, {"d":"M20 12L22 12","key":"4"}),
    createElement(Path, {"d":"M2 12L4 12","key":"5"}),
    createElement(Path, {"d":"M17.656 6.344L19.07 4.93","key":"6"}),
    createElement(Path, {"d":"M4.93 19.07L6.344 17.656","key":"7"}),
    createElement(Path, {"d":"M17.656 17.656L19.07 19.07","key":"8"}),
    createElement(Path, {"d":"M4.93 4.93L6.344 6.344","key":"9"})
  );
});

ClockTicks.displayName = 'ClockTicks';

export default ClockTicks;
export { ClockTicks };
