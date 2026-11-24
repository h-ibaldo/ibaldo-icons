'use strict';

const { createElement, forwardRef } = require('react');

const ArrowDiagonalOut = forwardRef(function ArrowDiagonalOut(
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
    createElement('path', {"d":"M7 22L2 22L2 17","key":"2"}),
    createElement('path', {"d":"M17 2L22 2L22 7","key":"3"})
  );
});

ArrowDiagonalOut.displayName = 'ArrowDiagonalOut';

module.exports = ArrowDiagonalOut;
module.exports.ArrowDiagonalOut = ArrowDiagonalOut;
module.exports.default = ArrowDiagonalOut;
