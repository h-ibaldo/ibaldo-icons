import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CalendarOff = forwardRef(function CalendarOff(
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
    createElement(Path, {"d":"M2 18L2 6C2 4.895 2.895 4 4 4L16 4","key":"0"}),
    createElement(Path, {"d":"M22 7L22 20C22 21.105 21.105 22 20 22L6 22","key":"1"}),
    createElement(Path, {"d":"M8 2L8 6","key":"2"}),
    createElement(Path, {"d":"M16 2L16 4","key":"3"}),
    createElement(Path, {"d":"M18.031 10L22 10","key":"4"}),
    createElement(Path, {"d":"M2 10L10 10","key":"5"}),
    createElement(Path, {"d":"M2 22L22 2","key":"6"})
  );
});

CalendarOff.displayName = 'CalendarOff';

export default CalendarOff;
export { CalendarOff };
