'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CircleSplit = forwardRef(function CircleSplit(
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
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement(Path, {"d":"M11 8L8 16","key":"1"}),
    createElement(Path, {"d":"M16 8L13 16","key":"2"}),
    createElement(Path, {"d":"M22 12L14.5 12","key":"3"}),
    createElement(Path, {"d":"M2 12L9.5 12","key":"4"})
  );
});

CircleSplit.displayName = 'CircleSplit';

module.exports = CircleSplit;
module.exports.CircleSplit = CircleSplit;
module.exports.default = CircleSplit;
