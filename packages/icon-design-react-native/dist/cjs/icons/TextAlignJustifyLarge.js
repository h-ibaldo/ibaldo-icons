'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextAlignJustifyLarge = forwardRef(function TextAlignJustifyLarge(
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
    createElement(Path, {"d":"M4 10L20 10","key":"1"}),
    createElement(Path, {"d":"M4 15L20 15","key":"2"}),
    createElement(Path, {"d":"M4 20L20 20","key":"3"})
  );
});

TextAlignJustifyLarge.displayName = 'TextAlignJustifyLarge';

module.exports = TextAlignJustifyLarge;
module.exports.TextAlignJustifyLarge = TextAlignJustifyLarge;
module.exports.default = TextAlignJustifyLarge;
