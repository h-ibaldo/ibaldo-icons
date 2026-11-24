'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FlagPennant = forwardRef(function FlagPennant(
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
    createElement(Path, {"d":"M6 22L6 1.969L19.883 8.086L5.977 14.102","key":"0"})
  );
});

FlagPennant.displayName = 'FlagPennant';

module.exports = FlagPennant;
module.exports.FlagPennant = FlagPennant;
module.exports.default = FlagPennant;
