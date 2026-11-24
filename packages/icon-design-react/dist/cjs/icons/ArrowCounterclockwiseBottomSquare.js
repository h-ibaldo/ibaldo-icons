'use strict';

const { createElement, forwardRef } = require('react');

const ArrowCounterclockwiseBottomSquare = forwardRef(function ArrowCounterclockwiseBottomSquare(
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
    createElement('path', {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z","key":"0"}),
    createElement('path', {"d":"M17 11L14 14C12.344 15.656 9.656 15.656 8 14C6.344 12.344 6.344 9.656 8 8L9 7","key":"1"}),
    createElement('path', {"d":"M13 11L17 11L17 15","key":"2"})
  );
});

ArrowCounterclockwiseBottomSquare.displayName = 'ArrowCounterclockwiseBottomSquare';

module.exports = ArrowCounterclockwiseBottomSquare;
module.exports.ArrowCounterclockwiseBottomSquare = ArrowCounterclockwiseBottomSquare;
module.exports.default = ArrowCounterclockwiseBottomSquare;
