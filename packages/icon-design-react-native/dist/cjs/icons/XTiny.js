'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line } = RNSvg;

const XTiny = forwardRef(function XTiny(
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
    createElement(Line, {"x1":"7.999999990970537","y1":"16.000000000715772","x2":"15.999999990610377","y2":"8.00000000107957","key":"0"}),
    createElement(Line, {"x1":"15.999999990430297","y1":"16.000000000894943","x2":"7.999999991150617","y2":"8.0000000009004","key":"1"})
  );
});

XTiny.displayName = 'XTiny';

module.exports = XTiny;
module.exports.XTiny = XTiny;
module.exports.default = XTiny;
