'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const ChartBarSquareThin = forwardRef(function ChartBarSquareThin(
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
    createElement(Rect, {"x":"2","y":"2.000000003885361","width":"20","height":"20","rx":"5","ry":"5","key":"0"}),
    createElement(Line, {"x1":"8","y1":"16.000000003885361","x2":"8","y2":"12.000000003885361","key":"1"}),
    createElement(Line, {"x1":"12","y1":"16.000000003885361","x2":"12","y2":"8.000000003885361","key":"2"}),
    createElement(Line, {"x1":"16","y1":"16.000000003885361","x2":"16","y2":"11.000000003885361","key":"3"})
  );
});

ChartBarSquareThin.displayName = 'ChartBarSquareThin';

module.exports = ChartBarSquareThin;
module.exports.ChartBarSquareThin = ChartBarSquareThin;
module.exports.default = ChartBarSquareThin;
