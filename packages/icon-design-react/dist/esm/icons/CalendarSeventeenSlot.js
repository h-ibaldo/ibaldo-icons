import { createElement, forwardRef } from 'react';

const CalendarSeventeenSlot = forwardRef(function CalendarSeventeenSlot(
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
    createElement('path', {"d":"M19.777 22L4.223 22C2.996 22 2 21.004 2 19.777L2 4.223C2 2.996 2.996 2 4.223 2L19.777 2C21.004 2 22 2.996 22 4.223L22 19.777C22 21.004 21.004 22 19.777 22Z","key":"0"}),
    createElement('path', {"d":"M7 6L9 6","key":"1"}),
    createElement('path', {"d":"M15 6L17 6","key":"2"}),
    createElement('path', {"d":"M13 11L17 11L14 18","key":"3"}),
    createElement('path', {"d":"M8 11L9 11L9 18","key":"4"})
  );
});

CalendarSeventeenSlot.displayName = 'CalendarSeventeenSlot';

export default CalendarSeventeenSlot;
export { CalendarSeventeenSlot };
