'use strict';

const { createElement, forwardRef } = require('react');

const ChartLineSquare3 = forwardRef(function ChartLineSquare3(
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
    createElement('rect', {"x":"1.949462885141656","y":"2.000000000749424","width":"20","height":"20","rx":"5","ry":"5","key":"0"}),
    createElement('polyline', {"points":"6.949462885141656 12.000000000927685 9.949462885141656 16.000000000927685 13.949462885141656 8.000000000927685 16.949462885141656 12.000000000927685","key":"1"})
  );
});

ChartLineSquare3.displayName = 'ChartLineSquare3';

module.exports = ChartLineSquare3;
module.exports.ChartLineSquare3 = ChartLineSquare3;
module.exports.default = ChartLineSquare3;
