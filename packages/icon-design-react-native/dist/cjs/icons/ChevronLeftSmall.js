'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChevronLeftSmall = forwardRef(function ChevronLeftSmall(
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
    createElement(Path, {"d":"M13 9L10 12L13 15","key":"0"})
  );
});

ChevronLeftSmall.displayName = 'ChevronLeftSmall';

module.exports = ChevronLeftSmall;
module.exports.ChevronLeftSmall = ChevronLeftSmall;
module.exports.default = ChevronLeftSmall;
