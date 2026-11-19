'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const ChartBarHorizontalSquareThin = forwardRef(function ChartBarHorizontalSquareThin(
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
    createElement(Rect, {"x":"1.949462885142566","y":"2.000000000480213","width":"20","height":"20","key":"0"}),
    createElement(Line, {"x1":"1.949462885144385","y1":"7.000000000480213","x2":"6.949462885142566","y2":"7.000000000480213","key":"1"}),
    createElement(Line, {"x1":"1.949462885144385","y1":"12.000000000480213","x2":"15.949462885142566","y2":"12.000000000480213","key":"2"}),
    createElement(Line, {"x1":"1.949462885144385","y1":"17.000000000480213","x2":"12.949462885142566","y2":"17.000000000480213","key":"3"})
  );
});

ChartBarHorizontalSquareThin.displayName = 'ChartBarHorizontalSquareThin';

module.exports = ChartBarHorizontalSquareThin;
module.exports.ChartBarHorizontalSquareThin = ChartBarHorizontalSquareThin;
module.exports.default = ChartBarHorizontalSquareThin;
