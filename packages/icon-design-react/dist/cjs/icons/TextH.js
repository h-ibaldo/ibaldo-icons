'use strict';

const { createElement, forwardRef } = require('react');

const TextH = forwardRef(function TextH(
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
    createElement('path', {"d":"M5 2.023L5 22","key":"0"}),
    createElement('path', {"d":"M19 12.012L5 12.012","key":"1"}),
    createElement('path', {"d":"M19 2.023L19 22","key":"2"})
  );
});

TextH.displayName = 'TextH';

module.exports = TextH;
module.exports.TextH = TextH;
module.exports.default = TextH;
