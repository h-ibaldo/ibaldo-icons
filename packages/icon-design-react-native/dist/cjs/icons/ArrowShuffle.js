'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowShuffle = forwardRef(function ArrowShuffle(
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
    createElement(Path, {"d":"M19 3L22 6L19 9","key":"0"}),
    createElement(Path, {"d":"M19 15L22 18L19 21","key":"1"}),
    createElement(Path, {"d":"M2 18L5.395 18C6.398 18 7.336 17.5 7.891 16.664L14.109 7.336C14.664 6.5 15.602 6 16.605 6L22 6","key":"2"}),
    createElement(Path, {"d":"M2 6L5.395 6C6.398 6 7.336 6.5 7.891 7.336L8.832 8.75","key":"3"}),
    createElement(Path, {"d":"M11 12L14.109 16.664C14.664 17.5 15.602 18 16.605 18L22 18","key":"4"})
  );
});

ArrowShuffle.displayName = 'ArrowShuffle';

module.exports = ArrowShuffle;
module.exports.ArrowShuffle = ArrowShuffle;
module.exports.default = ArrowShuffle;
