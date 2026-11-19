'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polyline, Rect } = RNSvg;

const ChartTrendUpSquare = forwardRef(function ChartTrendUpSquare(
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
    createElement(Rect, {"x":"1.949462885139837","y":"2.000000000480213","width":"20","height":"20","rx":"5","ry":"5","key":"0"}),
    createElement(Polyline, {"points":"6.949462885139837 15.000000000480213 9.949462885139837 12.000000000480213 11.949462885139837 14.000000000480213 16.949462885139837 9.000000000480213","key":"1"}),
    createElement(Polyline, {"points":"16.949462885139837 12.000000000480213 16.949462885139837 9.000000000480213 13.949462885139837 9.000000000480213","key":"2"})
  );
});

ChartTrendUpSquare.displayName = 'ChartTrendUpSquare';

module.exports = ChartTrendUpSquare;
module.exports.ChartTrendUpSquare = ChartTrendUpSquare;
module.exports.default = ChartTrendUpSquare;
