'use strict';

const { createElement, forwardRef } = require('react');

const ArrowUturnLeftSquareSmall = forwardRef(function ArrowUturnLeftSquareSmall(
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
    createElement('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z","key":"0"}),
    createElement('path', {"d":"M10 8L8 10L10 12","key":"1"}),
    createElement('path', {"d":"M8 10L13 10C14.656 10 16 11.344 16 13C16 14.656 14.656 16 13 16L9.777 16","key":"2"})
  );
});

ArrowUturnLeftSquareSmall.displayName = 'ArrowUturnLeftSquareSmall';

module.exports = ArrowUturnLeftSquareSmall;
module.exports.ArrowUturnLeftSquareSmall = ArrowUturnLeftSquareSmall;
module.exports.default = ArrowUturnLeftSquareSmall;
