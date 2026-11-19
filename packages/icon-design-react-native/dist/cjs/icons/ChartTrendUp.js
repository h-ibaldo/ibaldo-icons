'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polyline } = RNSvg;

const ChartTrendUp = forwardRef(function ChartTrendUp(
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
    createElement(Polyline, {"points":"2 18 10 11 14 15 22 7","key":"0"}),
    createElement(Polyline, {"points":"22 11 22 7 18 7","key":"1"})
  );
});

ChartTrendUp.displayName = 'ChartTrendUp';

module.exports = ChartTrendUp;
module.exports.ChartTrendUp = ChartTrendUp;
module.exports.default = ChartTrendUp;
