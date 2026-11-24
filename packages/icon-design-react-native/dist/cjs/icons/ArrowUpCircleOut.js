'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUpCircleOut = forwardRef(function ArrowUpCircleOut(
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
    createElement(Path, {"d":"M9 6L12 3L15 6","key":"0"}),
    createElement(Path, {"d":"M12 15L12 3","key":"1"}),
    createElement(Path, {"d":"M18 3.02C20.426 4.844 22 7.73 22 11C22 16.523 17.523 21 12 21C6.477 21 2 16.523 2 11C2 7.73 3.574 4.844 6 3.02","key":"2"})
  );
});

ArrowUpCircleOut.displayName = 'ArrowUpCircleOut';

module.exports = ArrowUpCircleOut;
module.exports.ArrowUpCircleOut = ArrowUpCircleOut;
module.exports.default = ArrowUpCircleOut;
