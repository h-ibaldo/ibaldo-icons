'use strict';

const { createElement, forwardRef } = require('react');

const ChevronDoubleUpLeft = forwardRef(function ChevronDoubleUpLeft(
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
    createElement('path', {"d":"M4 16L4 4L16 4","key":"0"}),
    createElement('path', {"d":"M8 20L8 8L20 8","key":"1"})
  );
});

ChevronDoubleUpLeft.displayName = 'ChevronDoubleUpLeft';

module.exports = ChevronDoubleUpLeft;
module.exports.ChevronDoubleUpLeft = ChevronDoubleUpLeft;
module.exports.default = ChevronDoubleUpLeft;
