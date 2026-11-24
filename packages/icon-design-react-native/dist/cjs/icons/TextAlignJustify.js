'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextAlignJustify = forwardRef(function TextAlignJustify(
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
    createElement(Path, {"d":"M5 6L19 6","key":"0"}),
    createElement(Path, {"d":"M5 10L19 10","key":"1"}),
    createElement(Path, {"d":"M5 14L19 14","key":"2"}),
    createElement(Path, {"d":"M5 18L19 18","key":"3"})
  );
});

TextAlignJustify.displayName = 'TextAlignJustify';

module.exports = TextAlignJustify;
module.exports.TextAlignJustify = TextAlignJustify;
module.exports.default = TextAlignJustify;
