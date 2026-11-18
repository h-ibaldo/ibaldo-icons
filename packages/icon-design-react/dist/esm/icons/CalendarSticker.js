import { createElement, forwardRef } from 'react';

const CalendarSticker = forwardRef(function CalendarSticker(
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
    createElement('path', {"d":"M22 19.949C22 21.082 21.082 22 19.949 22","key":"0"}),
    createElement('path', {"d":"M19.789 22L13.211 22C11.988 22 11 21.012 11 19.789L11 13.211C11 11.988 11.988 11 13.211 11L19.789 11C21.012 11 22 11.988 22 13.211L22 19.789C22 21.012 21.012 22 19.789 22Z","key":"1"}),
    createElement('path', {"d":"M16 22C16 18.688 18.688 16 22 16","key":"2"}),
    createElement('path', {"d":"M15 15L15 15","key":"3"}),
    createElement('path', {"d":"M8 2L8 6","key":"4"}),
    createElement('path', {"d":"M16 2L16 6","key":"5"}),
    createElement('path', {"d":"M21 11.363L21 6C21 4.895 20.105 4 19 4L5 4C3.895 4 3 4.895 3 6L3 19C3 20.105 3.895 21 5 21L11.363 21","key":"6"})
  );
});

CalendarSticker.displayName = 'CalendarSticker';

export default CalendarSticker;
export { CalendarSticker };
