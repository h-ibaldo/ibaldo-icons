'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polygon, Polyline, Rect } = RNSvg;

const MobileCubeOverlap = forwardRef(function MobileCubeOverlap(
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
    createElement(Rect, {"x":"9.000000002679371","y":"2.0000000168111","width":"12.00000000894579","height":"20","rx":"1.999999999998105","ry":"1.999999999998105","key":"0"}),
    createElement(Polygon, {"points":"8.999999999599822 11.999999999326974 15 9 9.000000000411092 5.999999999326974 3 8.999999998653948 8.999999999599822 11.999999999326974","key":"1"}),
    createElement(Polyline, {"points":"3 8.999999998653948 2.99999999937063 14.999999998653948 8.999999998970452 17.999999999326974 14.99999999937063 15 15 9","key":"2"}),
    createElement(Polyline, {"points":"13.000000001149601 1.999999998068233 13.000000001060471 2.999999998068233 17.000000001060471 2.999999998606654 17.000000001149601 1.999999998606654","key":"3"})
  );
});

MobileCubeOverlap.displayName = 'MobileCubeOverlap';

module.exports = MobileCubeOverlap;
module.exports.MobileCubeOverlap = MobileCubeOverlap;
module.exports.default = MobileCubeOverlap;
