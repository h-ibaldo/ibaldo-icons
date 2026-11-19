'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowCornerUpLeft = forwardRef(function ArrowCornerUpLeft(
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
    createElement(Path, {"d":"M7 12L3 8L7 4","key":"0"}),
    createElement(Path, {"d":"M3 8L13 8C17.418 8 21 11.582 21 16L21 20","key":"1"})
  );
});

ArrowCornerUpLeft.displayName = 'ArrowCornerUpLeft';

module.exports = ArrowCornerUpLeft;
module.exports.ArrowCornerUpLeft = ArrowCornerUpLeft;
module.exports.default = ArrowCornerUpLeft;
