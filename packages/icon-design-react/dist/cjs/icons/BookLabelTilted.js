'use strict';

const { createElement, forwardRef } = require('react');

const BookLabelTilted = forwardRef(function BookLabelTilted(
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
    createElement('path', {"d":"M22 11.5L15 22L3 19C2.414 17.719 2.086 16.336 2.035 14.926L2 14L10 2L22 5L14 17L2 14","key":"0"}),
    createElement('path', {"d":"M11 7L15 8","key":"1"})
  );
});

BookLabelTilted.displayName = 'BookLabelTilted';

module.exports = BookLabelTilted;
module.exports.BookLabelTilted = BookLabelTilted;
module.exports.default = BookLabelTilted;
