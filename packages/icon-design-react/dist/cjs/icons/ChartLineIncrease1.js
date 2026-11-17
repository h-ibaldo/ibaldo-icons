'use strict';

const { createElement, forwardRef } = require('react');

const ChartLineIncrease1 = forwardRef(function ChartLineIncrease1(
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
    createElement('polyline', {"points":"2 2 2 22 22 22","key":"0"}),
    createElement('polyline', {"points":"6 16 12 10 15 13 22 6","key":"1"}),
    createElement('polyline', {"points":"22 10 22 6 18 6","key":"2"})
  );
});

ChartLineIncrease1.displayName = 'ChartLineIncrease1';

module.exports = ChartLineIncrease1;
module.exports.ChartLineIncrease1 = ChartLineIncrease1;
module.exports.default = ChartLineIncrease1;
