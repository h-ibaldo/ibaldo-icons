'use strict';

const { createElement, forwardRef } = require('react');

const ChevronUpLeft = forwardRef(function ChevronUpLeft(
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
    createElement('path', {"d":"M6 18L6 6L18 6","key":"0"})
  );
});

ChevronUpLeft.displayName = 'ChevronUpLeft';

module.exports = ChevronUpLeft;
module.exports.ChevronUpLeft = ChevronUpLeft;
module.exports.default = ChevronUpLeft;
