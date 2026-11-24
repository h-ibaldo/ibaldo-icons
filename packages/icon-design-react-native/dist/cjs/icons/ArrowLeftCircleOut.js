'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowLeftCircleOut = forwardRef(function ArrowLeftCircleOut(
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
    createElement(Path, {"d":"M6 9L3 12L6 15","key":"0"}),
    createElement(Path, {"d":"M15 12L3 12","key":"1"}),
    createElement(Path, {"d":"M3.02 18C4.844 20.426 7.73 22 11 22C16.523 22 21 17.523 21 12C21 6.477 16.523 2 11 2C7.73 2 4.844 3.574 3.02 6","key":"2"})
  );
});

ArrowLeftCircleOut.displayName = 'ArrowLeftCircleOut';

module.exports = ArrowLeftCircleOut;
module.exports.ArrowLeftCircleOut = ArrowLeftCircleOut;
module.exports.default = ArrowLeftCircleOut;
