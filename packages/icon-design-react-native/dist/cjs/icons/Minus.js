'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line } = RNSvg;

const Minus = forwardRef(function Minus(
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
    createElement(Line, {"x1":"21.000000004469257","y1":"12.000000003885361","x2":"3.000000004469257","y2":"12.000000003885361","key":"0"})
  );
});

Minus.displayName = 'Minus';

module.exports = Minus;
module.exports.Minus = Minus;
module.exports.default = Minus;
