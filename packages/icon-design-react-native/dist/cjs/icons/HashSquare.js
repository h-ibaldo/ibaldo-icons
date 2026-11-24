'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const HashSquare = forwardRef(function HashSquare(
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
    createElement(Path, {"d":"M11.445 7L8.109 17","key":"0"}),
    createElement(Path, {"d":"M15.891 7L12.555 17","key":"1"}),
    createElement(Path, {"d":"M17 9.777L8.109 9.777","key":"2"}),
    createElement(Path, {"d":"M15.891 14.223L7 14.223","key":"3"}),
    createElement(Path, {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z","key":"4"})
  );
});

HashSquare.displayName = 'HashSquare';

module.exports = HashSquare;
module.exports.HashSquare = HashSquare;
module.exports.default = HashSquare;
