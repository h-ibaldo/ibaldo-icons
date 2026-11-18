import { createElement, forwardRef } from 'react';

const CalendarWarning = forwardRef(function CalendarWarning(
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
    createElement('path', {"d":"M5 22L4 22C2.895 22 2 21.105 2 20L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 12","key":"0"}),
    createElement('path', {"d":"M8 2L8 6","key":"1"}),
    createElement('path', {"d":"M16 2L16 6","key":"2"}),
    createElement('path', {"d":"M15 15L15 16","key":"3"}),
    createElement('path', {"d":"M15 19L15 19","key":"4"}),
    createElement('path', {"d":"M10.445 22L19.555 22C21.09 22 22.051 20.34 21.289 19.008L17.133 11.734C16.191 10.082 13.809 10.082 12.867 11.734L8.711 19.008C7.949 20.34 8.91 22 10.445 22Z","key":"5"})
  );
});

CalendarWarning.displayName = 'CalendarWarning';

export default CalendarWarning;
export { CalendarWarning };
