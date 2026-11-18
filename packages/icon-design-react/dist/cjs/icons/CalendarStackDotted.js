'use strict';

const { createElement, forwardRef } = require('react');

const CalendarStackDotted = forwardRef(function CalendarStackDotted(
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
    createElement('path', {"d":"M8 2L7.922 4","key":"0"}),
    createElement('path', {"d":"M14.078 2L14 4","key":"1"}),
    createElement('path', {"d":"M8.078 18L8.078 21C8.078 21.551 8.496 22 9.008 22L21.07 22C21.586 22 22 21.551 22 21L22 7C22 6.449 21.555 6 21 6L18 6","key":"2"}),
    createElement('path', {"d":"M5 3L17 3C17.551 3 18 3.449 18 4L18 12.93C18 14.254 17.473 15.527 16.535 16.465L15.262 17.738C15.094 17.906 14.867 18 14.629 18L3.172 18C2.371 18 1.969 17.031 2.535 16.465C3.473 15.527 4 14.254 4 12.93L4 4C4 3.449 4.449 3 5 3Z","key":"3"}),
    createElement('path', {"d":"M8 8L8 8","key":"4"}),
    createElement('path', {"d":"M11 8L11 8","key":"5"}),
    createElement('path', {"d":"M14 8L14 8","key":"6"}),
    createElement('path', {"d":"M8 11L8 11","key":"7"}),
    createElement('path', {"d":"M11 11L11 11","key":"8"}),
    createElement('path', {"d":"M14 11L14 11","key":"9"}),
    createElement('path', {"d":"M8 14L8 14","key":"10"}),
    createElement('path', {"d":"M11 14L11 14","key":"11"})
  );
});

CalendarStackDotted.displayName = 'CalendarStackDotted';

module.exports = CalendarStackDotted;
module.exports.CalendarStackDotted = CalendarStackDotted;
module.exports.default = CalendarStackDotted;
