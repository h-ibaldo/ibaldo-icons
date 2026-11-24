'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline, Rect } = RNSvg;

const DoorSquare = forwardRef(function DoorSquare(
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
    createElement(Line, {"x1":"7.974731450043691","y1":"8.000000000481123","x2":"7.974731450043691","y2":"10.000000000481123","key":"0"}),
    createElement(Rect, {"x":"1.974731450043691","y":"2.000000000479304","width":"20","height":"20","rx":"3","ry":"3","key":"1"}),
    createElement(Polyline, {"points":"3.283752446137441 21.476379395012373 11.974731450043691 17.000000000481123 11.974731450043691 2.000000000481123","key":"2"})
  );
});

DoorSquare.displayName = 'DoorSquare';

module.exports = DoorSquare;
module.exports.DoorSquare = DoorSquare;
module.exports.default = DoorSquare;
