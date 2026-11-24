'use strict';

const { createElement, forwardRef } = require('react');

const CalendarCake = forwardRef(function CalendarCake(
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
    createElement('path', {"d":"M2 20L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 7","key":"0"}),
    createElement('path', {"d":"M8 2L8 6","key":"1"}),
    createElement('path', {"d":"M16 2L16 6","key":"2"}),
    createElement('path', {"d":"M6 22L22 22","key":"3"}),
    createElement('path', {"d":"M8 22L8 16L20 16L20 22","key":"4"}),
    createElement('path', {"d":"M10 14L10 16","key":"5"}),
    createElement('path', {"d":"M14 14L14 16","key":"6"}),
    createElement('path', {"d":"M18 14L18 16","key":"7"}),
    createElement('path', {"d":"M11 11L10 10","key":"8"}),
    createElement('path', {"d":"M15 11L14 10","key":"9"}),
    createElement('path', {"d":"M19 11L18 10","key":"10"})
  );
});

CalendarCake.displayName = 'CalendarCake';

module.exports = CalendarCake;
module.exports.CalendarCake = CalendarCake;
module.exports.default = CalendarCake;
