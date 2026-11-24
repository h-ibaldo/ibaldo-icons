'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextP = forwardRef(function TextP(
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
    createElement(Path, {"d":"M6 22L6 2L11.5 2C15.09 2 18 4.91 18 8.5C18 12.09 15.09 15 11.5 15L6 15","key":"0"})
  );
});

TextP.displayName = 'TextP';

module.exports = TextP;
module.exports.TextP = TextP;
module.exports.default = TextP;
