'use strict';

const { createElement, forwardRef } = require('react');

const ArrowCounterclockwiseCircle = forwardRef(function ArrowCounterclockwiseCircle(
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
    createElement('path', {"d":"M7 13L10 10C11.656 8.344 14.344 8.344 16 10C17.656 11.656 17.656 14.344 16 16L15 17","key":"0"}),
    createElement('path', {"d":"M11 13L7 13L7 9","key":"1"}),
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"2"})
  );
});

ArrowCounterclockwiseCircle.displayName = 'ArrowCounterclockwiseCircle';

module.exports = ArrowCounterclockwiseCircle;
module.exports.ArrowCounterclockwiseCircle = ArrowCounterclockwiseCircle;
module.exports.default = ArrowCounterclockwiseCircle;
