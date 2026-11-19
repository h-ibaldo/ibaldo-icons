'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polyline } = RNSvg;

const ChartLinePeak = forwardRef(function ChartLinePeak(
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
    createElement(Polyline, {"points":"4 12.000000000480213 9 19.000000000480213 15 5.000000000480213 20 12.000000000480213","key":"0"})
  );
});

ChartLinePeak.displayName = 'ChartLinePeak';

module.exports = ChartLinePeak;
module.exports.ChartLinePeak = ChartLinePeak;
module.exports.default = ChartLinePeak;
