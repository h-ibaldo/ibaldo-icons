'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowDownLeftDouble = forwardRef(function ArrowDownLeftDouble(
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
    createElement(Path, {"d":"M16 20L4 20L4 8","key":"0"}),
    createElement(Path, {"d":"M20 16L8 16L8 4","key":"1"}),
    createElement(Path, {"d":"M8 16L20 4","key":"2"})
  );
});

ArrowDownLeftDouble.displayName = 'ArrowDownLeftDouble';

module.exports = ArrowDownLeftDouble;
module.exports.ArrowDownLeftDouble = ArrowDownLeftDouble;
module.exports.default = ArrowDownLeftDouble;
