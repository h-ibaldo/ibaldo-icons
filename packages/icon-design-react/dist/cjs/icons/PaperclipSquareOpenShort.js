'use strict';

const { createElement, forwardRef } = require('react');

const PaperclipSquareOpenShort = forwardRef(function PaperclipSquareOpenShort(
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
    createElement('path', {"d":"M14 11L19.379 5.621C20.207 4.793 20.207 3.449 19.379 2.621C18.551 1.793 17.207 1.793 16.379 2.621L10.242 8.758C8.586 10.414 8.586 13.102 10.242 14.758C11.898 16.414 14.586 16.414 16.242 14.758L20 11","key":"0"}),
    createElement('path', {"d":"M22 15L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L11 2","key":"1"})
  );
});

PaperclipSquareOpenShort.displayName = 'PaperclipSquareOpenShort';

module.exports = PaperclipSquareOpenShort;
module.exports.PaperclipSquareOpenShort = PaperclipSquareOpenShort;
module.exports.default = PaperclipSquareOpenShort;
