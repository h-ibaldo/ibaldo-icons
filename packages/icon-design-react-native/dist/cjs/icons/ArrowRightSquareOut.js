'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowRightSquareOut = forwardRef(function ArrowRightSquareOut(
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
    createElement(Path, {"d":"M15 7L20 12L15 17","key":"0"}),
    createElement(Path, {"d":"M6 12L20 12","key":"1"}),
    createElement(Path, {"d":"M22 15.977L22 20C22 21.105 21.105 22 20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 7.977","key":"2"})
  );
});

ArrowRightSquareOut.displayName = 'ArrowRightSquareOut';

module.exports = ArrowRightSquareOut;
module.exports.ArrowRightSquareOut = ArrowRightSquareOut;
module.exports.default = ArrowRightSquareOut;
