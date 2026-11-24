'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const PlusSquare = forwardRef(function PlusSquare(
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
    createElement(Rect, {"x":"1.974731445219732","y":"2.0000000004502","width":"20","height":"20","rx":"3","ry":"3","key":"0"}),
    createElement(Line, {"x1":"11.974731445219732","y1":"7.0000000004502","x2":"11.974731445219732","y2":"17.0000000004502","key":"1"}),
    createElement(Line, {"x1":"16.974731445219732","y1":"12.0000000004502","x2":"6.974731445219732","y2":"12.0000000004502","key":"2"})
  );
});

PlusSquare.displayName = 'PlusSquare';

module.exports = PlusSquare;
module.exports.PlusSquare = PlusSquare;
module.exports.default = PlusSquare;
