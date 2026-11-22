'use strict';

const { createElement, forwardRef } = require('react');

const BookMinusCurved = forwardRef(function BookMinusCurved(
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
    createElement('path', {"d":"M4 18L4 5C4 3.344 5.344 2 7 2L20 2L20 14","key":"0"}),
    createElement('path', {"d":"M20 18L8 18","key":"1"}),
    createElement('path', {"d":"M20 14L8 14C5.789 14 4 15.789 4 18C4 20.211 5.789 22 8 22L20 22","key":"2"}),
    createElement('path', {"d":"M15 8L9 8","key":"3"})
  );
});

BookMinusCurved.displayName = 'BookMinusCurved';

module.exports = BookMinusCurved;
module.exports.BookMinusCurved = BookMinusCurved;
module.exports.default = BookMinusCurved;
