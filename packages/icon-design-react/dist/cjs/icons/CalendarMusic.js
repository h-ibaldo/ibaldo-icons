'use strict';

const { createElement, forwardRef } = require('react');

const CalendarMusic = forwardRef(function CalendarMusic(
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
    createElement('path', {"d":"M22 20L22 6C22 4.895 21.105 4 20 4L4 4C2.895 4 2 4.895 2 6L2 20C2 21.105 2.895 22 4 22L20 22C21.105 22 22 21.105 22 20Z","key":"2"}),
    createElement('path', {"d":"M12 17C12 17.551 11.328 18 10.5 18C9.672 18 9 17.551 9 17C9 16.449 9.672 16 10.5 16C11.328 16 12 16.449 12 17Z","key":"3"}),
    createElement('path', {"d":"M12 17L12 10L15 11","key":"4"})
  );
});

CalendarMusic.displayName = 'CalendarMusic';

module.exports = CalendarMusic;
module.exports.CalendarMusic = CalendarMusic;
module.exports.default = CalendarMusic;
