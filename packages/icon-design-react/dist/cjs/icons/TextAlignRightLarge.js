'use strict';

const { createElement, forwardRef } = require('react');

const TextAlignRightLarge = forwardRef(function TextAlignRightLarge(
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
    createElement('path', {"d":"M20 5L4 5","key":"0"}),
    createElement('path', {"d":"M20 10L8 10","key":"1"}),
    createElement('path', {"d":"M20 15L4 15","key":"2"}),
    createElement('path', {"d":"M20 20L11 20","key":"3"})
  );
});

TextAlignRightLarge.displayName = 'TextAlignRightLarge';

module.exports = TextAlignRightLarge;
module.exports.TextAlignRightLarge = TextAlignRightLarge;
module.exports.default = TextAlignRightLarge;
