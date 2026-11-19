'use strict';

const { createElement, forwardRef } = require('react');

const ChevronUpCircleLarge = forwardRef(function ChevronUpCircleLarge(
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
    createElement('path', {"d":"M7 14L12 9L17 14","key":"0"}),
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"1"})
  );
});

ChevronUpCircleLarge.displayName = 'ChevronUpCircleLarge';

module.exports = ChevronUpCircleLarge;
module.exports.ChevronUpCircleLarge = ChevronUpCircleLarge;
module.exports.default = ChevronUpCircleLarge;
