'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CursorUpRightCircle = forwardRef(function CursorUpRightCircle(
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
    createElement(Path, {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z","key":"0"}),
    createElement(Path, {"d":"M7.406 14.355L9.645 12.117L7.777 10.25L15.977 8L13.75 16.223L11.883 14.355L9.645 16.594Z","key":"1"})
  );
});

CursorUpRightCircle.displayName = 'CursorUpRightCircle';

module.exports = CursorUpRightCircle;
module.exports.CursorUpRightCircle = CursorUpRightCircle;
module.exports.default = CursorUpRightCircle;
