'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextAlignCenterLarge = forwardRef(function TextAlignCenterLarge(
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
    createElement(Path, {"d":"M4 5L20 5","key":"0"}),
    createElement(Path, {"d":"M6 10L18 10","key":"1"}),
    createElement(Path, {"d":"M4 15L20 15","key":"2"}),
    createElement(Path, {"d":"M7 20L17 20","key":"3"})
  );
});

TextAlignCenterLarge.displayName = 'TextAlignCenterLarge';

module.exports = TextAlignCenterLarge;
module.exports.TextAlignCenterLarge = TextAlignCenterLarge;
module.exports.default = TextAlignCenterLarge;
