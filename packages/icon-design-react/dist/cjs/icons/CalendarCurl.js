'use strict';

const { createElement, forwardRef } = require('react');

const CalendarCurl = forwardRef(function CalendarCurl(
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
    createElement('path', {"d":"M6 3L6 7","key":"0"}),
    createElement('path', {"d":"M14 3L14 7","key":"1"}),
    createElement('path', {"d":"M2 11L18 11","key":"2"}),
    createElement('path', {"d":"M18 16L18 7C18 5.895 17.105 5 16 5L4 5C2.895 5 2 5.895 2 7L2 17C2 19.211 3.789 21 6 21C8.211 21 10 19.211 10 17L10 16L22 16L22 17C22 19.211 20.211 21 18 21L17 21","key":"3"}),
    createElement('path', {"d":"M6 21L18 21","key":"4"})
  );
});

CalendarCurl.displayName = 'CalendarCurl';

module.exports = CalendarCurl;
module.exports.CalendarCurl = CalendarCurl;
module.exports.default = CalendarCurl;
