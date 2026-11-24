'use strict';

const { createElement, forwardRef } = require('react');

const BookmarkOffRound = forwardRef(function BookmarkOffRound(
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
    createElement('path', {"d":"M19.000000026691851,8.999999999998181v-4c0-1.656854249490607-1.343145750508484-3-3-3h-7.999999999996362","key":"0"}),
    createElement('polyline', {"points":"5.000000026691851 5.752474922528563 5.000000026691851 21.999999999998181 12.000000026691851 17.999999999998181 19.000000026691851 21.999999999998181 19.000000026691851 13.349999999998545","key":"1"}),
    createElement('line', {"x1":"2.000000026695488","y1":"3.999999999998181","x2":"22.000000026695488","y2":"14.999999999998181","key":"2"})
  );
});

BookmarkOffRound.displayName = 'BookmarkOffRound';

module.exports = BookmarkOffRound;
module.exports.BookmarkOffRound = BookmarkOffRound;
module.exports.default = BookmarkOffRound;
