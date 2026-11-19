'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polyline } = RNSvg;

const ChartLinePeakAxis = forwardRef(function ChartLinePeakAxis(
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
    createElement(Polyline, {"points":"7 10 11 16 17 4 21 10","key":"0"}),
    createElement(Polyline, {"points":"2 2 2 22 22 22","key":"1"})
  );
});

ChartLinePeakAxis.displayName = 'ChartLinePeakAxis';

module.exports = ChartLinePeakAxis;
module.exports.ChartLinePeakAxis = ChartLinePeakAxis;
module.exports.default = ChartLinePeakAxis;
