'use strict';

const { createElement, forwardRef } = require('react');

const TextZ = forwardRef(function TextZ(
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
    createElement('path', {"d":"M5 2L19 2L4 22L20 22","key":"0"})
  );
});

TextZ.displayName = 'TextZ';

module.exports = TextZ;
module.exports.TextZ = TextZ;
module.exports.default = TextZ;
