'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SquareRoundCorner = forwardRef(function SquareRoundCorner(
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
    createElement(Path, {"d":"M22 14L22 20C22 21.105 21.105 22 20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L10 2","key":"0"}),
    createElement(Path, {"d":"M14.219 2C18.516 2 22 5.484 22 9.781L22 10.07","key":"1"})
  );
});

SquareRoundCorner.displayName = 'SquareRoundCorner';

module.exports = SquareRoundCorner;
module.exports.SquareRoundCorner = SquareRoundCorner;
module.exports.default = SquareRoundCorner;
