'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline, Rect } = RNSvg;

const WindowChartZigzagBare = forwardRef(function WindowChartZigzagBare(
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
    createElement(Rect, {"x":"2.00000000018008","y":"2.00000000044929","width":"20","height":"20","rx":"1.999999999999977","ry":"1.999999999999977","key":"0"}),
    createElement(Polyline, {"points":"6.00000000018008 18.000000000448381 8.00000000018008 14.000000000448381 10.00000000018008 17.000000000448381 13.00000000018008 12.000000000448381 15.00000000018008 15.000000000448381 18.00000000018008 10.000000000448381","key":"1"}),
    createElement(Line, {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381","key":"2"}),
    createElement(Line, {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381","key":"3"}),
    createElement(Line, {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381","key":"4"})
  );
});

WindowChartZigzagBare.displayName = 'WindowChartZigzagBare';

module.exports = WindowChartZigzagBare;
module.exports.WindowChartZigzagBare = WindowChartZigzagBare;
module.exports.default = WindowChartZigzagBare;
