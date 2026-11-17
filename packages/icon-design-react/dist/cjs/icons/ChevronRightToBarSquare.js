'use strict';

const { createElement, forwardRef } = require('react');

const ChevronRightToBarSquare = forwardRef(function ChevronRightToBarSquare(
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
    createElement('path', {"d":"M8 8L12 12L8 16","key":"0"}),
    createElement('path', {"d":"M5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22Z","key":"1"}),
    createElement('path', {"d":"M16 8L16 16","key":"2"})
  );
});

ChevronRightToBarSquare.displayName = 'ChevronRightToBarSquare';

module.exports = ChevronRightToBarSquare;
module.exports.ChevronRightToBarSquare = ChevronRightToBarSquare;
module.exports.default = ChevronRightToBarSquare;
