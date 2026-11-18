import { createElement, forwardRef } from 'react';

const CalendarSevenFlip = forwardRef(function CalendarSevenFlip(
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
    createElement('path', {"d":"M20 14L21.379 8.484C21.695 7.223 20.738 6 19.438 6L4.563 6C3.262 6 2.305 7.223 2.621 8.484L4 14L2.621 19.516C2.305 20.777 3.262 22 4.563 22L19.438 22C20.738 22 21.695 20.777 21.379 19.516Z","key":"0"}),
    createElement('path', {"d":"M10 11L14 11L12 17","key":"1"}),
    createElement('path', {"d":"M4 6L4 4C4 2.895 5.023 2 6.285 2L17.715 2C18.977 2 20 2.895 20 4L20 6","key":"2"})
  );
});

CalendarSevenFlip.displayName = 'CalendarSevenFlip';

export default CalendarSevenFlip;
export { CalendarSevenFlip };
