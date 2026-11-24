'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline, Rect } = RNSvg;

const WindowChartArrow = forwardRef(function WindowChartArrow(
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
    createElement(Rect, {"x":"2.000000000184627","y":"2.000000000448381","width":"20","height":"20","rx":"2","ry":"2","key":"0"}),
    createElement(Line, {"x1":"2.000000000184627","y1":"8.000000000448381","x2":"22.000000000184627","y2":"8.000000000448381","key":"1"}),
    createElement(Polyline, {"points":"6.000000000184627 18.0000000004502 10.000000000184627 14.000000000446562 13.000000000184627 17.000000000448381 18.000000000184627 12.0000000004502","key":"2"}),
    createElement(Polyline, {"points":"15.000000000183718 12.000000000448381 18.000000000183718 12.000000000448381 18.000000000183718 15.000000000448381","key":"3"}),
    createElement(Line, {"x1":"5.010000000184846","y1":"5.000000000448381","x2":"5.000000000184627","y2":"5.000000000448381","key":"4"}),
    createElement(Line, {"x1":"8.010000000184846","y1":"5.000000000448381","x2":"8.000000000184627","y2":"5.000000000448381","key":"5"}),
    createElement(Line, {"x1":"11.010000000184846","y1":"5.000000000448381","x2":"11.000000000184627","y2":"5.000000000448381","key":"6"})
  );
});

WindowChartArrow.displayName = 'WindowChartArrow';

module.exports = WindowChartArrow;
module.exports.WindowChartArrow = WindowChartArrow;
module.exports.default = WindowChartArrow;
