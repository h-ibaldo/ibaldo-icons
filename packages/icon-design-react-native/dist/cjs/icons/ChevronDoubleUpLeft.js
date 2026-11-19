'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChevronDoubleUpLeft = forwardRef(function ChevronDoubleUpLeft(
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
    createElement(Path, {"d":"M4 16L4 4L16 4","key":"0"}),
    createElement(Path, {"d":"M8 20L8 8L20 8","key":"1"})
  );
});

ChevronDoubleUpLeft.displayName = 'ChevronDoubleUpLeft';

module.exports = ChevronDoubleUpLeft;
module.exports.ChevronDoubleUpLeft = ChevronDoubleUpLeft;
module.exports.default = ChevronDoubleUpLeft;
