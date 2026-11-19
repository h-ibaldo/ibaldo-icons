'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polygon } = RNSvg;

const HouseSharp = forwardRef(function HouseSharp(
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
    createElement(Polygon, {"points":"18.999999999230567 21.000000000842192 4.999999999230567 21.000000000842192 4.999999999230567 13.000000000842192 1.999999999230567 13.000000000842192 11.999999999230567 3.000000000842192 21.999999999230567 13.000000000842192 18.999999999230567 13.000000000842192 18.999999999230567 21.000000000842192","key":"0"})
  );
});

HouseSharp.displayName = 'HouseSharp';

module.exports = HouseSharp;
module.exports.HouseSharp = HouseSharp;
module.exports.default = HouseSharp;
