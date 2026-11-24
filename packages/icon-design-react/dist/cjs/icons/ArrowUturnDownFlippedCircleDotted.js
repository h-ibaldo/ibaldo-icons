'use strict';

const { createElement, forwardRef } = require('react');

const ArrowUturnDownFlippedCircleDotted = forwardRef(function ArrowUturnDownFlippedCircleDotted(
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
    createElement('path', {"d":"M7 13L10 16L13 13","key":"0"}),
    createElement('path', {"d":"M10 16L10 11.5C10 9.566 11.566 8 13.5 8C15.434 8 17 9.566 17 11.5L17 12","key":"1"}),
    createElement('path', {"d":"M16 18L16 18","key":"2"}),
    createElement('path', {"d":"M20 18L20 18","key":"3"}),
    createElement('path', {"d":"M21.539 15C21.84 14.055 22 13.047 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C13.047 22 14.051 21.84 15 21.539","key":"4"})
  );
});

ArrowUturnDownFlippedCircleDotted.displayName = 'ArrowUturnDownFlippedCircleDotted';

module.exports = ArrowUturnDownFlippedCircleDotted;
module.exports.ArrowUturnDownFlippedCircleDotted = ArrowUturnDownFlippedCircleDotted;
module.exports.default = ArrowUturnDownFlippedCircleDotted;
