'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline } = RNSvg;

const Ethernet = forwardRef(function Ethernet(
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
    createElement(Polyline, {"points":"5.000000000029104 7.999999999979991 2.000000000029104 11.999999999979991 5.000000000029104 15.999999999979991","key":"0"}),
    createElement(Polyline, {"points":"19.000000000029104 15.999999999979991 22.000000000029104 11.999999999979991 19.000000000029104 7.999999999979991","key":"1"}),
    createElement(Line, {"x1":"12.000000000029104","y1":"12.009999999980209","x2":"12.000000000029104","y2":"11.999999999979991","key":"2"}),
    createElement(Line, {"x1":"16.000000000029104","y1":"12.009999999980209","x2":"16.000000000029104","y2":"11.999999999979991","key":"3"}),
    createElement(Line, {"x1":"8.000000000029104","y1":"12.009999999980209","x2":"8.000000000029104","y2":"11.999999999979991","key":"4"})
  );
});

Ethernet.displayName = 'Ethernet';

module.exports = Ethernet;
module.exports.Ethernet = Ethernet;
module.exports.default = Ethernet;
