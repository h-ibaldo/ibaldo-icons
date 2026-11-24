'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const JustifyCenter = forwardRef(function JustifyCenter(
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
    createElement(Path, {"d":"M2 2L2 22","key":"0"}),
    createElement(Path, {"d":"M22 2L22 22","key":"1"}),
    createElement(Path, {"d":"M10 6L14 6C14.551 6 15 6.449 15 7L15 17C15 17.551 14.551 18 14 18L10 18C9.449 18 9 17.551 9 17L9 7C9 6.449 9.449 6 10 6Z","key":"2"})
  );
});

JustifyCenter.displayName = 'JustifyCenter';

module.exports = JustifyCenter;
module.exports.JustifyCenter = JustifyCenter;
module.exports.default = JustifyCenter;
