'use strict';

const { createElement, forwardRef } = require('react');

const Scalpel = forwardRef(function Scalpel(
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
    createElement('path', {"d":"M15 15L13 17L12 20L2 22L12 12","key":"0"}),
    createElement('path', {"d":"M20 2L11 11L16 16L22 10","key":"1"}),
    createElement('path', {"d":"M13 9L18 14","key":"2"})
  );
});

Scalpel.displayName = 'Scalpel';

module.exports = Scalpel;
module.exports.Scalpel = Scalpel;
module.exports.default = Scalpel;
