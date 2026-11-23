'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextR = forwardRef(function TextR(
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
    createElement(Path, {"d":"M6 22L6 2L13 2C15.762 2 18 4.238 18 7C18 9.762 15.762 12 13 12L6 12","key":"0"}),
    createElement(Path, {"d":"M12 12L19 22","key":"1"})
  );
});

TextR.displayName = 'TextR';

module.exports = TextR;
module.exports.TextR = TextR;
module.exports.default = TextR;
