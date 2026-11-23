import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CalendarArrowUp = forwardRef(function CalendarArrowUp(
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
    createElement(Path, {"d":"M14 22L4 22C2.895 22 2 21.105 2 20L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 12","key":"0"}),
    createElement(Path, {"d":"M8 2L8 6","key":"1"}),
    createElement(Path, {"d":"M16 2L16 6","key":"2"}),
    createElement(Path, {"d":"M2 9L22 9","key":"3"}),
    createElement(Path, {"d":"M18 22L18 13","key":"4"}),
    createElement(Path, {"d":"M14 17L18 13L22 17","key":"5"})
  );
});

CalendarArrowUp.displayName = 'CalendarArrowUp';

export default CalendarArrowUp;
export { CalendarArrowUp };
