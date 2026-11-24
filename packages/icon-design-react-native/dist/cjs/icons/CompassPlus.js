'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CompassPlus = forwardRef(function CompassPlus(
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
    createElement(Path, {"d":"M16 8L10 10L8 16L14 14Z","key":"0"}),
    createElement(Path, {"d":"M2 5L8 5","key":"1"}),
    createElement(Path, {"d":"M5 2L5 8","key":"2"}),
    createElement(Path, {"d":"M2.055 11C2.02 11.328 2 11.66 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C11.66 2 11.328 2.02 11 2.055","key":"3"})
  );
});

CompassPlus.displayName = 'CompassPlus';

module.exports = CompassPlus;
module.exports.CompassPlus = CompassPlus;
module.exports.default = CompassPlus;
