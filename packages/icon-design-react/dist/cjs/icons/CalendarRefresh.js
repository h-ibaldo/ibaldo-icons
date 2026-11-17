'use strict';

const { createElement, forwardRef } = require('react');

const CalendarRefresh = forwardRef(function CalendarRefresh(
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
    createElement('path', {"d":"M21 7L21 6C21 4.895 20.105 4 19 4L5 4C3.895 4 3 4.895 3 6L3 19C3 20.105 3.895 21 5 21L6 21","key":"2"}),
    createElement('path', {"d":"M10 22L10 18L14 18","key":"3"}),
    createElement('path', {"d":"M10.348 18C11.172 20.328 13.391 22 16 22C19.313 22 22 19.313 22 16C22 12.688 19.313 10 16 10C13.391 10 11.172 11.672 10.348 14","key":"4"})
  );
});

CalendarRefresh.displayName = 'CalendarRefresh';

module.exports = CalendarRefresh;
module.exports.CalendarRefresh = CalendarRefresh;
module.exports.default = CalendarRefresh;
