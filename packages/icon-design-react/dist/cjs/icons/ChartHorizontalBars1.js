'use strict';

const { createElement, forwardRef } = require('react');

const ChartHorizontalBars1 = forwardRef(function ChartHorizontalBars1(
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
    createElement('polygon', {"points":"21.016630450973025 15.000000000480213 16.016630450973025 15.000000000480213 16.016630450973025 9.000000000480213 11.016630450973025 9.000000000480213 11.016630450973025 3.000000000480213 3.016630450973025 3.000000000480213 3.016630450973025 9.000000000480213 3.016630450973025 15.000000000480213 3.016630450973025 21.000000000480213 21.016630450973025 21.000000000480213 21.016630450973025 15.000000000480213","key":"0"}),
    createElement('line', {"x1":"16.016630450973025","y1":"15.000000000480213","x2":"3.016630450973025","y2":"15.000000000480213","key":"1"}),
    createElement('line', {"x1":"11.016630450973025","y1":"9.000000000480213","x2":"3.016630450973025","y2":"9.000000000480213","key":"2"})
  );
});

ChartHorizontalBars1.displayName = 'ChartHorizontalBars1';

module.exports = ChartHorizontalBars1;
module.exports.ChartHorizontalBars1 = ChartHorizontalBars1;
module.exports.default = ChartHorizontalBars1;
