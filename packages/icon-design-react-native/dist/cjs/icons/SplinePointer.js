'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SplinePointer = forwardRef(function SplinePointer(
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
    createElement(Path, {"d":"M5 16C5 9.926 9.926 5 16 5","key":"0"}),
    createElement(Path, {"d":"M16 5C16 3.344 17.344 2 19 2C20.656 2 22 3.344 22 5C22 6.656 20.656 8 19 8C17.344 8 16 6.656 16 5Z","key":"1"}),
    createElement(Path, {"d":"M2 19C2 17.344 3.344 16 5 16C6.656 16 8 17.344 8 19C8 20.656 6.656 22 5 22C3.344 22 2 20.656 2 19Z","key":"2"}),
    createElement(Path, {"d":"M16 5C16 3.344 17.344 2 19 2C20.656 2 22 3.344 22 5C22 6.656 20.656 8 19 8C17.344 8 16 6.656 16 5Z","key":"3"}),
    createElement(Path, {"d":"M2 19C2 17.344 3.344 16 5 16C6.656 16 8 17.344 8 19C8 20.656 6.656 22 5 22C3.344 22 2 20.656 2 19Z","key":"4"}),
    createElement(Path, {"d":"M18 18L22 16L13 13L16 22Z","key":"5"})
  );
});

SplinePointer.displayName = 'SplinePointer';

module.exports = SplinePointer;
module.exports.SplinePointer = SplinePointer;
module.exports.default = SplinePointer;
