'use strict';

const { createElement, forwardRef } = require('react');

const TextPSquareOff = forwardRef(function TextPSquareOff(
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
    createElement('path', {"d":"M2 2L22 22","key":"0"}),
    createElement('path', {"d":"M21.121 21.121C21.664 20.578 22 19.828 22 19L22 5C22 3.344 20.656 2 19 2L5 2C4.172 2 3.422 2.336 2.879 2.879","key":"1"}),
    createElement('path', {"d":"M2 6.973L2 19C2 20.656 3.344 22 5 22L17.027 22","key":"2"}),
    createElement('path', {"d":"M9 9L9 7L13 7C14.656 7 16 8.344 16 10C16 11.656 14.656 13 13 13","key":"3"}),
    createElement('path', {"d":"M9 17.125L9 14","key":"4"})
  );
});

TextPSquareOff.displayName = 'TextPSquareOff';

module.exports = TextPSquareOff;
module.exports.TextPSquareOff = TextPSquareOff;
module.exports.default = TextPSquareOff;
