'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const ChartLinePeakSquareMinus = forwardRef(function ChartLinePeakSquareMinus(
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
    createElement(Path, {"d":"M21.949462885142566,9.000000000927685v8c0,2.761423749150708-2.238576250845654,5-5,5H6.949462885142566c-2.761423749150708,0-5-2.238576250849292-5-5V7.000000000927685c0-2.76142374914707,2.238576250849292-5,5-5h6","key":"0"}),
    createElement(Polyline, {"points":"6.949462885142566 12.000000000927685 9.949462885142566 16.000000000927685 13.949462885142566 8.000000000927685 16.949462885142566 12.000000000927685","key":"1"}),
    createElement(Line, {"x1":"16.949462885142566","y1":"4.500000001018634","x2":"21.949462885050707","y2":"4.500000000927685","key":"2"})
  );
});

ChartLinePeakSquareMinus.displayName = 'ChartLinePeakSquareMinus';

module.exports = ChartLinePeakSquareMinus;
module.exports.ChartLinePeakSquareMinus = ChartLinePeakSquareMinus;
module.exports.default = ChartLinePeakSquareMinus;
