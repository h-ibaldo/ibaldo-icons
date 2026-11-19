'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const ChartDonut = forwardRef(function ChartDonut(
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
    createElement(Circle, {"cx":"11.949462885142566","cy":"12.000000000480213","r":"10","key":"0"}),
    createElement(Circle, {"cx":"11.949462885142566","cy":"12.000000000480213","r":"5","key":"1"}),
    createElement(Line, {"x1":"11.949462885142566","y1":"2.000000000480213","x2":"11.949462885142566","y2":"7.000000000480213","key":"2"}),
    createElement(Line, {"x1":"19.020530697164759","y1":"19.071067812190449","x2":"15.484996791152298","y2":"15.535533906338969","key":"3"})
  );
});

ChartDonut.displayName = 'ChartDonut';

module.exports = ChartDonut;
module.exports.ChartDonut = ChartDonut;
module.exports.default = ChartDonut;
