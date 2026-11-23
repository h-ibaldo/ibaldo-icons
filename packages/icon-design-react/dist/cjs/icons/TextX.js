'use strict';

const { createElement, forwardRef } = require('react');

const TextX = forwardRef(function TextX(
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
    createElement('path', {"d":"M5 2L19 22","key":"0"}),
    createElement('path', {"d":"M19 2L5 22","key":"1"})
  );
});

TextX.displayName = 'TextX';

module.exports = TextX;
module.exports.TextX = TextX;
module.exports.default = TextX;
