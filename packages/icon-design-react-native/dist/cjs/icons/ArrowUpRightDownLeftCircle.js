'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUpRightDownLeftCircle = forwardRef(function ArrowUpRightDownLeftCircle(
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
    createElement(Path, {"d":"M2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12Z","key":"0"}),
    createElement(Path, {"d":"M9 7L12 7L12 10","key":"1"}),
    createElement(Path, {"d":"M7 12L12 7","key":"2"}),
    createElement(Path, {"d":"M15 17L12 17L12 14","key":"3"}),
    createElement(Path, {"d":"M17 12L12 17","key":"4"})
  );
});

ArrowUpRightDownLeftCircle.displayName = 'ArrowUpRightDownLeftCircle';

module.exports = ArrowUpRightDownLeftCircle;
module.exports.ArrowUpRightDownLeftCircle = ArrowUpRightDownLeftCircle;
module.exports.default = ArrowUpRightDownLeftCircle;
