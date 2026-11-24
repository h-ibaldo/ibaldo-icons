'use strict';

const { createElement, forwardRef } = require('react');

const TextAlignJustifyLeft = forwardRef(function TextAlignJustifyLeft(
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
    createElement('path', {"d":"M2 5L22.027 5","key":"0"}),
    createElement('path', {"d":"M2 12L22.027 12","key":"1"}),
    createElement('path', {"d":"M2 19L14.027 19","key":"2"})
  );
});

TextAlignJustifyLeft.displayName = 'TextAlignJustifyLeft';

module.exports = TextAlignJustifyLeft;
module.exports.TextAlignJustifyLeft = TextAlignJustifyLeft;
module.exports.default = TextAlignJustifyLeft;
