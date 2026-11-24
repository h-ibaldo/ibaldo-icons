'use strict';

const { createElement, forwardRef } = require('react');

const ChartTrendUpCircle = forwardRef(function ChartTrendUpCircle(
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
    createElement('circle', {"cx":"11.949462885139837","cy":"12.000000000480213","r":"10","key":"0"}),
    createElement('polyline', {"points":"6.949462885139837 15.000000000480213 9.949462885139837 12.000000000480213 11.949462885139837 14.000000000480213 16.949462885139837 9.000000000480213","key":"1"}),
    createElement('polyline', {"points":"16.949462885139837 12.000000000480213 16.949462885139837 9.000000000480213 13.949462885139837 9.000000000480213","key":"2"})
  );
});

ChartTrendUpCircle.displayName = 'ChartTrendUpCircle';

module.exports = ChartTrendUpCircle;
module.exports.ChartTrendUpCircle = ChartTrendUpCircle;
module.exports.default = ChartTrendUpCircle;
