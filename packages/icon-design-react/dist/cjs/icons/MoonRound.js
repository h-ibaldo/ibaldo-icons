'use strict';

const { createElement, forwardRef } = require('react');

const MoonRound = forwardRef(function MoonRound(
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
    createElement('path', {"d":"M2 12C2 6.477 6.477 2 12 2C12.664 2 13.313 2.066 13.941 2.188C11.105 2.887 9 5.449 9 8.5C9 12.09 11.91 15 15.5 15C18.551 15 21.113 12.895 21.813 10.059C21.934 10.688 22 11.336 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"0"})
  );
});

MoonRound.displayName = 'MoonRound';

module.exports = MoonRound;
module.exports.MoonRound = MoonRound;
module.exports.default = MoonRound;
