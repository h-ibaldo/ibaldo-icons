'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline, Rect } = RNSvg;

const ArrowLeftSquare = forwardRef(function ArrowLeftSquare(
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
    createElement(Polyline, {"points":"11.000000001078661 14.99999999877582 8.000000001609806 11.999999998237399 11.000000002148226 8.99999999877582","key":"0"}),
    createElement(Line, {"x1":"16.000000001609806","y1":"11.999999999674401","x2":"8.000000001609806","y2":"11.999999998237399","key":"1"}),
    createElement(Rect, {"x":"2.000000001614353","y":"1.999999999045031","width":"20","height":"20","rx":"1.999999999998408","ry":"1.999999999998408","key":"2"})
  );
});

ArrowLeftSquare.displayName = 'ArrowLeftSquare';

module.exports = ArrowLeftSquare;
module.exports.ArrowLeftSquare = ArrowLeftSquare;
module.exports.default = ArrowLeftSquare;
