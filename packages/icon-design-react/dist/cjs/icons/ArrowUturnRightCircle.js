'use strict';

const { createElement, forwardRef } = require('react');

const ArrowUturnRightCircle = forwardRef(function ArrowUturnRightCircle(
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
    createElement('path', {"d":"M13 6L16 9L13 12","key":"0"}),
    createElement('path', {"d":"M16 9L11 9C8.789 9 7 10.789 7 13C7 15.211 8.789 17 11 17L13 17","key":"1"}),
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"2"})
  );
});

ArrowUturnRightCircle.displayName = 'ArrowUturnRightCircle';

module.exports = ArrowUturnRightCircle;
module.exports.ArrowUturnRightCircle = ArrowUturnRightCircle;
module.exports.default = ArrowUturnRightCircle;
