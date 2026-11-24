'use strict';

const { createElement, forwardRef } = require('react');

const TextLigature = forwardRef(function TextLigature(
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
    createElement('path', {"d":"M7 22L7 7C7 4.238 9.238 2 12 2L12.051 2C14.813 2 17.051 4.238 17.051 7","key":"0"}),
    createElement('path', {"d":"M17 22L17 12.039L14.047 12.039","key":"1"}),
    createElement('path', {"d":"M4 22L10 22","key":"2"}),
    createElement('path', {"d":"M4 12L10 12","key":"3"}),
    createElement('path', {"d":"M14 22L20 22","key":"4"})
  );
});

TextLigature.displayName = 'TextLigature';

module.exports = TextLigature;
module.exports.TextLigature = TextLigature;
module.exports.default = TextLigature;
