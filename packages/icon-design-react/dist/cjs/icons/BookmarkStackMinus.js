'use strict';

const { createElement, forwardRef } = require('react');

const BookmarkStackMinus = forwardRef(function BookmarkStackMinus(
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
    createElement('path', {"d":"M14.000000026699126,5.999999999998181H4.000000026699126c-.552284749828686,0-1,.447715250169495-1,1v15l6-4,6,4V6.999999999998181c0-.552284749830505-.447715250169495-1-1-1Z","key":"0"}),
    createElement('path', {"d":"M15.000000026699126,13.999999999998181l6,4V2.999999999998181c0-.552284749830505-.447715250169495-1-1-1h-10c-.552284749828686,0-1,.447715250169495-1,1v3","key":"1"}),
    createElement('line', {"x1":"6.509665274770668","y1":"11.948015268357267","x2":"11.509665274770668","y2":"11.948015268357267","key":"2"})
  );
});

BookmarkStackMinus.displayName = 'BookmarkStackMinus';

module.exports = BookmarkStackMinus;
module.exports.BookmarkStackMinus = BookmarkStackMinus;
module.exports.default = BookmarkStackMinus;
