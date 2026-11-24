'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BetweenVerticalStart = forwardRef(function BetweenVerticalStart(
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
    createElement(Path, {"d":"M16 3L11.758 7.242L7.516 3","key":"0"}),
    createElement(Path, {"d":"M22 11L22 21L14 21L14 11Z","key":"1"}),
    createElement(Path, {"d":"M10 11L10 21L2 21L2 11Z","key":"2"})
  );
});

BetweenVerticalStart.displayName = 'BetweenVerticalStart';

module.exports = BetweenVerticalStart;
module.exports.BetweenVerticalStart = BetweenVerticalStart;
module.exports.default = BetweenVerticalStart;
