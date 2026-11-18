import { createElement, forwardRef } from 'react';

const CalendarSearchHeader = forwardRef(function CalendarSearchHeader(
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
    createElement('path', {"d":"M11 22L4 22C2.895 22 2 21.105 2 20L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 11","key":"0"}),
    createElement('path', {"d":"M8 2L8 6","key":"1"}),
    createElement('path', {"d":"M16 2L16 6","key":"2"}),
    createElement('path', {"d":"M2 9L22 9","key":"3"}),
    createElement('path', {"d":"M20 16.5C20 18.434 18.434 20 16.5 20C14.566 20 13 18.434 13 16.5C13 14.566 14.566 13 16.5 13C18.434 13 20 14.566 20 16.5Z","key":"4"}),
    createElement('path', {"d":"M22 22L19 19","key":"5"})
  );
});

CalendarSearchHeader.displayName = 'CalendarSearchHeader';

export default CalendarSearchHeader;
export { CalendarSearchHeader };
