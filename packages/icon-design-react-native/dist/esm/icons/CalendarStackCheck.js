import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CalendarStackCheck = forwardRef(function CalendarStackCheck(
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
    createElement(Path, {"d":"M8 2L7.922 4","key":"0"}),
    createElement(Path, {"d":"M14.078 2L14 4","key":"1"}),
    createElement(Path, {"d":"M19 6L21.07 6C21.586 6 22 6.449 22 7L22 21C22 21.551 21.586 22 21.07 22L9.008 22C8.492 22 8.078 21.551 8.078 21L8.078 18","key":"2"}),
    createElement(Path, {"d":"M8 11L10 13L14 9","key":"3"}),
    createElement(Path, {"d":"M5 3L17 3C17.551 3 18 3.449 18 4L18 12.93C18 14.254 17.473 15.527 16.535 16.465L15.262 17.738C15.094 17.906 14.867 18 14.629 18L3.172 18C2.371 18 1.969 17.031 2.535 16.465C3.473 15.527 4 14.254 4 12.93L4 4C4 3.449 4.449 3 5 3Z","key":"4"})
  );
});

CalendarStackCheck.displayName = 'CalendarStackCheck';

export default CalendarStackCheck;
export { CalendarStackCheck };
