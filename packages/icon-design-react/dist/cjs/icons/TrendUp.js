'use strict';

const { createElement, forwardRef } = require('react');

const TrendUp = forwardRef(function TrendUp(
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
    createElement('path', {"d":"M2 18L9 12L13 16L22 7","key":"0"}),
    createElement('path', {"d":"M16 7L22 7L22 13","key":"1"})
  );
});

TrendUp.displayName = 'TrendUp';

module.exports = TrendUp;
module.exports.TrendUp = TrendUp;
module.exports.default = TrendUp;
