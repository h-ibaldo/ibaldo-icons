'use strict';

const { createElement, forwardRef } = require('react');

const SquareInsetDashed = forwardRef(function SquareInsetDashed(
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
    createElement('path', {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z","key":"0"}),
    createElement('path', {"d":"M18 15L18 9","key":"1"}),
    createElement('path', {"d":"M6 15L6 9","key":"2"}),
    createElement('path', {"d":"M18 15L18 9","key":"3"}),
    createElement('path', {"d":"M9 18L15 18","key":"4"}),
    createElement('path', {"d":"M6 15L6 9","key":"5"}),
    createElement('path', {"d":"M9 6L15 6","key":"6"})
  );
});

SquareInsetDashed.displayName = 'SquareInsetDashed';

module.exports = SquareInsetDashed;
module.exports.SquareInsetDashed = SquareInsetDashed;
module.exports.default = SquareInsetDashed;
