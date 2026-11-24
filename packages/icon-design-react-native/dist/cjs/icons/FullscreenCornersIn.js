'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FullscreenCornersIn = forwardRef(function FullscreenCornersIn(
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
    createElement(Path, {"d":"M7 2L7 7L2 7","key":"0"}),
    createElement(Path, {"d":"M17 22L17 17L22 17","key":"1"}),
    createElement(Path, {"d":"M2 17L7 17L7 22","key":"2"}),
    createElement(Path, {"d":"M22 7L17 7L17 2","key":"3"})
  );
});

FullscreenCornersIn.displayName = 'FullscreenCornersIn';

module.exports = FullscreenCornersIn;
module.exports.FullscreenCornersIn = FullscreenCornersIn;
module.exports.default = FullscreenCornersIn;
