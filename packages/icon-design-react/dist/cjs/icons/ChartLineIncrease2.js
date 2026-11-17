'use strict';

const { createElement, forwardRef } = require('react');

const ChartLineIncrease2 = forwardRef(function ChartLineIncrease2(
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
    createElement('polyline', {"points":"2 18 10 11 14 15 22 7","key":"0"}),
    createElement('polyline', {"points":"22 11 22 7 18 7","key":"1"})
  );
});

ChartLineIncrease2.displayName = 'ChartLineIncrease2';

module.exports = ChartLineIncrease2;
module.exports.ChartLineIncrease2 = ChartLineIncrease2;
module.exports.default = ChartLineIncrease2;
