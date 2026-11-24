'use strict';

const { createElement, forwardRef } = require('react');

const BetweenVerticalEnd = forwardRef(function BetweenVerticalEnd(
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
    createElement('path', {"d":"M8 21L12.242 16.758L16.484 21","key":"0"}),
    createElement('path', {"d":"M2 13L2 3L10 3L10 13Z","key":"1"}),
    createElement('path', {"d":"M14 13L14 3L22 3L22 13Z","key":"2"})
  );
});

BetweenVerticalEnd.displayName = 'BetweenVerticalEnd';

module.exports = BetweenVerticalEnd;
module.exports.BetweenVerticalEnd = BetweenVerticalEnd;
module.exports.default = BetweenVerticalEnd;
