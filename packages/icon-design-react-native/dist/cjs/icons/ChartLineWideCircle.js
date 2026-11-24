'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Polyline } = RNSvg;

const ChartLineWideCircle = forwardRef(function ChartLineWideCircle(
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
    createElement(Circle, {"cx":"12","cy":"12","r":"10","key":"0"}),
    createElement(Polyline, {"points":"21.3050537109375 8.35595703125 13 15 9 11 2.933776855472388 16.1995849609375","key":"1"})
  );
});

ChartLineWideCircle.displayName = 'ChartLineWideCircle';

module.exports = ChartLineWideCircle;
module.exports.ChartLineWideCircle = ChartLineWideCircle;
module.exports.default = ChartLineWideCircle;
