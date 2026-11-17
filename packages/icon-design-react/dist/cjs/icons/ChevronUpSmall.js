'use strict';

const { createElement, forwardRef } = require('react');

const ChevronUpSmall = forwardRef(function ChevronUpSmall(
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
    createElement('path', {"d":"M9 13L12 10L15 13","key":"0"})
  );
});

ChevronUpSmall.displayName = 'ChevronUpSmall';

module.exports = ChevronUpSmall;
module.exports.ChevronUpSmall = ChevronUpSmall;
module.exports.default = ChevronUpSmall;
