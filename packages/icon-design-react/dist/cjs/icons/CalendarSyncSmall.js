'use strict';

const { createElement, forwardRef } = require('react');

const CalendarSyncSmall = forwardRef(function CalendarSyncSmall(
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
    createElement('path', {"d":"M21 8L21 6C21 4.895 20.105 4 19 4L5 4C3.895 4 3 4.895 3 6L3 19C3 20.105 3.895 21 5 21L7 21","key":"2"}),
    createElement('path', {"d":"M22 12L22 15L19 15","key":"3"}),
    createElement('path', {"d":"M11 21L11 18L14 18","key":"4"}),
    createElement('path', {"d":"M21.578 15C20.805 13.234 19.051 12 17 12C15.371 12 13.934 12.793 13.023 14","key":"5"}),
    createElement('path', {"d":"M12.102 18C12.563 20.281 14.582 22 17 22C19.047 22 20.797 20.762 21.57 19","key":"6"})
  );
});

CalendarSyncSmall.displayName = 'CalendarSyncSmall';

module.exports = CalendarSyncSmall;
module.exports.CalendarSyncSmall = CalendarSyncSmall;
module.exports.default = CalendarSyncSmall;
