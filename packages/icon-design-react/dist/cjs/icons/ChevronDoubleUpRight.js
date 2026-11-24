'use strict';

const { createElement, forwardRef } = require('react');

const ChevronDoubleUpRight = forwardRef(function ChevronDoubleUpRight(
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
    createElement('path', {"d":"M8 4L20 4L20 16","key":"0"}),
    createElement('path', {"d":"M4 8L16 8L16 20","key":"1"})
  );
});

ChevronDoubleUpRight.displayName = 'ChevronDoubleUpRight';

module.exports = ChevronDoubleUpRight;
module.exports.ChevronDoubleUpRight = ChevronDoubleUpRight;
module.exports.default = ChevronDoubleUpRight;
