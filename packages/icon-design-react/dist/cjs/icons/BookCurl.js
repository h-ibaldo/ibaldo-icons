'use strict';

const { createElement, forwardRef } = require('react');

const BookCurl = forwardRef(function BookCurl(
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
    createElement('path', {"d":"M18 18L6 18","key":"0"}),
    createElement('path', {"d":"M2 18L2 5C2 3.344 3.344 2 5 2L16 2C17.105 2 18 2.895 18 4L18 12C18 13.105 17.105 14 16 14L6 14C3.789 14 2 15.789 2 18C2 20.211 3.789 22 6 22L20 22C21.105 22 22 21.105 22 20L22 9","key":"1"})
  );
});

BookCurl.displayName = 'BookCurl';

module.exports = BookCurl;
module.exports.BookCurl = BookCurl;
module.exports.default = BookCurl;
