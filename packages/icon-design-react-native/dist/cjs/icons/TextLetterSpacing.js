'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextLetterSpacing = forwardRef(function TextLetterSpacing(
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
    createElement(Path, {"d":"M7 16L12 7L17 16","key":"0"}),
    createElement(Path, {"d":"M8.668 13L15.332 13","key":"1"}),
    createElement(Path, {"d":"M22 2L22 22","key":"2"}),
    createElement(Path, {"d":"M2 2L2 22","key":"3"})
  );
});

TextLetterSpacing.displayName = 'TextLetterSpacing';

module.exports = TextLetterSpacing;
module.exports.TextLetterSpacing = TextLetterSpacing;
module.exports.default = TextLetterSpacing;
