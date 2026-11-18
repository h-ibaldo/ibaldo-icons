'use strict';

const { createElement, forwardRef } = require('react');

const PaperclipCheckNarrow = forwardRef(function PaperclipCheckNarrow(
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
    createElement('path', {"d":"M14.965 7.035L8.621 13.379C7.793 14.207 7.793 15.551 8.621 16.379C9.449 17.207 10.793 17.207 11.621 16.379L19.965 8.035C21.344 6.656 21.344 4.414 19.965 3.035C18.586 1.656 16.344 1.656 14.965 3.035L4.449 13.551C2.516 15.484 2.516 18.617 4.449 20.551C6.383 22.484 9.516 22.484 11.449 20.551L19.965 12.035","key":"0"}),
    createElement('path', {"d":"M2 4L4 6L8 2","key":"1"})
  );
});

PaperclipCheckNarrow.displayName = 'PaperclipCheckNarrow';

module.exports = PaperclipCheckNarrow;
module.exports.PaperclipCheckNarrow = PaperclipCheckNarrow;
module.exports.default = PaperclipCheckNarrow;
