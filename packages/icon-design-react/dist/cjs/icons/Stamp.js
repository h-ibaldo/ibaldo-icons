'use strict';

const { createElement, forwardRef } = require('react');

const Stamp = forwardRef(function Stamp(
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
    createElement('path', {"d":"M3 19L21 19L21 21C21 21.551 20.551 22 20 22L4 22C3.449 22 3 21.551 3 21Z","key":"0"}),
    createElement('path', {"d":"M2 19L22 19L22 17C22 15.895 21.105 15 20 15L4 15C2.895 15 2 15.895 2 17Z","key":"1"}),
    createElement('path', {"d":"M8 6C8 3.789 9.789 2 12 2C14.211 2 16 3.789 16 6C16 8 14 9 14 11C14 13 15 15 15 15L9 15C9 15 10 13 10 11C10 9 8 8 8 6Z","key":"2"})
  );
});

Stamp.displayName = 'Stamp';

module.exports = Stamp;
module.exports.Stamp = Stamp;
module.exports.default = Stamp;
