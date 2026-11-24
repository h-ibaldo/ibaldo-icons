'use strict';

const { createElement, forwardRef } = require('react');

const ArrowCounterclockwiseBottomCircle = forwardRef(function ArrowCounterclockwiseBottomCircle(
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
    createElement('path', {"d":"M17 11L14 14C12.344 15.656 9.656 15.656 8 14C6.344 12.344 6.344 9.656 8 8L9 7","key":"0"}),
    createElement('path', {"d":"M13 11L17 11L17 15","key":"1"}),
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"2"})
  );
});

ArrowCounterclockwiseBottomCircle.displayName = 'ArrowCounterclockwiseBottomCircle';

module.exports = ArrowCounterclockwiseBottomCircle;
module.exports.ArrowCounterclockwiseBottomCircle = ArrowCounterclockwiseBottomCircle;
module.exports.default = ArrowCounterclockwiseBottomCircle;
