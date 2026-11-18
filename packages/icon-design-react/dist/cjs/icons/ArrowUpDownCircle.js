'use strict';

const { createElement, forwardRef } = require('react');

const ArrowUpDownCircle = forwardRef(function ArrowUpDownCircle(
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
    createElement('path', {"d":"M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2Z","key":"0"}),
    createElement('path', {"d":"M13 14L15 16L17 14","key":"1"}),
    createElement('path', {"d":"M15 8L15 16","key":"2"}),
    createElement('path', {"d":"M11 10L9 8L7 10","key":"3"}),
    createElement('path', {"d":"M9 16L9 8","key":"4"})
  );
});

ArrowUpDownCircle.displayName = 'ArrowUpDownCircle';

module.exports = ArrowUpDownCircle;
module.exports.ArrowUpDownCircle = ArrowUpDownCircle;
module.exports.default = ArrowUpDownCircle;
