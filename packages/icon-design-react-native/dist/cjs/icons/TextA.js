'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextA = forwardRef(function TextA(
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
    createElement(Path, {"d":"M3 22L12 2L21 22","key":"0"}),
    createElement(Path, {"d":"M6.148 15L17.852 15","key":"1"})
  );
});

TextA.displayName = 'TextA';

module.exports = TextA;
module.exports.TextA = TextA;
module.exports.default = TextA;
