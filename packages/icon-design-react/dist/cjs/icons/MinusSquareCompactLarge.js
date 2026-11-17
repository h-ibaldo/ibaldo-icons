'use strict';

const { createElement, forwardRef } = require('react');

const MinusSquareCompactLarge = forwardRef(function MinusSquareCompactLarge(
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
    createElement('rect', {"x":"4","y":"4","width":"16","height":"16","rx":"3","ry":"3","key":"0"}),
    createElement('line', {"x1":"8","y1":"12","x2":"16","y2":"12","key":"1"})
  );
});

MinusSquareCompactLarge.displayName = 'MinusSquareCompactLarge';

module.exports = MinusSquareCompactLarge;
module.exports.MinusSquareCompactLarge = MinusSquareCompactLarge;
module.exports.default = MinusSquareCompactLarge;
