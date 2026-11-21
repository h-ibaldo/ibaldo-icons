'use strict';

const { createElement, forwardRef } = require('react');

const HashCircle = forwardRef(function HashCircle(
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
    createElement('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"0"}),
    createElement('path', {"d":"M11.445 7L8.109 17","key":"1"}),
    createElement('path', {"d":"M15.891 7L12.555 17","key":"2"}),
    createElement('path', {"d":"M17 9.777L8.109 9.777","key":"3"}),
    createElement('path', {"d":"M15.891 14.223L7 14.223","key":"4"})
  );
});

HashCircle.displayName = 'HashCircle';

module.exports = HashCircle;
module.exports.HashCircle = HashCircle;
module.exports.default = HashCircle;
