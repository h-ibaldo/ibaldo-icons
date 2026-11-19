'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CropCircle = forwardRef(function CropCircle(
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
    createElement(Path, {"d":"M9 7L9 14C9 14.551 9.445 15 10 15L17 15","key":"1"}),
    createElement(Path, {"d":"M15 12L15 10C15 9.449 14.555 9 14 9L12 9","key":"2"}),
    createElement(Path, {"d":"M9 9L7 9","key":"3"}),
    createElement(Path, {"d":"M15 17L15 15","key":"4"})
  );
});

CropCircle.displayName = 'CropCircle';

module.exports = CropCircle;
module.exports.CropCircle = CropCircle;
module.exports.default = CropCircle;
