'use strict';

const { createElement, forwardRef } = require('react');

const CalendarClockCenter = forwardRef(function CalendarClockCenter(
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
    createElement('path', {"d":"M12 14L12 16L14 16","key":"2"}),
    createElement('path', {"d":"M18 16C18 19.313 15.313 22 12 22C8.688 22 6 19.313 6 16C6 12.688 8.688 10 12 10C15.313 10 18 12.688 18 16Z","key":"3"}),
    createElement('path', {"d":"M16.465 20L20.113 20C21.156 20 22 19.156 22 18.113L22 5.887C22 4.844 21.156 4 20.113 4L3.887 4C2.844 4 2 4.844 2 5.887L2 18.113C2 19.156 2.844 20 3.887 20L7.539 20","key":"4"})
  );
});

CalendarClockCenter.displayName = 'CalendarClockCenter';

module.exports = CalendarClockCenter;
module.exports.CalendarClockCenter = CalendarClockCenter;
module.exports.default = CalendarClockCenter;
