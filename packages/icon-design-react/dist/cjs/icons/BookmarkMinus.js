'use strict';

const { createElement, forwardRef } = require('react');

const BookmarkMinus = forwardRef(function BookmarkMinus(
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
    createElement('path', {"d":"M18,1.999999999998181H6c-.552284749830505,0-1,.447715250169495-1,1v19l7-4,7,4V2.999999999998181c0-.552284749830505-.447715250169495-1-1-1Z","key":"0"}),
    createElement('line', {"x1":"8.999999973299964","y1":"10.999999999998181","x2":"14.999999973299964","y2":"10.999999999998181","key":"1"})
  );
});

BookmarkMinus.displayName = 'BookmarkMinus';

module.exports = BookmarkMinus;
module.exports.BookmarkMinus = BookmarkMinus;
module.exports.default = BookmarkMinus;
