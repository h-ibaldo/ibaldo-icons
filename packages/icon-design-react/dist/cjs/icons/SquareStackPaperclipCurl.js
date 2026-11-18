'use strict';

const { createElement, forwardRef } = require('react');

const SquareStackPaperclipCurl = forwardRef(function SquareStackPaperclipCurl(
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
    createElement('path', {"d":"M2 17L2 4C2 2.895 2.895 2 4 2L17 2","key":"0"}),
    createElement('path', {"d":"M17.5 15L15.328 17.172C14.223 18.277 12.434 18.277 11.328 17.172C10.223 16.066 10.223 14.277 11.328 13.172L14.086 10.414C14.637 9.863 15.535 9.863 16.086 10.414C16.637 10.965 16.637 11.863 16.086 12.414L13.328 15.172","key":"1"}),
    createElement('path', {"d":"M20 22L8 22C6.895 22 6 21.105 6 20L6 8C6 6.895 6.895 6 8 6L20 6C21.105 6 22 6.895 22 8L22 20C22 21.105 21.105 22 20 22Z","key":"2"})
  );
});

SquareStackPaperclipCurl.displayName = 'SquareStackPaperclipCurl';

module.exports = SquareStackPaperclipCurl;
module.exports.SquareStackPaperclipCurl = SquareStackPaperclipCurl;
module.exports.default = SquareStackPaperclipCurl;
