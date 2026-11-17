'use strict';

const { createElement, forwardRef } = require('react');

const PaperclipSquareThin = forwardRef(function PaperclipSquareThin(
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
    createElement('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"0"}),
    createElement('path', {"d":"M12 14L16.379 9.621C17.207 8.793 17.207 7.449 16.379 6.621C15.551 5.793 14.207 5.793 13.379 6.621L8.035 11.965C6.656 13.344 6.656 15.586 8.035 16.965C9.414 18.344 11.656 18.344 13.035 16.965L17 13","key":"1"})
  );
});

PaperclipSquareThin.displayName = 'PaperclipSquareThin';

module.exports = PaperclipSquareThin;
module.exports.PaperclipSquareThin = PaperclipSquareThin;
module.exports.default = PaperclipSquareThin;
