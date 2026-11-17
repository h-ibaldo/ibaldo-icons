'use strict';

const { createElement, forwardRef } = require('react');

const CalendarEditText = forwardRef(function CalendarEditText(
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
    createElement('path', {"d":"M21.551 7.621L21.547 7.621C20.719 6.793 19.379 6.793 18.551 7.621L11.172 15L11.172 18L14.172 18L21.551 10.621C22.379 9.793 22.379 8.449 21.551 7.621Z","key":"0"}),
    createElement('path', {"d":"M17.051 9.121L20.051 12.121","key":"1"}),
    createElement('path', {"d":"M7.172 2L7.172 6","key":"2"}),
    createElement('path', {"d":"M15.172 2L15.172 6","key":"3"}),
    createElement('path', {"d":"M18.172 4L4.172 4C3.066 4 2.172 4.895 2.172 6L2.172 20C2.172 21.105 3.066 22 4.172 22L18.172 22C19.277 22 20.172 21.105 20.172 20L20.172 17","key":"4"}),
    createElement('path', {"d":"M6 10L11 10","key":"5"}),
    createElement('path', {"d":"M6 14L8 14","key":"6"}),
    createElement('path', {"d":"M6 18L11 18","key":"7"})
  );
});

CalendarEditText.displayName = 'CalendarEditText';

module.exports = CalendarEditText;
module.exports.CalendarEditText = CalendarEditText;
module.exports.default = CalendarEditText;
