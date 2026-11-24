'use strict';

const { createElement, forwardRef } = require('react');

const VectorSquare = forwardRef(function VectorSquare(
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
    createElement('path', {"d":"M16 5C16 3.344 17.344 2 19 2C20.656 2 22 3.344 22 5C22 6.656 20.656 8 19 8C17.344 8 16 6.656 16 5Z","key":"0"}),
    createElement('path', {"d":"M2 19C2 17.344 3.344 16 5 16C6.656 16 8 17.344 8 19C8 20.656 6.656 22 5 22C3.344 22 2 20.656 2 19Z","key":"1"}),
    createElement('path', {"d":"M19 16C20.656 16 22 17.344 22 19C22 20.656 20.656 22 19 22C17.344 22 16 20.656 16 19C16 17.344 17.344 16 19 16Z","key":"2"}),
    createElement('path', {"d":"M5 2C6.656 2 8 3.344 8 5C8 6.656 6.656 8 5 8C3.344 8 2 6.656 2 5C2 3.344 3.344 2 5 2Z","key":"3"}),
    createElement('path', {"d":"M8 5L16 5","key":"4"}),
    createElement('path', {"d":"M8 19L16 19","key":"5"}),
    createElement('path', {"d":"M8 5L16 5","key":"6"}),
    createElement('path', {"d":"M19 8L19 16","key":"7"}),
    createElement('path', {"d":"M8 19L16 19","key":"8"}),
    createElement('path', {"d":"M5 8L5 16","key":"9"})
  );
});

VectorSquare.displayName = 'VectorSquare';

module.exports = VectorSquare;
module.exports.VectorSquare = VectorSquare;
module.exports.default = VectorSquare;
