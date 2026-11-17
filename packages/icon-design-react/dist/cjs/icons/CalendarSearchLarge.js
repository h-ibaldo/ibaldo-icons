'use strict';

const { createElement, forwardRef } = require('react');

const CalendarSearchLarge = forwardRef(function CalendarSearchLarge(
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
    createElement('path', {"d":"M20 15.5C20 17.984 17.984 20 15.5 20C13.016 20 11 17.984 11 15.5C11 13.016 13.016 11 15.5 11C17.984 11 20 13.016 20 15.5Z","key":"2"}),
    createElement('path', {"d":"M22 22L19 19","key":"3"}),
    createElement('path', {"d":"M10 22L4 22C2.895 22 2 21.105 2 20L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 10","key":"4"})
  );
});

CalendarSearchLarge.displayName = 'CalendarSearchLarge';

module.exports = CalendarSearchLarge;
module.exports.CalendarSearchLarge = CalendarSearchLarge;
module.exports.default = CalendarSearchLarge;
