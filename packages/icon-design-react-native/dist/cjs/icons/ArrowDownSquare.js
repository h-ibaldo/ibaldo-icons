'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline, Rect } = RNSvg;

const ArrowDownSquare = forwardRef(function ArrowDownSquare(
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
    createElement(Polyline, {"points":"15.025268534591305 12.999999999234205 12.025268534180213 15.99999999883039 9.025268534591305 12.999999998426574","key":"0"}),
    createElement(Line, {"x1":"12.025268535260693","y1":"7.99999999883039","x2":"12.025268534180213","y2":"15.999999998834028","key":"1"}),
    createElement(Rect, {"x":"2.025268534815041","y":"1.99999999883039","width":"20","height":"20","rx":"2","ry":"2","key":"2"})
  );
});

ArrowDownSquare.displayName = 'ArrowDownSquare';

module.exports = ArrowDownSquare;
module.exports.ArrowDownSquare = ArrowDownSquare;
module.exports.default = ArrowDownSquare;
