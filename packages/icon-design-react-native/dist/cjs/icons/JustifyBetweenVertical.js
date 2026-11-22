'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const JustifyBetweenVertical = forwardRef(function JustifyBetweenVertical(
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
    createElement(Path, {"d":"M8 7L8 3C8 2.449 8.449 2 9 2L15 2C15.551 2 16 2.449 16 3L16 7C16 7.551 15.551 8 15 8L9 8C8.449 8 8 7.551 8 7Z","key":"1"}),
    createElement(Path, {"d":"M6 21L6 17C6 16.449 6.449 16 7 16L17 16C17.551 16 18 16.449 18 17L18 21C18 21.551 17.551 22 17 22L7 22C6.449 22 6 21.551 6 21Z","key":"2"})
  );
});

JustifyBetweenVertical.displayName = 'JustifyBetweenVertical';

module.exports = JustifyBetweenVertical;
module.exports.JustifyBetweenVertical = JustifyBetweenVertical;
module.exports.default = JustifyBetweenVertical;
