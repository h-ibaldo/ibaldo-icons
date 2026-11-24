'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SeparatorHorizontalIn = forwardRef(function SeparatorHorizontalIn(
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
    createElement(Path, {"d":"M2 12L22 12","key":"0"}),
    createElement(Path, {"d":"M17.637 22L12.316 17L7 22","key":"1"}),
    createElement(Path, {"d":"M7 2L12.316 6.859L17.637 2","key":"2"})
  );
});

SeparatorHorizontalIn.displayName = 'SeparatorHorizontalIn';

module.exports = SeparatorHorizontalIn;
module.exports.SeparatorHorizontalIn = SeparatorHorizontalIn;
module.exports.default = SeparatorHorizontalIn;
