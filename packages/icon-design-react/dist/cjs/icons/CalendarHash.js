'use strict';

const { createElement, forwardRef } = require('react');

const CalendarHash = forwardRef(function CalendarHash(
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
    createElement('path', {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 20C22 21.105 21.105 22 20 22Z","key":"0"}),
    createElement('path', {"d":"M8 2L8 6","key":"1"}),
    createElement('path', {"d":"M16 2L16 6","key":"2"}),
    createElement('path', {"d":"M2 10L22 10","key":"3"}),
    createElement('path', {"d":"M5 16L19 16","key":"4"}),
    createElement('path', {"d":"M9 13L9 19","key":"5"}),
    createElement('path', {"d":"M15 13L15 19","key":"6"})
  );
});

CalendarHash.displayName = 'CalendarHash';

module.exports = CalendarHash;
module.exports.CalendarHash = CalendarHash;
module.exports.default = CalendarHash;
