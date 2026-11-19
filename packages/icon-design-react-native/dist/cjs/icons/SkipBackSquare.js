'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SkipBackSquare = forwardRef(function SkipBackSquare(
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
    createElement(Path, {"d":"M7 7L7 17","key":"0"}),
    createElement(Path, {"d":"M17 7.766L17 16.234C17 17.012 16.152 17.492 15.484 17.09L7 12L15.484 6.91C16.152 6.508 17 6.988 17 7.766Z","key":"1"}),
    createElement(Path, {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"2"})
  );
});

SkipBackSquare.displayName = 'SkipBackSquare';

module.exports = SkipBackSquare;
module.exports.SkipBackSquare = SkipBackSquare;
module.exports.default = SkipBackSquare;
