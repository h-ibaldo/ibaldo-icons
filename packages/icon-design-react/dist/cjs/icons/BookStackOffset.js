'use strict';

const { createElement, forwardRef } = require('react');

const BookStackOffset = forwardRef(function BookStackOffset(
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
    createElement('path', {"d":"M18 6L4 6C2.895 6 2 5.105 2 4C2 2.895 2.895 2 4 2L18 2","key":"0"}),
    createElement('path', {"d":"M6 10L20 10C21.105 10 22 10.895 22 12C22 13.105 21.105 14 20 14L6 14","key":"1"}),
    createElement('path', {"d":"M18 22L4 22C2.895 22 2 21.105 2 20C2 18.895 2.895 18 4 18L18 18","key":"2"})
  );
});

BookStackOffset.displayName = 'BookStackOffset';

module.exports = BookStackOffset;
module.exports.BookStackOffset = BookStackOffset;
module.exports.default = BookStackOffset;
