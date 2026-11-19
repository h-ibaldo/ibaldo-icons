'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polyline } = RNSvg;

const TabCheckSharp = forwardRef(function TabCheckSharp(
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
    createElement(Polyline, {"points":"12.050537104500108 21.997565477288845 2.050537104500108 21.997565477288845 2.050537104500108 1.997565477288845 10.050537104500108 1.997565477288845 13.050537104500108 5.997565477288845 22.050537104500108 5.997565477288845 22.050537104500108 12.997565477288845","key":"0"}),
    createElement(Polyline, {"points":"15.050537104500108 1.997565477288845 22.050537104500108 1.997565477288845 22.050537104500108 5.997565477288845","key":"1"}),
    createElement(Polyline, {"points":"22.050537104500108 16.997565477285207 18.050537104500108 21.997565477285207 15.050537104500108 18.997565477285207","key":"2"})
  );
});

TabCheckSharp.displayName = 'TabCheckSharp';

module.exports = TabCheckSharp;
module.exports.TabCheckSharp = TabCheckSharp;
module.exports.default = TabCheckSharp;
