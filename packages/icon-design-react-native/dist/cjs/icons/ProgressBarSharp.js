'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Rect } = RNSvg;

const ProgressBarSharp = forwardRef(function ProgressBarSharp(
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
    createElement(Rect, {"x":"1.974731449503452","y":"8.000000000480213","width":"20","height":"8","key":"0"}),
    createElement(Rect, {"x":"4.974731449503452","y":"11.000000000480213","width":"8","height":"2","key":"1"})
  );
});

ProgressBarSharp.displayName = 'ProgressBarSharp';

module.exports = ProgressBarSharp;
module.exports.ProgressBarSharp = ProgressBarSharp;
module.exports.default = ProgressBarSharp;
