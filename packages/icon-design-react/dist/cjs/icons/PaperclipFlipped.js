'use strict';

const { createElement, forwardRef } = require('react');

const PaperclipFlipped = forwardRef(function PaperclipFlipped(
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
    createElement('path', {"d":"M12 4L3.449 12.551C1.516 14.484 1.516 17.617 3.449 19.551C5.383 21.484 8.516 21.484 10.449 19.551L20.965 9.035C22.344 7.656 22.344 5.414 20.965 4.035C19.586 2.656 17.344 2.656 15.965 4.035L7.621 12.379C6.793 13.207 6.793 14.551 7.621 15.379C8.449 16.207 9.793 16.207 10.621 15.379L17 9","key":"0"})
  );
});

PaperclipFlipped.displayName = 'PaperclipFlipped';

module.exports = PaperclipFlipped;
module.exports.PaperclipFlipped = PaperclipFlipped;
module.exports.default = PaperclipFlipped;
