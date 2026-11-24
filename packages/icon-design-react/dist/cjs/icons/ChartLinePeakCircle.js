'use strict';

const { createElement, forwardRef } = require('react');

const ChartLinePeakCircle = forwardRef(function ChartLinePeakCircle(
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
    createElement('polyline', {"points":"6.949462885141656 12.000000000927685 9.949462885141656 16.000000000927685 13.949462885141656 8.000000000927685 16.949462885141656 12.000000000927685","key":"0"}),
    createElement('circle', {"cx":"11.949462885141656","cy":"12.000000000749424","r":"10","key":"1"})
  );
});

ChartLinePeakCircle.displayName = 'ChartLinePeakCircle';

module.exports = ChartLinePeakCircle;
module.exports.ChartLinePeakCircle = ChartLinePeakCircle;
module.exports.default = ChartLinePeakCircle;
