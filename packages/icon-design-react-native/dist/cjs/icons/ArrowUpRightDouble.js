'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUpRightDouble = forwardRef(function ArrowUpRightDouble(
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
    createElement(Path, {"d":"M8 4L20 4L20 16","key":"0"}),
    createElement(Path, {"d":"M4 8L16 8L16 20","key":"1"}),
    createElement(Path, {"d":"M16 8L4 20","key":"2"})
  );
});

ArrowUpRightDouble.displayName = 'ArrowUpRightDouble';

module.exports = ArrowUpRightDouble;
module.exports.ArrowUpRightDouble = ArrowUpRightDouble;
module.exports.default = ArrowUpRightDouble;
