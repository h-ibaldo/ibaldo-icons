'use strict';

const { createElement, forwardRef } = require('react');

const ChevronUp = forwardRef(function ChevronUp(
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
    createElement('path', {"d":"M4 16L12 8L20 16","key":"0"})
  );
});

ChevronUp.displayName = 'ChevronUp';

module.exports = ChevronUp;
module.exports.ChevronUp = ChevronUp;
module.exports.default = ChevronUp;
