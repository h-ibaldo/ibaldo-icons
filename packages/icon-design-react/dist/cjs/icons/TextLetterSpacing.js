'use strict';

const { createElement, forwardRef } = require('react');

const TextLetterSpacing = forwardRef(function TextLetterSpacing(
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
    createElement('path', {"d":"M7 16L12 7L17 16","key":"0"}),
    createElement('path', {"d":"M8.668 13L15.332 13","key":"1"}),
    createElement('path', {"d":"M22 2L22 22","key":"2"}),
    createElement('path', {"d":"M2 2L2 22","key":"3"})
  );
});

TextLetterSpacing.displayName = 'TextLetterSpacing';

module.exports = TextLetterSpacing;
module.exports.TextLetterSpacing = TextLetterSpacing;
module.exports.default = TextLetterSpacing;
