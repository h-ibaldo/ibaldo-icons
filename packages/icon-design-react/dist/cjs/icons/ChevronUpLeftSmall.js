'use strict';

const { createElement, forwardRef } = require('react');

const ChevronUpLeftSmall = forwardRef(function ChevronUpLeftSmall(
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
    createElement('path', {"d":"M10 15L10 10L15 10","key":"0"})
  );
});

ChevronUpLeftSmall.displayName = 'ChevronUpLeftSmall';

module.exports = ChevronUpLeftSmall;
module.exports.ChevronUpLeftSmall = ChevronUpLeftSmall;
module.exports.default = ChevronUpLeftSmall;
