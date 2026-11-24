'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChevronDownLeftSmall = forwardRef(function ChevronDownLeftSmall(
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
    createElement(Path, {"d":"M10 9L10 14L15 14","key":"0"})
  );
});

ChevronDownLeftSmall.displayName = 'ChevronDownLeftSmall';

module.exports = ChevronDownLeftSmall;
module.exports.ChevronDownLeftSmall = ChevronDownLeftSmall;
module.exports.default = ChevronDownLeftSmall;
