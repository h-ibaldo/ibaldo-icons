'use strict';

const { createElement, forwardRef } = require('react');

const MoonCircle = forwardRef(function MoonCircle(
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
    createElement('path', {"d":"M13.941 2.188C11.105 2.887 9 5.449 9 8.5C9 12.09 11.91 15 15.5 15C18.551 15 21.113 12.895 21.813 10.059","key":"0"}),
    createElement('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"1"})
  );
});

MoonCircle.displayName = 'MoonCircle';

module.exports = MoonCircle;
module.exports.MoonCircle = MoonCircle;
module.exports.default = MoonCircle;
