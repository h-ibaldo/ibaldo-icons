import { createElement, forwardRef } from 'react';

const CalendarSearch = forwardRef(function CalendarSearch(
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
    createElement('path', {"d":"M20 16C20 18.211 18.211 20 16 20C13.789 20 12 18.211 12 16C12 13.789 13.789 12 16 12C18.211 12 20 13.789 20 16Z","key":"2"}),
    createElement('path', {"d":"M22 22L19 19","key":"3"}),
    createElement('path', {"d":"M11 22L4 22C2.895 22 2 21.105 2 20L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 11","key":"4"})
  );
});

CalendarSearch.displayName = 'CalendarSearch';

export default CalendarSearch;
export { CalendarSearch };
