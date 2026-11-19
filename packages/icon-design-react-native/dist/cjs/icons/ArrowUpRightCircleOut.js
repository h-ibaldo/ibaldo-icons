'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUpRightCircleOut = forwardRef(function ArrowUpRightCircleOut(
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
    createElement(Path, {"d":"M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12","key":"0"}),
    createElement(Path, {"d":"M22 7L22 2L17 2","key":"1"}),
    createElement(Path, {"d":"M22 2L12.5 11.5","key":"2"})
  );
});

ArrowUpRightCircleOut.displayName = 'ArrowUpRightCircleOut';

module.exports = ArrowUpRightCircleOut;
module.exports.ArrowUpRightCircleOut = ArrowUpRightCircleOut;
module.exports.default = ArrowUpRightCircleOut;
