'use strict';

const { createElement, forwardRef } = require('react');

const BookHeart = forwardRef(function BookHeart(
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
    createElement('path', {"d":"M20 18L6 18C4.895 18 4 18.895 4 20C4 21.105 4.895 22 6 22L20 22","key":"0"}),
    createElement('path', {"d":"M20 18L20 2L6 2C4.895 2 4 2.895 4 4","key":"1"}),
    createElement('path', {"d":"M4 4L4 20","key":"2"}),
    createElement('path', {"d":"M11.293 13.293L8.5 10.5C7.672 9.672 7.672 8.328 8.5 7.5C9.328 6.672 10.672 6.672 11.5 7.5L12 8L12.5 7.5C13.328 6.672 14.672 6.672 15.5 7.5C16.328 8.328 16.328 9.672 15.5 10.5L12.707 13.293C12.316 13.684 11.684 13.684 11.293 13.293Z","key":"3"})
  );
});

BookHeart.displayName = 'BookHeart';

module.exports = BookHeart;
module.exports.BookHeart = BookHeart;
module.exports.default = BookHeart;
