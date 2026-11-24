'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextG = forwardRef(function TextG(
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
    createElement(Path, {"d":"M12 2C7 2 4 6 4 12C4 18 7 22 12 22","key":"0"}),
    createElement(Path, {"d":"M12 2C14.617 2 16.684 3.094 18.063 5","key":"1"}),
    createElement(Path, {"d":"M12 22C16.375 22 19 18.398 19 13L11.93 13","key":"2"})
  );
});

TextG.displayName = 'TextG';

module.exports = TextG;
module.exports.TextG = TextG;
module.exports.default = TextG;
