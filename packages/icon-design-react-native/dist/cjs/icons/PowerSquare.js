'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PowerSquare = forwardRef(function PowerSquare(
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
    createElement(Path, {"d":"M12 5L12 12","key":"0"}),
    createElement(Path, {"d":"M15 8C16.215 8.91 17 10.363 17 12C17 14.762 14.762 17 12 17C9.238 17 7 14.762 7 12C7 10.363 7.785 8.91 9 8","key":"1"}),
    createElement(Path, {"d":"M6 2L18 2C20.211 2 22 3.789 22 6L22 18C22 20.211 20.211 22 18 22L6 22C3.789 22 2 20.211 2 18L2 6C2 3.789 3.789 2 6 2Z","key":"2"})
  );
});

PowerSquare.displayName = 'PowerSquare';

module.exports = PowerSquare;
module.exports.PowerSquare = PowerSquare;
module.exports.default = PowerSquare;
