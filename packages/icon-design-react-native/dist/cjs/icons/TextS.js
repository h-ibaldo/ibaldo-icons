'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextS = forwardRef(function TextS(
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
    createElement(Path, {"d":"M17 2L10.953 2C8.195 2 5.953 4.238 5.953 7C5.953 9.762 8.195 12 10.953 12L13 12C15.762 12 18 14.238 18 17C18 19.762 15.762 22 13 22L6 22","key":"0"})
  );
});

TextS.displayName = 'TextS';

module.exports = TextS;
module.exports.TextS = TextS;
module.exports.default = TextS;
