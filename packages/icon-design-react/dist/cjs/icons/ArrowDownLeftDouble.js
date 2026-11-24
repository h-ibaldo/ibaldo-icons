'use strict';

const { createElement, forwardRef } = require('react');

const ArrowDownLeftDouble = forwardRef(function ArrowDownLeftDouble(
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
    createElement('path', {"d":"M16 20L4 20L4 8","key":"0"}),
    createElement('path', {"d":"M20 16L8 16L8 4","key":"1"}),
    createElement('path', {"d":"M8 16L20 4","key":"2"})
  );
});

ArrowDownLeftDouble.displayName = 'ArrowDownLeftDouble';

module.exports = ArrowDownLeftDouble;
module.exports.ArrowDownLeftDouble = ArrowDownLeftDouble;
module.exports.default = ArrowDownLeftDouble;
