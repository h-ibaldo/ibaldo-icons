'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextAlignJustifyLeft = forwardRef(function TextAlignJustifyLeft(
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
    createElement(Path, {"d":"M2 5L22.027 5","key":"0"}),
    createElement(Path, {"d":"M2 12L22.027 12","key":"1"}),
    createElement(Path, {"d":"M2 19L14.027 19","key":"2"})
  );
});

TextAlignJustifyLeft.displayName = 'TextAlignJustifyLeft';

module.exports = TextAlignJustifyLeft;
module.exports.TextAlignJustifyLeft = TextAlignJustifyLeft;
module.exports.default = TextAlignJustifyLeft;
