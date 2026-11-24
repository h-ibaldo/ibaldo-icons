'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Polyline } = RNSvg;

const ChartLineCircle = forwardRef(function ChartLineCircle(
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
    createElement(Circle, {"cx":"11.974731440100186","cy":"12.000000003885361","r":"10","key":"0"}),
    createElement(Polyline, {"points":"6.974731440100186 15.000000003885361 9.974731440100186 11.000000003885361 13.974731440100186 14.000000003885361 16.974731440100186 10.000000003885361","key":"1"})
  );
});

ChartLineCircle.displayName = 'ChartLineCircle';

module.exports = ChartLineCircle;
module.exports.ChartLineCircle = ChartLineCircle;
module.exports.default = ChartLineCircle;
