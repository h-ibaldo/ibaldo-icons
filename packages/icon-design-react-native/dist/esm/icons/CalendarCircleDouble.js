import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CalendarCircleDouble = forwardRef(function CalendarCircleDouble(
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
    createElement(Path, {"d":"M8 2L8 6","key":"0"}),
    createElement(Path, {"d":"M16 2L16 6","key":"1"}),
    createElement(Path, {"d":"M22 12L22 6C22 4.895 21.105 4 20 4L4 4C2.895 4 2 4.895 2 6L2 20C2 21.105 2.895 22 4 22L12 22","key":"2"}),
    createElement(Path, {"d":"M22 18.5C22 20.434 20.434 22 18.5 22C16.566 22 15 20.434 15 18.5C15 16.566 16.566 15 18.5 15C20.434 15 22 16.566 22 18.5Z","key":"3"}),
    createElement(Path, {"d":"M17.945 15.055C17.973 14.875 18 14.691 18 14.5C18 12.566 16.434 11 14.5 11C12.566 11 11 12.566 11 14.5C11 16.434 12.566 18 14.5 18C14.691 18 14.875 17.973 15.055 17.945","key":"4"})
  );
});

CalendarCircleDouble.displayName = 'CalendarCircleDouble';

export default CalendarCircleDouble;
export { CalendarCircleDouble };
