'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line } = RNSvg;

const Minimize = forwardRef(function Minimize(
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
    createElement(Line, {"x1":"18.94946288328174","y1":"18.998779303956326","x2":"4.94946288328174","y2":"18.998779303956326","key":"0"})
  );
});

Minimize.displayName = 'Minimize';

module.exports = Minimize;
module.exports.Minimize = Minimize;
module.exports.default = Minimize;
