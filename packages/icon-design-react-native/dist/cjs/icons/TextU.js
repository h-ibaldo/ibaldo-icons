'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextU = forwardRef(function TextU(
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
    createElement(Path, {"d":"M5 2L5 15C5 18.867 8.133 22 12 22C15.867 22 19 18.867 19 15L19 2","key":"0"})
  );
});

TextU.displayName = 'TextU';

module.exports = TextU;
module.exports.TextU = TextU;
module.exports.default = TextU;
