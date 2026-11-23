'use strict';

const { createElement, forwardRef } = require('react');

const BetweenVerticalStart = forwardRef(function BetweenVerticalStart(
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
    createElement('path', {"d":"M16 3L11.758 7.242L7.516 3","key":"0"}),
    createElement('path', {"d":"M22 11L22 21L14 21L14 11Z","key":"1"}),
    createElement('path', {"d":"M10 11L10 21L2 21L2 11Z","key":"2"})
  );
});

BetweenVerticalStart.displayName = 'BetweenVerticalStart';

module.exports = BetweenVerticalStart;
module.exports.BetweenVerticalStart = BetweenVerticalStart;
module.exports.default = BetweenVerticalStart;
