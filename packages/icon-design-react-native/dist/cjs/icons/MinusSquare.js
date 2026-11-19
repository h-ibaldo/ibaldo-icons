'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const MinusSquare = forwardRef(function MinusSquare(
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
    createElement(Rect, {"x":"2.000000004469257","y":"2.000000003886271","width":"20","height":"19.999999999999091","rx":"3","ry":"3","key":"0"}),
    createElement(Line, {"x1":"16","y1":"12.000000003885361","x2":"8","y2":"12.000000003885361","key":"1"})
  );
});

MinusSquare.displayName = 'MinusSquare';

module.exports = MinusSquare;
module.exports.MinusSquare = MinusSquare;
module.exports.default = MinusSquare;
