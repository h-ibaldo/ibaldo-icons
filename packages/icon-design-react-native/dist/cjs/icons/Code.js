'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Code = forwardRef(function Code(
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
    createElement(Path, {"d":"M6 8L2 12L6 16","key":"0"}),
    createElement(Path, {"d":"M18 8L22 12L18 16","key":"1"}),
    createElement(Path, {"d":"M14 5L10 19","key":"2"})
  );
});

Code.displayName = 'Code';

module.exports = Code;
module.exports.Code = Code;
module.exports.default = Code;
