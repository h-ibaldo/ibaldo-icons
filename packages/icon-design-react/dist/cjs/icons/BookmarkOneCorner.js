'use strict';

const { createElement, forwardRef } = require('react');

const BookmarkOneCorner = forwardRef(function BookmarkOneCorner(
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
    createElement('path', {"d":"M13.000000026693669,2.999999999998181h-7c-.552284749828686,0-1,.447715250169495-1,1v18l7-4,7,4v-8","key":"0"}),
    createElement('polyline', {"points":"18.000000026693669 1.999999999998181 19.000000026693669 1.999999999998181 19.000000026693669 8.999999999998181","key":"1"})
  );
});

BookmarkOneCorner.displayName = 'BookmarkOneCorner';

module.exports = BookmarkOneCorner;
module.exports.BookmarkOneCorner = BookmarkOneCorner;
module.exports.default = BookmarkOneCorner;
