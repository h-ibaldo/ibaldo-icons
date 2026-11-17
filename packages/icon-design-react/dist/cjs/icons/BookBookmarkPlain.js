'use strict';

const { createElement, forwardRef } = require('react');

const BookBookmarkPlain = forwardRef(function BookBookmarkPlain(
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
    createElement('polyline', {"points":"15.000000026699126 1.999999999998181 15.000000026699126 10.999999999998181 12.000000026699126 8.999999999998181 9.000000026699126 10.999999999998181 9.000000026699126 1.999999999998181","key":"0"}),
    createElement('rect', {"x":"4.000000026699126","y":"1.999999999998181","width":"16","height":"20","key":"1"})
  );
});

BookBookmarkPlain.displayName = 'BookBookmarkPlain';

module.exports = BookBookmarkPlain;
module.exports.BookBookmarkPlain = BookBookmarkPlain;
module.exports.default = BookBookmarkPlain;
