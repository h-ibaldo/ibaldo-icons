'use strict';

const { createElement, forwardRef } = require('react');

const TextRSquare = forwardRef(function TextRSquare(
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
    createElement('path', {"d":"M9 17L9 7L13 7C14.656 7 16 8.344 16 10C16 11.656 14.656 13 13 13L9 13","key":"0"}),
    createElement('path', {"d":"M13 13L16 17","key":"1"}),
    createElement('path', {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z","key":"2"})
  );
});

TextRSquare.displayName = 'TextRSquare';

module.exports = TextRSquare;
module.exports.TextRSquare = TextRSquare;
module.exports.default = TextRSquare;
