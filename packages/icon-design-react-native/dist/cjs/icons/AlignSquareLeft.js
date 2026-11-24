'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const AlignSquareLeft = forwardRef(function AlignSquareLeft(
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
    createElement(Path, {"d":"M10 8L14 8C15.105 8 16 8.895 16 10L16 14C16 15.105 15.105 16 14 16L10 16C8.895 16 8 15.105 8 14L8 10C8 8.895 8.895 8 10 8Z","key":"0"}),
    createElement(Path, {"d":"M2 5L2 19","key":"1"})
  );
});

AlignSquareLeft.displayName = 'AlignSquareLeft';

module.exports = AlignSquareLeft;
module.exports.AlignSquareLeft = AlignSquareLeft;
module.exports.default = AlignSquareLeft;
