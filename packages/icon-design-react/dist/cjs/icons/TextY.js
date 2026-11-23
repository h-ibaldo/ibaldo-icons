'use strict';

const { createElement, forwardRef } = require('react');

const TextY = forwardRef(function TextY(
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
    createElement('path', {"d":"M4 2L12 13L20 2","key":"0"}),
    createElement('path', {"d":"M12 13L12 22","key":"1"})
  );
});

TextY.displayName = 'TextY';

module.exports = TextY;
module.exports.TextY = TextY;
module.exports.default = TextY;
