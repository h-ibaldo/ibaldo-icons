'use strict';

const { createElement, forwardRef } = require('react');

const ChevronDoubleDownLeft = forwardRef(function ChevronDoubleDownLeft(
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
    createElement('path', {"d":"M16 20L4 20L4 8","key":"0"}),
    createElement('path', {"d":"M20 16L8 16L8 4","key":"1"})
  );
});

ChevronDoubleDownLeft.displayName = 'ChevronDoubleDownLeft';

module.exports = ChevronDoubleDownLeft;
module.exports.ChevronDoubleDownLeft = ChevronDoubleDownLeft;
module.exports.default = ChevronDoubleDownLeft;
