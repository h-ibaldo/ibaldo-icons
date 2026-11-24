import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CalendarBarsDots = forwardRef(function CalendarBarsDots(
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
    createElement(Path, {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 20C22 21.105 21.105 22 20 22Z","key":"0"}),
    createElement(Path, {"d":"M8 2L8 6","key":"1"}),
    createElement(Path, {"d":"M16 2L16 6","key":"2"}),
    createElement(Path, {"d":"M2 10L22 10","key":"3"}),
    createElement(Path, {"d":"M11.5 14L18 14","key":"4"}),
    createElement(Path, {"d":"M6 18L12.5 18","key":"5"}),
    createElement(Path, {"d":"M8 14L8 14","key":"6"}),
    createElement(Path, {"d":"M16 18L16 18","key":"7"})
  );
});

CalendarBarsDots.displayName = 'CalendarBarsDots';

export default CalendarBarsDots;
export { CalendarBarsDots };
