'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextJ = forwardRef(function TextJ(
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
    createElement(Path, {"d":"M18 2.023L18 16C18 19.313 15.313 22 12 22C8.688 22 6 19.313 6 16L6 15","key":"0"})
  );
});

TextJ.displayName = 'TextJ';

module.exports = TextJ;
module.exports.TextJ = TextJ;
module.exports.default = TextJ;
