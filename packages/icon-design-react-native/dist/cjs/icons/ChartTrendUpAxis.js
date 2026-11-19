'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polyline } = RNSvg;

const ChartTrendUpAxis = forwardRef(function ChartTrendUpAxis(
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
    createElement(Polyline, {"points":"2 2 2 22 22 22","key":"0"}),
    createElement(Polyline, {"points":"6 16 12 10 15 13 22 6","key":"1"}),
    createElement(Polyline, {"points":"22 10 22 6 18 6","key":"2"})
  );
});

ChartTrendUpAxis.displayName = 'ChartTrendUpAxis';

module.exports = ChartTrendUpAxis;
module.exports.ChartTrendUpAxis = ChartTrendUpAxis;
module.exports.default = ChartTrendUpAxis;
