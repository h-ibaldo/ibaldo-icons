'use strict';

const { createElement, forwardRef } = require('react');

const TextAaSquareLarge = forwardRef(function TextAaSquareLarge(
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
    createElement('path', {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z","key":"0"}),
    createElement('path', {"d":"M6 14L10 14","key":"1"}),
    createElement('path', {"d":"M16 17C14.895 17 14 16.105 14 15C14 13.895 14.895 13 16 13L18 13L18 15C18 16.105 17.105 17 16 17Z","key":"2"}),
    createElement('path', {"d":"M19 17L18 16L18 11C18 9.895 17.105 9 16 9C15 9 14 10 14 10","key":"3"}),
    createElement('path', {"d":"M5 17L6.84 7.805C6.934 7.336 7.344 7 7.82 7L8.18 7C8.656 7 9.066 7.336 9.16 7.805L11 17","key":"4"})
  );
});

TextAaSquareLarge.displayName = 'TextAaSquareLarge';

module.exports = TextAaSquareLarge;
module.exports.TextAaSquareLarge = TextAaSquareLarge;
module.exports.default = TextAaSquareLarge;
