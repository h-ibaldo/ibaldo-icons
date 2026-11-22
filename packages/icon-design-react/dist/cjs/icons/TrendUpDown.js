'use strict';

const { createElement, forwardRef } = require('react');

const TrendUpDown = forwardRef(function TrendUpDown(
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
    createElement('path', {"d":"M2 14L9 8L13 12L22 3","key":"0"}),
    createElement('path', {"d":"M16 15L22 21","key":"1"}),
    createElement('path', {"d":"M16 3L22 3L22 9","key":"2"}),
    createElement('path', {"d":"M16 21L22 21L22 15","key":"3"})
  );
});

TrendUpDown.displayName = 'TrendUpDown';

module.exports = TrendUpDown;
module.exports.TrendUpDown = TrendUpDown;
module.exports.default = TrendUpDown;
