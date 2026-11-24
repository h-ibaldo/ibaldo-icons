'use strict';

const { createElement, forwardRef } = require('react');

const ArrowDiagonalInLeft = forwardRef(function ArrowDiagonalInLeft(
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
    createElement('path', {"d":"M22 22L15 15","key":"0"}),
    createElement('path', {"d":"M9 9L2 2","key":"1"}),
    createElement('path', {"d":"M9 4L9 9L4 9","key":"2"}),
    createElement('path', {"d":"M15 20L15 15L20 15","key":"3"})
  );
});

ArrowDiagonalInLeft.displayName = 'ArrowDiagonalInLeft';

module.exports = ArrowDiagonalInLeft;
module.exports.ArrowDiagonalInLeft = ArrowDiagonalInLeft;
module.exports.default = ArrowDiagonalInLeft;
