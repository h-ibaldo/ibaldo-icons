'use strict';

const { createElement, forwardRef } = require('react');

const ChevronUpDownStaggeredSquareLarge = forwardRef(function ChevronUpDownStaggeredSquareLarge(
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
    createElement('path', {"d":"M12 9L15 12L18 9","key":"0"}),
    createElement('path', {"d":"M12 15L9 12L6 15","key":"1"}),
    createElement('path', {"d":"M17 2L7 2C4.238 2 2 4.238 2 7L2 17C2 19.762 4.238 22 7 22L17 22C19.762 22 22 19.762 22 17L22 7C22 4.238 19.762 2 17 2Z","key":"2"})
  );
});

ChevronUpDownStaggeredSquareLarge.displayName = 'ChevronUpDownStaggeredSquareLarge';

module.exports = ChevronUpDownStaggeredSquareLarge;
module.exports.ChevronUpDownStaggeredSquareLarge = ChevronUpDownStaggeredSquareLarge;
module.exports.default = ChevronUpDownStaggeredSquareLarge;
