'use strict';

const { createElement, forwardRef } = require('react');

const BookmarkMinusCircleLarge = forwardRef(function BookmarkMinusCircleLarge(
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
    createElement('circle', {"cx":"15.999999975729679","cy":"7.999999997570285","r":"5.999999997575287","key":"0"}),
    createElement('line', {"x1":"13.999999960709829","y1":"7.999999999998181","x2":"17.999999960709829","y2":"7.999999999998181","key":"1"}),
    createElement('path', {"d":"M15.999999999998181,1.999999999998181H2.999999973304512c-.55230712890625,0-1,.447692871090112-1,1v19l7-4,7,4v-8","key":"2"})
  );
});

BookmarkMinusCircleLarge.displayName = 'BookmarkMinusCircleLarge';

module.exports = BookmarkMinusCircleLarge;
module.exports.BookmarkMinusCircleLarge = BookmarkMinusCircleLarge;
module.exports.default = BookmarkMinusCircleLarge;
