'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChevronDoubleDownRight = forwardRef(function ChevronDoubleDownRight(
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
    createElement(Path, {"d":"M20 8L20 20L8 20","key":"0"}),
    createElement(Path, {"d":"M16 4L16 16L4 16","key":"1"})
  );
});

ChevronDoubleDownRight.displayName = 'ChevronDoubleDownRight';

module.exports = ChevronDoubleDownRight;
module.exports.ChevronDoubleDownRight = ChevronDoubleDownRight;
module.exports.default = ChevronDoubleDownRight;
