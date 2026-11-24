import { createElement, forwardRef } from 'react';

const CalendarEye = forwardRef(function CalendarEye(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('path', {"d":"M8 2L8 6","key":"0"}),
    createElement('path', {"d":"M16 2L16 6","key":"1"}),
    createElement('path', {"d":"M22 10L22 6C22 4.895 21.105 4 20 4L4 4C2.895 4 2 4.895 2 6L2 20C2 21.105 2.895 22 4 22L6 22","key":"2"}),
    createElement('path', {"d":"M15 18C14.449 18 14 17.551 14 17C14 16.449 14.449 16 15 16C15.551 16 16 16.449 16 17C16 17.551 15.551 18 15 18Z","key":"3"}),
    createElement('path', {"d":"M15 12C11.828 12 9.156 14.109 8.293 17C9.156 19.891 11.828 22 15 22C18.172 22 20.844 19.891 21.707 17C20.844 14.109 18.172 12 15 12Z","key":"4"})
  );
});

CalendarEye.displayName = 'CalendarEye';

export default CalendarEye;
export { CalendarEye };
