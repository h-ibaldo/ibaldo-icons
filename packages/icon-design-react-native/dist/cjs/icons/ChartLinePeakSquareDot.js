'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Path, Polyline } = RNSvg;

const ChartLinePeakSquareDot = forwardRef(function ChartLinePeakSquareDot(
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
    createElement(Path, {"d":"M21.949462885141656,10.000000000749424v7c0,2.761423749150708-2.238576250847473,5-5,5H6.949462885141656c-2.761423749149799,0-5-2.238576250849292-5-5V7.000000000749424c0-2.761423749150708,2.238576250850201-5,5-5h7","key":"0"}),
    createElement(Circle, {"cx":"19.449462885138928","cy":"4.500000000749424","r":"2.5","key":"1"}),
    createElement(Polyline, {"points":"6.949462885141656 12.000000000927685 9.949462885141656 16.000000000927685 13.949462885141656 8.000000000927685 16.949462885141656 12.000000000927685","key":"2"})
  );
});

ChartLinePeakSquareDot.displayName = 'ChartLinePeakSquareDot';

module.exports = ChartLinePeakSquareDot;
module.exports.ChartLinePeakSquareDot = ChartLinePeakSquareDot;
module.exports.default = ChartLinePeakSquareDot;
