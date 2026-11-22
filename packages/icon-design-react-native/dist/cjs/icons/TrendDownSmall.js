'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TrendDownSmall = forwardRef(function TrendDownSmall(
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
    createElement(Path, {"d":"M2 7L10 14L14 10L22 18","key":"0"}),
    createElement(Path, {"d":"M22 14L22 18L18 18","key":"1"})
  );
});

TrendDownSmall.displayName = 'TrendDownSmall';

module.exports = TrendDownSmall;
module.exports.TrendDownSmall = TrendDownSmall;
module.exports.default = TrendDownSmall;
