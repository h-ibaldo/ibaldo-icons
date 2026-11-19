'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowLeftCircle = forwardRef(function ArrowLeftCircle(
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
    createElement(Path, {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z","key":"0"}),
    createElement(Path, {"d":"M11 9L8 12L11 15","key":"1"}),
    createElement(Path, {"d":"M16 12L8 12","key":"2"})
  );
});

ArrowLeftCircle.displayName = 'ArrowLeftCircle';

module.exports = ArrowLeftCircle;
module.exports.ArrowLeftCircle = ArrowLeftCircle;
module.exports.default = ArrowLeftCircle;
