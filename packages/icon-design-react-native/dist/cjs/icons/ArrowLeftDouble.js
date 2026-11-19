'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowLeftDouble = forwardRef(function ArrowLeftDouble(
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
    createElement(Path, {"d":"M10 20L2 12L10 4","key":"0"}),
    createElement(Path, {"d":"M16 20L8 12L16 4","key":"1"}),
    createElement(Path, {"d":"M22 12L8 12","key":"2"})
  );
});

ArrowLeftDouble.displayName = 'ArrowLeftDouble';

module.exports = ArrowLeftDouble;
module.exports.ArrowLeftDouble = ArrowLeftDouble;
module.exports.default = ArrowLeftDouble;
