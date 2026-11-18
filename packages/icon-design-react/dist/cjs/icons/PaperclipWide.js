'use strict';

const { createElement, forwardRef } = require('react');

const PaperclipWide = forwardRef(function PaperclipWide(
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
    createElement('path', {"d":"M10 4L3.863 10.137C1.379 12.621 1.379 16.648 3.863 19.133L3.867 19.137C6.352 21.621 10.379 21.621 12.863 19.137L20.758 11.242C22.414 9.586 22.414 6.902 20.758 5.246L20.754 5.242C19.098 3.586 16.414 3.586 14.758 5.242L7.121 12.879C6.293 13.707 6.293 15.051 7.121 15.879C7.949 16.707 9.293 16.707 10.121 15.879L16 10","key":"0"})
  );
});

PaperclipWide.displayName = 'PaperclipWide';

module.exports = PaperclipWide;
module.exports.PaperclipWide = PaperclipWide;
module.exports.default = PaperclipWide;
