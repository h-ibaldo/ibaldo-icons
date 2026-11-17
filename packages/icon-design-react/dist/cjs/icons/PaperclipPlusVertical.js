'use strict';

const { createElement, forwardRef } = require('react');

const PaperclipPlusVertical = forwardRef(function PaperclipPlusVertical(
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
    createElement('path', {"d":"M14 9L14 16C14 19.313 11.313 22 8 22C4.688 22 2 19.313 2 16L2 6C2 3.789 3.789 2 6 2C8.211 2 10 3.789 10 6L10 15C10 16.105 9.105 17 8 17C6.895 17 6 16.105 6 15L6 9","key":"0"}),
    createElement('path', {"d":"M22 5L16 5","key":"1"}),
    createElement('path', {"d":"M19 2L19 8","key":"2"})
  );
});

PaperclipPlusVertical.displayName = 'PaperclipPlusVertical';

module.exports = PaperclipPlusVertical;
module.exports.PaperclipPlusVertical = PaperclipPlusVertical;
module.exports.default = PaperclipPlusVertical;
