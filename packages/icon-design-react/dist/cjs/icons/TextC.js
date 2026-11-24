'use strict';

const { createElement, forwardRef } = require('react');

const TextC = forwardRef(function TextC(
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
    createElement('path', {"d":"M12 2C7 2 4 6 4 12C4 18 7 22 12 22","key":"0"}),
    createElement('path', {"d":"M17.199 20C15.875 21.281 14.117 22 12 22","key":"1"}),
    createElement('path', {"d":"M12 2C14.617 2 16.684 3.094 18.063 5","key":"2"})
  );
});

TextC.displayName = 'TextC';

module.exports = TextC;
module.exports.TextC = TextC;
module.exports.default = TextC;
