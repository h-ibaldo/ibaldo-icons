'use strict';

const { createElement, forwardRef } = require('react');

const ArrowClockwiseTen = forwardRef(function ArrowClockwiseTen(
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
    createElement('path', {"d":"M19 2L19 5L16 5","key":"0"}),
    createElement('path', {"d":"M19 4.875C17.195 3.102 14.73 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 10.953 21.84 9.945 21.539 9","key":"1"}),
    createElement('path', {"d":"M14.5 16C13.395 16 12.5 15.105 12.5 14L12.5 10C12.5 8.895 13.395 8 14.5 8C15.605 8 16.5 8.895 16.5 10L16.5 14C16.5 15.105 15.605 16 14.5 16Z","key":"2"}),
    createElement('path', {"d":"M9 16L9 8L8 8","key":"3"})
  );
});

ArrowClockwiseTen.displayName = 'ArrowClockwiseTen';

module.exports = ArrowClockwiseTen;
module.exports.ArrowClockwiseTen = ArrowClockwiseTen;
module.exports.default = ArrowClockwiseTen;
