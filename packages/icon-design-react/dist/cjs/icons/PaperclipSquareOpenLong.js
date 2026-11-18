'use strict';

const { createElement, forwardRef } = require('react');

const PaperclipSquareOpenLong = forwardRef(function PaperclipSquareOpenLong(
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
    createElement('path', {"d":"M19 8L14.828 12.172C13.723 13.277 11.934 13.277 10.828 12.172C9.723 11.066 9.723 9.277 10.828 8.172L16.586 2.414C17.137 1.863 18.031 1.863 18.582 2.414L18.586 2.418C19.137 2.969 19.137 3.863 18.586 4.414L14 9","key":"0"}),
    createElement('path', {"d":"M22 11L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L11 2","key":"1"})
  );
});

PaperclipSquareOpenLong.displayName = 'PaperclipSquareOpenLong';

module.exports = PaperclipSquareOpenLong;
module.exports.PaperclipSquareOpenLong = PaperclipSquareOpenLong;
module.exports.default = PaperclipSquareOpenLong;
