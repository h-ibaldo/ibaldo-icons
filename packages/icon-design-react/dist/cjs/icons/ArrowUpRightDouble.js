'use strict';

const { createElement, forwardRef } = require('react');

const ArrowUpRightDouble = forwardRef(function ArrowUpRightDouble(
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
    createElement('path', {"d":"M4 8L16 8L16 20","key":"1"}),
    createElement('path', {"d":"M16 8L4 20","key":"2"})
  );
});

ArrowUpRightDouble.displayName = 'ArrowUpRightDouble';

module.exports = ArrowUpRightDouble;
module.exports.ArrowUpRightDouble = ArrowUpRightDouble;
module.exports.default = ArrowUpRightDouble;
