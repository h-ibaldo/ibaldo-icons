'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line } = RNSvg;

const XSmall = forwardRef(function XSmall(
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
    createElement(Line, {"x1":"5.999999991059667","y1":"18.000000000626642","x2":"17.999999990510332","y2":"6.000000001168701","key":"0"}),
    createElement(Line, {"x1":"17.999999990250217","y1":"18.000000000894943","x2":"5.999999991330697","y2":"6.0000000009004","key":"1"})
  );
});

XSmall.displayName = 'XSmall';

module.exports = XSmall;
module.exports.XSmall = XSmall;
module.exports.default = XSmall;
