'use strict';

const { createElement, forwardRef } = require('react');

const TextItalicX = forwardRef(function TextItalicX(
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
    createElement('path', {"d":"M3 7L5 3L21 3L19 7","key":"0"}),
    createElement('path', {"d":"M6 20L13 3","key":"1"}),
    createElement('path', {"d":"M3 20L10 20","key":"2"}),
    createElement('path', {"d":"M16 22L22 16","key":"3"}),
    createElement('path', {"d":"M22 22L16 16","key":"4"})
  );
});

TextItalicX.displayName = 'TextItalicX';

module.exports = TextItalicX;
module.exports.TextItalicX = TextItalicX;
module.exports.default = TextItalicX;
