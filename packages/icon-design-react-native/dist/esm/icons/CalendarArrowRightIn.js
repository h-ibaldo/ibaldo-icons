import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CalendarArrowRightIn = forwardRef(function CalendarArrowRightIn(
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
    createElement(Path, {"d":"M3 22L20 22C21.105 22 22 21.105 22 20L22 6C22 4.895 21.105 4 20 4L4 4C2.895 4 2 4.895 2 6L2 10","key":"0"}),
    createElement(Path, {"d":"M8 2L8 6","key":"1"}),
    createElement(Path, {"d":"M16 2L16 6","key":"2"}),
    createElement(Path, {"d":"M2 10L22 10","key":"3"}),
    createElement(Path, {"d":"M9 14L11 16L9 18","key":"4"}),
    createElement(Path, {"d":"M11 16L2 16","key":"5"})
  );
});

CalendarArrowRightIn.displayName = 'CalendarArrowRightIn';

export default CalendarArrowRightIn;
export { CalendarArrowRightIn };
