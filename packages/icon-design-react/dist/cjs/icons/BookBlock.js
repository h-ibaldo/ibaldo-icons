'use strict';

const { createElement, forwardRef } = require('react');

const BookBlock = forwardRef(function BookBlock(
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
    createElement('path', {"d":"M19 21L7.5 21C6.117 21 5 19.883 5 18.5C5 17.117 6.117 16 7.5 16L19 16Z","key":"0"}),
    createElement('path', {"d":"M5 18.5L5 5.5C5 4.117 6.117 3 7.5 3L19 3L19 16","key":"1"})
  );
});

BookBlock.displayName = 'BookBlock';

module.exports = BookBlock;
module.exports.BookBlock = BookBlock;
module.exports.default = BookBlock;
