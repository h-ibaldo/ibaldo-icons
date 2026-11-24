import { createElement, forwardRef } from 'react';

const CalendarOff = forwardRef(function CalendarOff(
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
    createElement('path', {"d":"M2 18L2 6C2 4.895 2.895 4 4 4L16 4","key":"0"}),
    createElement('path', {"d":"M22 7L22 20C22 21.105 21.105 22 20 22L6 22","key":"1"}),
    createElement('path', {"d":"M8 2L8 6","key":"2"}),
    createElement('path', {"d":"M16 2L16 4","key":"3"}),
    createElement('path', {"d":"M18.031 10L22 10","key":"4"}),
    createElement('path', {"d":"M2 10L10 10","key":"5"}),
    createElement('path', {"d":"M2 22L22 2","key":"6"})
  );
});

CalendarOff.displayName = 'CalendarOff';

export default CalendarOff;
export { CalendarOff };
