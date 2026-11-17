'use strict';

const { createElement, forwardRef } = require('react');

const BookmarkPage = forwardRef(function BookmarkPage(
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
    createElement('polyline', {"points":"2.000000026695488 1.999999999998181 22.000000026695488 1.999999999998181 22.000000026695488 21.999999999998181","key":"0"}),
    createElement('polyline', {"points":"9.000000026695488 1.999999999998181 9.000000026695488 17.999999999998181 13.000000026695488 14.999999999998181 17.000000026695488 17.999999999998181 17.000000026695488 1.999999999998181","key":"1"}),
    createElement('line', {"x1":"2.000000026695488","y1":"9.999999999998181","x2":"5.000000026695488","y2":"9.999999999998181","key":"2"}),
    createElement('line', {"x1":"2.000000026695488","y1":"13.999999999998181","x2":"5.000000026695488","y2":"13.999999999998181","key":"3"}),
    createElement('line', {"x1":"2.000000026695488","y1":"17.999999999998181","x2":"5.000000026695488","y2":"17.999999999998181","key":"4"}),
    createElement('line', {"x1":"2.000000026695488","y1":"21.999999999998181","x2":"17.000000026695488","y2":"21.999999999998181","key":"5"})
  );
});

BookmarkPage.displayName = 'BookmarkPage';

module.exports = BookmarkPage;
module.exports.BookmarkPage = BookmarkPage;
module.exports.default = BookmarkPage;
