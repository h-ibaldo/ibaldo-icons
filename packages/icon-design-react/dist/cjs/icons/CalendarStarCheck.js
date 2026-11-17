'use strict';

const { createElement, forwardRef } = require('react');

const CalendarStarCheck = forwardRef(function CalendarStarCheck(
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
    createElement('path', {"d":"M8 2L8 4","key":"0"}),
    createElement('path', {"d":"M16 2L16 4","key":"1"}),
    createElement('path', {"d":"M22 13L22 5C22 3.895 21.105 3 20 3L4 3C2.895 3 2 3.895 2 5L2 20C2 21.105 2.895 22 4 22L12 22","key":"2"}),
    createElement('path', {"d":"M12.574 7.371L13.766 9.785L16.43 10.172C16.977 10.254 17.191 10.922 16.801 11.305L14.871 13.184L15.324 15.84C15.418 16.383 14.848 16.797 14.363 16.539L11.977 15.285L9.594 16.539C9.105 16.797 8.539 16.383 8.629 15.84L9.086 13.184L7.156 11.305C6.762 10.922 6.98 10.254 7.523 10.172L10.191 9.785L11.383 7.371C11.625 6.875 12.328 6.875 12.574 7.371Z","key":"3"}),
    createElement('path', {"d":"M16 20L18 22L22 17","key":"4"})
  );
});

CalendarStarCheck.displayName = 'CalendarStarCheck';

module.exports = CalendarStarCheck;
module.exports.CalendarStarCheck = CalendarStarCheck;
module.exports.default = CalendarStarCheck;
