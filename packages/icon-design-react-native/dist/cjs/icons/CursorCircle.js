'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CursorCircle = forwardRef(function CursorCircle(
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
    createElement(Path, {"d":"M14.355 16.594L12.117 14.355L10.25 16.223L8.02 8L16.223 10.25L14.355 12.117L16.594 14.355Z","key":"1"})
  );
});

CursorCircle.displayName = 'CursorCircle';

module.exports = CursorCircle;
module.exports.CursorCircle = CursorCircle;
module.exports.default = CursorCircle;
