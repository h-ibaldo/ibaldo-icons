'use strict';

const { createElement, forwardRef } = require('react');

const TextV = forwardRef(function TextV(
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
    createElement('path', {"d":"M4 2L12 22L20 2","key":"0"})
  );
});

TextV.displayName = 'TextV';

module.exports = TextV;
module.exports.TextV = TextV;
module.exports.default = TextV;
