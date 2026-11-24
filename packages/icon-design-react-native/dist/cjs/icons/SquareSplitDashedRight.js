'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SquareSplitDashedRight = forwardRef(function SquareSplitDashedRight(
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
    createElement(Path, {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z","key":"0"}),
    createElement(Path, {"d":"M15 22L15 20","key":"1"}),
    createElement(Path, {"d":"M15 16L15 14","key":"2"}),
    createElement(Path, {"d":"M15 10L15 8","key":"3"}),
    createElement(Path, {"d":"M15 4L15 2","key":"4"})
  );
});

SquareSplitDashedRight.displayName = 'SquareSplitDashedRight';

module.exports = SquareSplitDashedRight;
module.exports.SquareSplitDashedRight = SquareSplitDashedRight;
module.exports.default = SquareSplitDashedRight;
