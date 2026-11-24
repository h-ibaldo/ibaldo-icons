'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const MinimizeSquare = forwardRef(function MinimizeSquare(
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
    createElement(Rect, {"x":"1.94946288328174","y":"1.998779303956326","width":"20","height":"20","rx":"3","ry":"3","key":"0"}),
    createElement(Line, {"x1":"16.94946288328174","y1":"16.998779303956326","x2":"6.94946288328174","y2":"16.998779303956326","key":"1"})
  );
});

MinimizeSquare.displayName = 'MinimizeSquare';

module.exports = MinimizeSquare;
module.exports.MinimizeSquare = MinimizeSquare;
module.exports.default = MinimizeSquare;
