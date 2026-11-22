'use strict';

const { createElement, forwardRef } = require('react');

const TrendDown = forwardRef(function TrendDown(
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
    createElement('path', {"d":"M2 7L9 13L13 9L22 18","key":"0"}),
    createElement('path', {"d":"M16 18L22 18L22 12","key":"1"})
  );
});

TrendDown.displayName = 'TrendDown';

module.exports = TrendDown;
module.exports.TrendDown = TrendDown;
module.exports.default = TrendDown;
