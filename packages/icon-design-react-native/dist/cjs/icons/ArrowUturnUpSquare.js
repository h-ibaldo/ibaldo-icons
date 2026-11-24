'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUturnUpSquare = forwardRef(function ArrowUturnUpSquare(
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
    createElement(Path, {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"0"}),
    createElement(Path, {"d":"M18 11L15 8L12 11","key":"1"}),
    createElement(Path, {"d":"M15 8L15 13C15 15.211 13.211 17 11 17C8.789 17 7 15.211 7 13L7 11","key":"2"})
  );
});

ArrowUturnUpSquare.displayName = 'ArrowUturnUpSquare';

module.exports = ArrowUturnUpSquare;
module.exports.ArrowUturnUpSquare = ArrowUturnUpSquare;
module.exports.default = ArrowUturnUpSquare;
