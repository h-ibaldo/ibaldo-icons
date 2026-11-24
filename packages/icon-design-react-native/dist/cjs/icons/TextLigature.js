'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextLigature = forwardRef(function TextLigature(
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
    createElement(Path, {"d":"M7 22L7 7C7 4.238 9.238 2 12 2L12.051 2C14.813 2 17.051 4.238 17.051 7","key":"0"}),
    createElement(Path, {"d":"M17 22L17 12.039L14.047 12.039","key":"1"}),
    createElement(Path, {"d":"M4 22L10 22","key":"2"}),
    createElement(Path, {"d":"M4 12L10 12","key":"3"}),
    createElement(Path, {"d":"M14 22L20 22","key":"4"})
  );
});

TextLigature.displayName = 'TextLigature';

module.exports = TextLigature;
module.exports.TextLigature = TextLigature;
module.exports.default = TextLigature;
