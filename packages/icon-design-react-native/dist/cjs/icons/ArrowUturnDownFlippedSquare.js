'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUturnDownFlippedSquare = forwardRef(function ArrowUturnDownFlippedSquare(
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
    createElement(Path, {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z","key":"0"}),
    createElement(Path, {"d":"M6 13L9 16L12 13","key":"1"}),
    createElement(Path, {"d":"M9 16L9 11C9 8.789 10.789 7 13 7C15.211 7 17 8.789 17 11L17 13","key":"2"})
  );
});

ArrowUturnDownFlippedSquare.displayName = 'ArrowUturnDownFlippedSquare';

module.exports = ArrowUturnDownFlippedSquare;
module.exports.ArrowUturnDownFlippedSquare = ArrowUturnDownFlippedSquare;
module.exports.default = ArrowUturnDownFlippedSquare;
