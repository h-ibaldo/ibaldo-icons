'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SquareStackArrowRight = forwardRef(function SquareStackArrowRight(
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
    createElement(Path, {"d":"M19.898 22L10.102 22C8.941 22 8 21.059 8 19.898L8 10.102C8 8.941 8.941 8 10.102 8L19.898 8C21.059 8 22 8.941 22 10.102L22 19.898C22 21.059 21.059 22 19.898 22Z","key":"0"}),
    createElement(Path, {"d":"M17 15L3.949 15C2.871 15 2 14.129 2 13.051L2 3.949C2 2.871 2.871 2 3.949 2L13.051 2C14.129 2 15 2.871 15 3.949L15 8","key":"1"}),
    createElement(Path, {"d":"M14 12L17 15L14 18","key":"2"})
  );
});

SquareStackArrowRight.displayName = 'SquareStackArrowRight';

module.exports = SquareStackArrowRight;
module.exports.SquareStackArrowRight = SquareStackArrowRight;
module.exports.default = SquareStackArrowRight;
