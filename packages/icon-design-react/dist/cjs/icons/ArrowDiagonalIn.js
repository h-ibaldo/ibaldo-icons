'use strict';

const { createElement, forwardRef } = require('react');

const ArrowDiagonalIn = forwardRef(function ArrowDiagonalIn(
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
    createElement('path', {"d":"M2 22L9 15","key":"0"}),
    createElement('path', {"d":"M15 9L22 2","key":"1"}),
    createElement('path', {"d":"M20 9L15 9L15 4","key":"2"}),
    createElement('path', {"d":"M4 15L9 15L9 20","key":"3"})
  );
});

ArrowDiagonalIn.displayName = 'ArrowDiagonalIn';

module.exports = ArrowDiagonalIn;
module.exports.ArrowDiagonalIn = ArrowDiagonalIn;
module.exports.default = ArrowDiagonalIn;
