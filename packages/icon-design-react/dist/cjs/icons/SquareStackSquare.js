'use strict';

const { createElement, forwardRef } = require('react');

const SquareStackSquare = forwardRef(function SquareStackSquare(
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
    createElement('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"0"}),
    createElement('path', {"d":"M13 14L8 14C7.449 14 7 13.551 7 13L7 8C7 7.449 7.449 7 8 7L13 7C13.551 7 14 7.449 14 8L14 13C14 13.551 13.551 14 13 14Z","key":"1"}),
    createElement('path', {"d":"M17 10L17 16C17 16.551 16.551 17 16 17L10 17","key":"2"})
  );
});

SquareStackSquare.displayName = 'SquareStackSquare';

module.exports = SquareStackSquare;
module.exports.SquareStackSquare = SquareStackSquare;
module.exports.default = SquareStackSquare;
