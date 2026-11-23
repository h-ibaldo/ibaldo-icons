'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BrushThick = forwardRef(function BrushThick(
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
    createElement(Path, {"d":"M4 16C4 13.789 5.789 12 8 12C10.211 12 12 13.789 12 16C12 18.762 9.762 21 7 21L2 21C3.281 19.719 4 17.984 4 16.172Z","key":"0"}),
    createElement(Path, {"d":"M8.063 12L17 3C17.531 2.469 18.25 2.172 19 2.172C20.563 2.172 21.828 3.438 21.828 5C21.828 5.75 21.531 6.469 21 7L12.063 16L12 15.938","key":"1"})
  );
});

BrushThick.displayName = 'BrushThick';

module.exports = BrushThick;
module.exports.BrushThick = BrushThick;
module.exports.default = BrushThick;
