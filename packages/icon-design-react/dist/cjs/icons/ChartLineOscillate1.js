'use strict';

const { createElement, forwardRef } = require('react');

const ChartLineOscillate1 = forwardRef(function ChartLineOscillate1(
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
    createElement('polyline', {"points":"7 10 11 16 17 4 21 10","key":"0"}),
    createElement('polyline', {"points":"2 2 2 22 22 22","key":"1"})
  );
});

ChartLineOscillate1.displayName = 'ChartLineOscillate1';

module.exports = ChartLineOscillate1;
module.exports.ChartLineOscillate1 = ChartLineOscillate1;
module.exports.default = ChartLineOscillate1;
