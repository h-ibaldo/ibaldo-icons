'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const AlertCircleSmall = forwardRef(function AlertCircleSmall(
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
    createElement(Circle, {"cx":"12.000000005000402","cy":"12.000000003886953","r":"8.000000000000341","key":"0"}),
    createElement(Line, {"x1":"12.000000005000402","y1":"15.010000003887399","x2":"12.000000005000402","y2":"15.000000003886271","key":"1"}),
    createElement(Line, {"x1":"12.000000005000402","y1":"9.000000003886271","x2":"12.000000005000402","y2":"12.000000003886271","key":"2"})
  );
});

AlertCircleSmall.displayName = 'AlertCircleSmall';

module.exports = AlertCircleSmall;
module.exports.AlertCircleSmall = AlertCircleSmall;
module.exports.default = AlertCircleSmall;
