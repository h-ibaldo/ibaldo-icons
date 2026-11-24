'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SprayCanBare = forwardRef(function SprayCanBare(
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
    createElement(Path, {"d":"M11 5L14 5C15.656 5 17 6.344 17 8L17 22L8 22L8 8C8 6.344 9.344 5 11 5Z","key":"0"}),
    createElement(Path, {"d":"M11 5L11 2L14 2L14 5","key":"1"}),
    createElement(Path, {"d":"M7 9L18 9","key":"2"}),
    createElement(Path, {"d":"M8 13L14 13L14 18L8 18Z","key":"3"})
  );
});

SprayCanBare.displayName = 'SprayCanBare';

module.exports = SprayCanBare;
module.exports.SprayCanBare = SprayCanBare;
module.exports.default = SprayCanBare;
