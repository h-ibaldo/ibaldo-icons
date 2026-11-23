'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextD = forwardRef(function TextD(
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
    createElement(Path, {"d":"M5 2L10 2C15.523 2 20 6.477 20 12C20 17.523 15.523 22 10 22L5 22Z","key":"0"})
  );
});

TextD.displayName = 'TextD';

module.exports = TextD;
module.exports.TextD = TextD;
module.exports.default = TextD;
