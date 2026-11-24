'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polyline, Rect } = RNSvg;

const OverscanSmall = forwardRef(function OverscanSmall(
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
    createElement(Rect, {"x":"1.974731449505271","y":"3.000000000479304","width":"20","height":"18.000000000000909","rx":"3","ry":"3","key":"0"}),
    createElement(Polyline, {"points":"12.974731449505271 8.000000000480213 11.974731450083709 7.000000000298314 10.974731449505271 8.000000000480213","key":"1"}),
    createElement(Polyline, {"points":"12.974731449505271 16.000000000480213 11.974731450083709 17.000000000662112 10.974731449505271 16.000000000480213","key":"2"}),
    createElement(Polyline, {"points":"16.974731449323372 13.000000000480213 17.974731449505271 12.00000000106229 16.974731449323372 11.000000000480213","key":"3"}),
    createElement(Polyline, {"points":"6.974731449683532 13.000000000480213 5.974731449505271 12.00000000106229 6.974731449683532 11.000000000480213","key":"4"})
  );
});

OverscanSmall.displayName = 'OverscanSmall';

module.exports = OverscanSmall;
module.exports.OverscanSmall = OverscanSmall;
module.exports.default = OverscanSmall;
