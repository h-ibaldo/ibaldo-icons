'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextAlignJustifyRight = forwardRef(function TextAlignJustifyRight(
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
    createElement(Path, {"d":"M10 19L22.027 19","key":"2"})
  );
});

TextAlignJustifyRight.displayName = 'TextAlignJustifyRight';

module.exports = TextAlignJustifyRight;
module.exports.TextAlignJustifyRight = TextAlignJustifyRight;
module.exports.default = TextAlignJustifyRight;
