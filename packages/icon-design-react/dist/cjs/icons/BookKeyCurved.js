'use strict';

const { createElement, forwardRef } = require('react');

const BookKeyCurved = forwardRef(function BookKeyCurved(
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
    createElement('path', {"d":"M4 18L4 5C4 3.344 5.344 2 7 2L12 2","key":"0"}),
    createElement('path', {"d":"M20 11L20 14","key":"1"}),
    createElement('path', {"d":"M20 18L8 18","key":"2"}),
    createElement('path', {"d":"M20 14L16.355 14","key":"3"}),
    createElement('path', {"d":"M6.863 14.164C5.207 14.652 4 16.184 4 18C4 20.211 5.789 22 8 22L20 22","key":"4"}),
    createElement('path', {"d":"M17.5 2C15.566 2 14 3.566 14 5.5C14 5.656 14.027 5.805 14.047 5.953L10 10L10 13L13 13L13 11L15 11L15 9L17.5 9C19.434 9 21 7.434 21 5.5C21 3.566 19.434 2 17.5 2Z","key":"5"})
  );
});

BookKeyCurved.displayName = 'BookKeyCurved';

module.exports = BookKeyCurved;
module.exports.BookKeyCurved = BookKeyCurved;
module.exports.default = BookKeyCurved;
