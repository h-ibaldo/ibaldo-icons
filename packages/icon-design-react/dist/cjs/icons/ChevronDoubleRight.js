'use strict';

const { createElement, forwardRef } = require('react');

const ChevronDoubleRight = forwardRef(function ChevronDoubleRight(
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
    createElement('path', {"d":"M11 4L19 12L11 20","key":"0"}),
    createElement('path', {"d":"M5 4L13 12L5 20","key":"1"})
  );
});

ChevronDoubleRight.displayName = 'ChevronDoubleRight';

module.exports = ChevronDoubleRight;
module.exports.ChevronDoubleRight = ChevronDoubleRight;
module.exports.default = ChevronDoubleRight;
