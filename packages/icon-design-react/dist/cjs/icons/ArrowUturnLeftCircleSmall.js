'use strict';

const { createElement, forwardRef } = require('react');

const ArrowUturnLeftCircleSmall = forwardRef(function ArrowUturnLeftCircleSmall(
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
    createElement('path', {"d":"M10 8L8 10L10 12","key":"0"}),
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"1"}),
    createElement('path', {"d":"M8 10L13 10C14.656 10 16 11.344 16 13C16 14.656 14.656 16 13 16L9.777 16","key":"2"})
  );
});

ArrowUturnLeftCircleSmall.displayName = 'ArrowUturnLeftCircleSmall';

module.exports = ArrowUturnLeftCircleSmall;
module.exports.ArrowUturnLeftCircleSmall = ArrowUturnLeftCircleSmall;
module.exports.default = ArrowUturnLeftCircleSmall;
