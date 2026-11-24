'use strict';

const { createElement, forwardRef } = require('react');

const ChevronDoubleLeft = forwardRef(function ChevronDoubleLeft(
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
    createElement('path', {"d":"M13 20L5 12L13 4","key":"0"}),
    createElement('path', {"d":"M19 20L11 12L19 4","key":"1"})
  );
});

ChevronDoubleLeft.displayName = 'ChevronDoubleLeft';

module.exports = ChevronDoubleLeft;
module.exports.ChevronDoubleLeft = ChevronDoubleLeft;
module.exports.default = ChevronDoubleLeft;
