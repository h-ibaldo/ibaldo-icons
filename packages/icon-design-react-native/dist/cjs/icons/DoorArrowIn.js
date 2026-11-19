'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polygon, Polyline } = RNSvg;

const DoorArrowIn = forwardRef(function DoorArrowIn(
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
    createElement(Line, {"x1":"15.974731450043691","y1":"10.000000000481123","x2":"15.974731450043691","y2":"14.000000000481123","key":"0"}),
    createElement(Polygon, {"points":"21.974731450043691 19.000000000481123 11.974731450043691 22.000000000481123 11.974731450043691 2.000000000481123 21.974731450043691 5.000000000481123 21.974731450043691 19.000000000481123","key":"1"}),
    createElement(Polyline, {"points":"4.974731450043691 7.000000000479304 4.974731450043691 4.000000000481123 8.974731450043691 4.000000000481123","key":"2"}),
    createElement(Polyline, {"points":"8.974731450043691 20.000000000481123 4.974731450043691 20.000000000481123 4.974731450043691 17.000000000479304","key":"3"}),
    createElement(Polyline, {"points":"6.974731450043691 10.000000000479304 8.974731450043691 12.000000000479304 6.974731450043691 14.000000000481123","key":"4"}),
    createElement(Line, {"x1":"1.974731450043691","y1":"12.000000000479304","x2":"8.974731450043691","y2":"12.000000000479304","key":"5"})
  );
});

DoorArrowIn.displayName = 'DoorArrowIn';

module.exports = DoorArrowIn;
module.exports.DoorArrowIn = DoorArrowIn;
module.exports.default = DoorArrowIn;
