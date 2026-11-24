'use strict';

const { createElement, forwardRef } = require('react');

const SquareStackCircle = forwardRef(function SquareStackCircle(
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
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement('path', {"d":"M13 14L8 14C7.449 14 7 13.551 7 13L7 8C7 7.449 7.449 7 8 7L13 7C13.551 7 14 7.449 14 8L14 13C14 13.551 13.551 14 13 14Z","key":"1"}),
    createElement('path', {"d":"M17 10L17 16C17 16.551 16.551 17 16 17L10 17","key":"2"})
  );
});

SquareStackCircle.displayName = 'SquareStackCircle';

module.exports = SquareStackCircle;
module.exports.SquareStackCircle = SquareStackCircle;
module.exports.default = SquareStackCircle;
