'use strict';

const { createElement, forwardRef } = require('react');

const TextN = forwardRef(function TextN(
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
    createElement('path', {"d":"M5 22L5 2L19 22L19 2","key":"0"})
  );
});

TextN.displayName = 'TextN';

module.exports = TextN;
module.exports.TextN = TextN;
module.exports.default = TextN;
