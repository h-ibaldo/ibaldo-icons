'use strict';

const { createElement, forwardRef } = require('react');

const ChevronRight = forwardRef(function ChevronRight(
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
    createElement('path', {"d":"M8 20L16 12L8 4","key":"0"})
  );
});

ChevronRight.displayName = 'ChevronRight';

module.exports = ChevronRight;
module.exports.ChevronRight = ChevronRight;
module.exports.default = ChevronRight;
