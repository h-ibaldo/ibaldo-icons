'use strict';

const { createElement, forwardRef } = require('react');

const ChevronDownRight = forwardRef(function ChevronDownRight(
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
    createElement('path', {"d":"M18 6L18 18L6 18","key":"0"})
  );
});

ChevronDownRight.displayName = 'ChevronDownRight';

module.exports = ChevronDownRight;
module.exports.ChevronDownRight = ChevronDownRight;
module.exports.default = ChevronDownRight;
