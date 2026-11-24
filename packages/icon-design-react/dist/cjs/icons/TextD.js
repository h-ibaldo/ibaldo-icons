'use strict';

const { createElement, forwardRef } = require('react');

const TextD = forwardRef(function TextD(
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
    createElement('path', {"d":"M5 2L10 2C15.523 2 20 6.477 20 12C20 17.523 15.523 22 10 22L5 22Z","key":"0"})
  );
});

TextD.displayName = 'TextD';

module.exports = TextD;
module.exports.TextD = TextD;
module.exports.default = TextD;
