'use strict';

const { createElement, forwardRef } = require('react');

const PaperclipVertical = forwardRef(function PaperclipVertical(
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
    createElement('path', {"d":"M18 8L18 16C18 19.313 15.313 22 12 22C8.688 22 6 19.313 6 16L6 6C6 3.789 7.789 2 10 2C12.211 2 14 3.789 14 6L14 15C14 16.105 13.105 17 12 17C10.895 17 10 16.105 10 15L10 8","key":"0"})
  );
});

PaperclipVertical.displayName = 'PaperclipVertical';

module.exports = PaperclipVertical;
module.exports.PaperclipVertical = PaperclipVertical;
module.exports.default = PaperclipVertical;
