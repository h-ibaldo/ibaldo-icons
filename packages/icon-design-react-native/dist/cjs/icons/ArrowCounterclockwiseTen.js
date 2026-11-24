'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowCounterclockwiseTen = forwardRef(function ArrowCounterclockwiseTen(
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
    createElement(Path, {"d":"M5 2L5 5L8 5","key":"0"}),
    createElement(Path, {"d":"M5 4.875C6.805 3.102 9.27 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 10.953 2.16 9.945 2.461 9","key":"1"}),
    createElement(Path, {"d":"M14.5 16C13.395 16 12.5 15.105 12.5 14L12.5 10C12.5 8.895 13.395 8 14.5 8C15.605 8 16.5 8.895 16.5 10L16.5 14C16.5 15.105 15.605 16 14.5 16Z","key":"2"}),
    createElement(Path, {"d":"M9 16L9 8L8 8","key":"3"})
  );
});

ArrowCounterclockwiseTen.displayName = 'ArrowCounterclockwiseTen';

module.exports = ArrowCounterclockwiseTen;
module.exports.ArrowCounterclockwiseTen = ArrowCounterclockwiseTen;
module.exports.default = ArrowCounterclockwiseTen;
