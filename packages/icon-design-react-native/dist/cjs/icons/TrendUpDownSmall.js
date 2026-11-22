'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TrendUpDownSmall = forwardRef(function TrendUpDownSmall(
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
    createElement(Path, {"d":"M17 15L22 20","key":"0"}),
    createElement(Path, {"d":"M22 16L22 20L18 20","key":"1"}),
    createElement(Path, {"d":"M2 15L10 8L14 12L22 4","key":"2"}),
    createElement(Path, {"d":"M22 8L22 4L18 4","key":"3"})
  );
});

TrendUpDownSmall.displayName = 'TrendUpDownSmall';

module.exports = TrendUpDownSmall;
module.exports.TrendUpDownSmall = TrendUpDownSmall;
module.exports.default = TrendUpDownSmall;
