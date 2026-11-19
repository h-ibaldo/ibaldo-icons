'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChevronDoubleLeft = forwardRef(function ChevronDoubleLeft(
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
    createElement(Path, {"d":"M13 20L5 12L13 4","key":"0"}),
    createElement(Path, {"d":"M19 20L11 12L19 4","key":"1"})
  );
});

ChevronDoubleLeft.displayName = 'ChevronDoubleLeft';

module.exports = ChevronDoubleLeft;
module.exports.ChevronDoubleLeft = ChevronDoubleLeft;
module.exports.default = ChevronDoubleLeft;
