'use strict';

const { createElement, forwardRef } = require('react');

const BookHeadphones = forwardRef(function BookHeadphones(
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
    createElement('path', {"d":"M17 18L5 18C3.895 18 3 18.895 3 20C3 21.105 3.895 22 5 22L17 22","key":"0"}),
    createElement('path', {"d":"M17 18L17 14","key":"1"}),
    createElement('path', {"d":"M8 4L5 4C3.895 4 3 4.895 3 6","key":"2"}),
    createElement('path', {"d":"M3 6L3 20","key":"3"}),
    createElement('path', {"d":"M11 8L12 8C12.551 8 13 8.449 13 9L13 11C13 11.551 12.551 12 12 12C11.449 12 11 11.551 11 11L11 6C11 3.789 12.789 2 15 2L17 2C19.211 2 21 3.789 21 6L21 11C21 11.551 20.551 12 20 12C19.449 12 19 11.551 19 11L19 9C19 8.449 19.449 8 20 8L21 8","key":"4"})
  );
});

BookHeadphones.displayName = 'BookHeadphones';

module.exports = BookHeadphones;
module.exports.BookHeadphones = BookHeadphones;
module.exports.default = BookHeadphones;
