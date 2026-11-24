'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polyline, Rect } = RNSvg;

const ChartLineSquare = forwardRef(function ChartLineSquare(
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
    createElement(Rect, {"x":"2","y":"2","width":"20","height":"20","rx":"5","ry":"5","key":"0"}),
    createElement(Polyline, {"points":"6 15 9 11 13 15 18 9","key":"1"})
  );
});

ChartLineSquare.displayName = 'ChartLineSquare';

module.exports = ChartLineSquare;
module.exports.ChartLineSquare = ChartLineSquare;
module.exports.default = ChartLineSquare;
