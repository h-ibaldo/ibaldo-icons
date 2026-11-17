'use strict';

const { createElement, forwardRef } = require('react');

const ArrowUpLeftDouble = forwardRef(function ArrowUpLeftDouble(
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
    createElement('path', {"d":"M8 20L8 8L20 8","key":"1"}),
    createElement('path', {"d":"M8 8L20 20","key":"2"})
  );
});

ArrowUpLeftDouble.displayName = 'ArrowUpLeftDouble';

module.exports = ArrowUpLeftDouble;
module.exports.ArrowUpLeftDouble = ArrowUpLeftDouble;
module.exports.default = ArrowUpLeftDouble;
