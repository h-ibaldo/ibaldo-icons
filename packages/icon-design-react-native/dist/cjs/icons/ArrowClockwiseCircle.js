'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowClockwiseCircle = forwardRef(function ArrowClockwiseCircle(
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
    createElement(Path, {"d":"M17 13L14 10C12.344 8.344 9.656 8.344 8 10C6.344 11.656 6.344 14.344 8 16L9 17","key":"0"}),
    createElement(Path, {"d":"M13 13L17 13L17 9","key":"1"}),
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"2"})
  );
});

ArrowClockwiseCircle.displayName = 'ArrowClockwiseCircle';

module.exports = ArrowClockwiseCircle;
module.exports.ArrowClockwiseCircle = ArrowClockwiseCircle;
module.exports.default = ArrowClockwiseCircle;
