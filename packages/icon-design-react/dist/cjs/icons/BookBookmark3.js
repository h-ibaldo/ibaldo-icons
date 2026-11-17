'use strict';

const { createElement, forwardRef } = require('react');

const BookBookmark3 = forwardRef(function BookBookmark3(
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
    createElement('polyline', {"points":"17.000000026699126 1.999999999998181 17.000000026699126 10.999999999998181 14.000000026699126 8.999999999998181 11.000000026699126 10.999999999998181 11.000000026699126 1.999999999998181","key":"0"}),
    createElement('rect', {"x":"6.000000026699126","y":"1.999999999998181","width":"15.999999999990905","height":"20","key":"1"}),
    createElement('line', {"x1":"2.000000026699126","y1":"1.999999999998181","x2":"2.000000026699126","y2":"21.999999999998181","key":"2"})
  );
});

BookBookmark3.displayName = 'BookBookmark3';

module.exports = BookBookmark3;
module.exports.BookBookmark3 = BookBookmark3;
module.exports.default = BookBookmark3;
