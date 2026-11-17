'use strict';

const { createElement, forwardRef } = require('react');

const PaperclipXShort = forwardRef(function PaperclipXShort(
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
    createElement('path', {"d":"M12.105 14L18.277 7.828C19.383 6.723 19.383 4.934 18.277 3.828C17.172 2.723 15.383 2.723 14.277 3.828L5.555 12.551C3.621 14.484 3.621 17.617 5.555 19.551C7.488 21.484 10.621 21.484 12.555 19.551L21 11.105","key":"0"}),
    createElement('path', {"d":"M6 6L2 2","key":"1"}),
    createElement('path', {"d":"M6 2L2 6","key":"2"})
  );
});

PaperclipXShort.displayName = 'PaperclipXShort';

module.exports = PaperclipXShort;
module.exports.PaperclipXShort = PaperclipXShort;
module.exports.default = PaperclipXShort;
