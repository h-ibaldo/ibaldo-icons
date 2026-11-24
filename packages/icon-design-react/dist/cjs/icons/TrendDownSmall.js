'use strict';

const { createElement, forwardRef } = require('react');

const TrendDownSmall = forwardRef(function TrendDownSmall(
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
    createElement('path', {"d":"M2 7L10 14L14 10L22 18","key":"0"}),
    createElement('path', {"d":"M22 14L22 18L18 18","key":"1"})
  );
});

TrendDownSmall.displayName = 'TrendDownSmall';

module.exports = TrendDownSmall;
module.exports.TrendDownSmall = TrendDownSmall;
module.exports.default = TrendDownSmall;
