'use strict';

const { createElement, forwardRef } = require('react');

const ChevronDownCircle = forwardRef(function ChevronDownCircle(
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
    createElement('path', {"d":"M9 11L12 14L15 11","key":"0"}),
    createElement('path', {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z","key":"1"})
  );
});

ChevronDownCircle.displayName = 'ChevronDownCircle';

module.exports = ChevronDownCircle;
module.exports.ChevronDownCircle = ChevronDownCircle;
module.exports.default = ChevronDownCircle;
