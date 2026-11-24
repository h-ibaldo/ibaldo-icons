'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextK = forwardRef(function TextK(
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
    createElement(Path, {"d":"M6 2.023L6 22","key":"0"}),
    createElement(Path, {"d":"M18 2.023L6 14","key":"1"}),
    createElement(Path, {"d":"M19 22L10 10","key":"2"})
  );
});

TextK.displayName = 'TextK';

module.exports = TextK;
module.exports.TextK = TextK;
module.exports.default = TextK;
