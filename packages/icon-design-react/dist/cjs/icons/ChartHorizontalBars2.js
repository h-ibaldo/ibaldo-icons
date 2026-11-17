'use strict';

const { createElement, forwardRef } = require('react');

const ChartHorizontalBars2 = forwardRef(function ChartHorizontalBars2(
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
    createElement('polyline', {"points":"3.016630450973025 20.000000000480213 21.016630450973025 20.000000000480213 21.016630450973025 15.000000000480213 16.016630450973025 15.000000000480213 16.016630450973025 10.000000000480213 11.016630450973025 10.000000000480213 11.016630450973025 5.000000000480213 3.016630450973025 5.000000000480213","key":"0"}),
    createElement('line', {"x1":"3.016630450973025","y1":"2.500000000480213","x2":"3.016630450973025","y2":"22.000000000480213","key":"1"}),
    createElement('line', {"x1":"16.016630450973025","y1":"15.000000000480213","x2":"3.016630450973025","y2":"15.000000000480213","key":"2"}),
    createElement('line', {"x1":"11.016630450973025","y1":"10.000000000480213","x2":"3.016630450973025","y2":"10.000000000480213","key":"3"})
  );
});

ChartHorizontalBars2.displayName = 'ChartHorizontalBars2';

module.exports = ChartHorizontalBars2;
module.exports.ChartHorizontalBars2 = ChartHorizontalBars2;
module.exports.default = ChartHorizontalBars2;
