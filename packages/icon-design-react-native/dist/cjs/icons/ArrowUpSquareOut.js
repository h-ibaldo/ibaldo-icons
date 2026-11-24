'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUpSquareOut = forwardRef(function ArrowUpSquareOut(
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
    createElement(Path, {"d":"M7 9L12 4L17 9","key":"0"}),
    createElement(Path, {"d":"M12 18L12 4","key":"1"}),
    createElement(Path, {"d":"M15.977 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L7.977 2","key":"2"})
  );
});

ArrowUpSquareOut.displayName = 'ArrowUpSquareOut';

module.exports = ArrowUpSquareOut;
module.exports.ArrowUpSquareOut = ArrowUpSquareOut;
module.exports.default = ArrowUpSquareOut;
