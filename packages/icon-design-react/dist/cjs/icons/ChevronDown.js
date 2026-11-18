'use strict';

const { createElement, forwardRef } = require('react');

const ChevronDown = forwardRef(function ChevronDown(
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
    createElement('path', {"d":"M4 8L12 16L20 8","key":"0"})
  );
});

ChevronDown.displayName = 'ChevronDown';

module.exports = ChevronDown;
module.exports.ChevronDown = ChevronDown;
module.exports.default = ChevronDown;
