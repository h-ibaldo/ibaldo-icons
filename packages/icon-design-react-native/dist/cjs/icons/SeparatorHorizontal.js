'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SeparatorHorizontal = forwardRef(function SeparatorHorizontal(
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
    createElement(Path, {"d":"M7 17L12.316 22L17.637 17","key":"1"}),
    createElement(Path, {"d":"M17.637 6.859L12.316 2L7 6.859","key":"2"})
  );
});

SeparatorHorizontal.displayName = 'SeparatorHorizontal';

module.exports = SeparatorHorizontal;
module.exports.SeparatorHorizontal = SeparatorHorizontal;
module.exports.default = SeparatorHorizontal;
