'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Polyline, Rect } = RNSvg;

const DashboardChart = forwardRef(function DashboardChart(
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
    createElement(Rect, {"x":"15.999999990790457","y":"2.000000000448381","width":"6","height":"8","rx":"1","ry":"1","key":"0"}),
    createElement(Rect, {"x":"1.999999990790457","y":"16.000000000448381","width":"10","height":"6","rx":"1","ry":"1","key":"1"}),
    createElement(Circle, {"cx":"6.999999990790457","cy":"7.000000000449745","r":"4.999999999999773","key":"2"}),
    createElement(Line, {"x1":"15.999999990790457","y1":"22.0000000004502","x2":"21.999999990790457","y2":"22.0000000004502","key":"3"}),
    createElement(Line, {"x1":"15.999999990790457","y1":"18.000000000448381","x2":"21.999999990790457","y2":"18.000000000448381","key":"4"}),
    createElement(Line, {"x1":"15.999999990790457","y1":"14.000000000448381","x2":"21.999999990790457","y2":"14.000000000448381","key":"5"}),
    createElement(Polyline, {"points":"6.999999990790457 2.000000000448381 6.999999990790457 7.0000000004502 11.999999990790457 7.0000000004502","key":"6"})
  );
});

DashboardChart.displayName = 'DashboardChart';

module.exports = DashboardChart;
module.exports.DashboardChart = DashboardChart;
module.exports.default = DashboardChart;
