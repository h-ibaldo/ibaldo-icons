'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line } = RNSvg;

const XLarge = forwardRef(function XLarge(
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
    createElement(Line, {"x1":"1.999999990790457","y1":"22.000000000897671","x2":"21.999999990790457","y2":"2.000000000897671","key":"0"}),
    createElement(Line, {"x1":"21.999999990799552","y1":"22.000000001345143","x2":"1.999999991699951","y2":"2.000000000448381","key":"1"})
  );
});

XLarge.displayName = 'XLarge';

module.exports = XLarge;
module.exports.XLarge = XLarge;
module.exports.default = XLarge;
