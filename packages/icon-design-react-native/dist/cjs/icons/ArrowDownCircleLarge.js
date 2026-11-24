'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowDownCircleLarge = forwardRef(function ArrowDownCircleLarge(
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
    createElement(Path, {"d":"M7 12L12 17L17 12","key":"0"}),
    createElement(Path, {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z","key":"1"}),
    createElement(Path, {"d":"M12 7L12 17","key":"2"})
  );
});

ArrowDownCircleLarge.displayName = 'ArrowDownCircleLarge';

module.exports = ArrowDownCircleLarge;
module.exports.ArrowDownCircleLarge = ArrowDownCircleLarge;
module.exports.default = ArrowDownCircleLarge;
