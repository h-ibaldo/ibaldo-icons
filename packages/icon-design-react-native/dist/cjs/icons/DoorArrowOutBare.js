'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polygon, Polyline } = RNSvg;

const DoorArrowOutBare = forwardRef(function DoorArrowOutBare(
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
    createElement(Polygon, {"points":"21.974731450043691 19.000000000481123 11.974731450043691 22.000000000481123 11.974731450043691 2.000000000481123 21.974731450043691 5.000000000481123 21.974731450043691 19.000000000481123","key":"0"}),
    createElement(Polyline, {"points":"5.974731450043691 7.000000000479304 5.974731450041872 4.000000000481123 8.974731450043691 4.000000000481123","key":"1"}),
    createElement(Polyline, {"points":"8.974731450043691 20.000000000481123 5.974731450041872 20.000000000481123 5.974731450041872 17.000000000479304","key":"2"}),
    createElement(Polyline, {"points":"3.974731450043691 14.000000000481123 1.974731450043691 12.000000000481123 3.974731450043691 10.000000000481123","key":"3"}),
    createElement(Line, {"x1":"8.974731450043691","y1":"12.000000000481123","x2":"1.974731450043691","y2":"12.000000000481123","key":"4"})
  );
});

DoorArrowOutBare.displayName = 'DoorArrowOutBare';

module.exports = DoorArrowOutBare;
module.exports.DoorArrowOutBare = DoorArrowOutBare;
module.exports.default = DoorArrowOutBare;
