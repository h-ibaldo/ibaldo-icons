'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowCornerDownRight = forwardRef(function ArrowCornerDownRight(
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
    createElement(Path, {"d":"M17 12L21 16L17 20","key":"0"}),
    createElement(Path, {"d":"M21 16L11 16C6.582 16 3 12.418 3 8L3 4","key":"1"})
  );
});

ArrowCornerDownRight.displayName = 'ArrowCornerDownRight';

module.exports = ArrowCornerDownRight;
module.exports.ArrowCornerDownRight = ArrowCornerDownRight;
module.exports.default = ArrowCornerDownRight;
