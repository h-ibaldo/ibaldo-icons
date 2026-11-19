'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const WindowPlain2 = forwardRef(function WindowPlain2(
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
    createElement(Rect, {"x":"1.999999993642632","y":"1.998779303639822","width":"20","height":"20","rx":"3","ry":"3","key":"0"}),
    createElement(Line, {"x1":"1.999999993642632","y1":"7.998779303639822","x2":"21.999999993642632","y2":"7.998779303639822","key":"1"})
  );
});

WindowPlain2.displayName = 'WindowPlain2';

module.exports = WindowPlain2;
module.exports.WindowPlain2 = WindowPlain2;
module.exports.default = WindowPlain2;
