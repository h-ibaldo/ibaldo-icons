import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CalendarOneBar = forwardRef(function CalendarOneBar(
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
    createElement(Path, {"d":"M19.777 22L4.223 22C2.996 22 2 21.004 2 19.777L2 4.223C2 2.996 2.996 2 4.223 2L19.777 2C21.004 2 22 2.996 22 4.223L22 19.777C22 21.004 21.004 22 19.777 22Z","key":"0"}),
    createElement(Path, {"d":"M7 6L17 6","key":"1"}),
    createElement(Path, {"d":"M11 11L12.5 11L12.5 18","key":"2"})
  );
});

CalendarOneBar.displayName = 'CalendarOneBar';

export default CalendarOneBar;
export { CalendarOneBar };
