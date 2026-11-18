import { createElement, forwardRef } from 'react';

const CalendarGridBox = forwardRef(function CalendarGridBox(
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
    createElement('path', {"d":"M22 20L22 6C22 4.895 21.105 4 20 4L4 4C2.895 4 2 4.895 2 6L2 20C2 21.105 2.895 22 4 22L20 22C21.105 22 22 21.105 22 20Z","key":"2"}),
    createElement('path', {"d":"M18 18L6 18L6 10L18 10Z","key":"3"}),
    createElement('path', {"d":"M6 14L18 14","key":"4"}),
    createElement('path', {"d":"M12 10L12 18","key":"5"})
  );
});

CalendarGridBox.displayName = 'CalendarGridBox';

export default CalendarGridBox;
export { CalendarGridBox };
