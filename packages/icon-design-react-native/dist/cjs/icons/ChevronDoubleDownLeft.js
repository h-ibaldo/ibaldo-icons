'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChevronDoubleDownLeft = forwardRef(function ChevronDoubleDownLeft(
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
    createElement(Path, {"d":"M16 20L4 20L4 8","key":"0"}),
    createElement(Path, {"d":"M20 16L8 16L8 4","key":"1"})
  );
});

ChevronDoubleDownLeft.displayName = 'ChevronDoubleDownLeft';

module.exports = ChevronDoubleDownLeft;
module.exports.ChevronDoubleDownLeft = ChevronDoubleDownLeft;
module.exports.default = ChevronDoubleDownLeft;
