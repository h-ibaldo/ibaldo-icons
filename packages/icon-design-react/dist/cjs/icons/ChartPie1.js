'use strict';

const { createElement, forwardRef } = require('react');

const ChartPie1 = forwardRef(function ChartPie1(
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
    createElement('circle', {"cx":"12.016630450973025","cy":"12.000000000480213","r":"10","key":"0"}),
    createElement('polyline', {"points":"12.016630450973025 2.000000000480213 12.016630450973025 12.000000000480213 19.087675372848025 4.928955078605213","key":"1"}),
    createElement('line', {"x1":"20.016630450973025","y1":"18.000000000480213","x2":"12.016630450973025","y2":"12.000000000480213","key":"2"})
  );
});

ChartPie1.displayName = 'ChartPie1';

module.exports = ChartPie1;
module.exports.ChartPie1 = ChartPie1;
module.exports.default = ChartPie1;
