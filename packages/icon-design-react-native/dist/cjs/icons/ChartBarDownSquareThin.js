'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const ChartBarDownSquareThin = forwardRef(function ChartBarDownSquareThin(
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
    createElement(Line, {"x1":"7","y1":"12","x2":"7","y2":"6","key":"1"}),
    createElement(Line, {"x1":"12","y1":"11","x2":"12","y2":"6","key":"2"}),
    createElement(Line, {"x1":"17","y1":"15","x2":"17","y2":"6","key":"3"})
  );
});

ChartBarDownSquareThin.displayName = 'ChartBarDownSquareThin';

module.exports = ChartBarDownSquareThin;
module.exports.ChartBarDownSquareThin = ChartBarDownSquareThin;
module.exports.default = ChartBarDownSquareThin;
