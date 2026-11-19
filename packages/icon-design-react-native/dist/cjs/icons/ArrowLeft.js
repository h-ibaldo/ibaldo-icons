'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowLeft = forwardRef(function ArrowLeft(
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
    createElement(Path, {"d":"M12 20L4 12L12 4","key":"0"}),
    createElement(Path, {"d":"M4 12L20 12","key":"1"})
  );
});

ArrowLeft.displayName = 'ArrowLeft';

module.exports = ArrowLeft;
module.exports.ArrowLeft = ArrowLeft;
module.exports.default = ArrowLeft;
