'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Path, Polyline } = RNSvg;

const ChartTrendUpSquareDot = forwardRef(function ChartTrendUpSquareDot(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Path, {"d":"M21.949462885139837,10.000000000298314v7c0,2.761423749150708-2.238576250850201,5-5,5H6.949462885139837c-2.761423749149799,0-5-2.238576250849292-5-5V7.000000000298314c0-2.761423749150708,2.238576250850201-5,5-5h7","key":"0"}),
    createElement(Circle, {"cx":"19.449462885139837","cy":"4.500000000298314","r":"2.5","key":"1"}),
    createElement(Polyline, {"points":"6.949462885139837 16.000000000480213 9.949462885139837 13.000000000480213 11.949462885139837 15.000000000480213 16.949462885139837 10.000000000480213","key":"2"}),
    createElement(Polyline, {"points":"16.949462885139837 13.000000000480213 16.949462885139837 10.000000000480213 13.949462885139837 10.000000000480213","key":"3"})
  );
});

ChartTrendUpSquareDot.displayName = 'ChartTrendUpSquareDot';

module.exports = ChartTrendUpSquareDot;
module.exports.ChartTrendUpSquareDot = ChartTrendUpSquareDot;
module.exports.default = ChartTrendUpSquareDot;
