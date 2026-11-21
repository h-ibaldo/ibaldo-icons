'use strict';

const { createElement, forwardRef } = require('react');

const Headphones = forwardRef(function Headphones(
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
    createElement('path', {"d":"M20 13C21.105 13 22 13.895 22 15L22 20C22 21.105 21.105 22 20 22C18.895 22 18 21.105 18 20L18 15C18 13.895 18.895 13 20 13Z","key":"0"}),
    createElement('path', {"d":"M4 13C5.105 13 6 13.895 6 15L6 20C6 21.105 5.105 22 4 22C2.895 22 2 21.105 2 20L2 15C2 13.895 2.895 13 4 13Z","key":"1"}),
    createElement('path', {"d":"M2 15L2 12.016C2 6.484 6.484 2 12.016 2C17.547 2 22.031 6.484 22.031 12.016L22.031 15","key":"2"})
  );
});

Headphones.displayName = 'Headphones';

module.exports = Headphones;
module.exports.Headphones = Headphones;
module.exports.default = Headphones;
