'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TriangleUpCircle = forwardRef(function TriangleUpCircle(
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
    createElement(Path, {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"0"}),
    createElement(Path, {"d":"M15.195 15L8.805 15C8.02 15 7.539 14.137 7.957 13.469L11.152 8.355C11.543 7.73 12.457 7.73 12.848 8.355L16.043 13.469C16.461 14.137 15.98 15 15.195 15Z","key":"1"})
  );
});

TriangleUpCircle.displayName = 'TriangleUpCircle';

module.exports = TriangleUpCircle;
module.exports.TriangleUpCircle = TriangleUpCircle;
module.exports.default = TriangleUpCircle;
