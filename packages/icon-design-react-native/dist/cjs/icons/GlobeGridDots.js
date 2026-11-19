'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const GlobeGridDots = forwardRef(function GlobeGridDots(
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
    createElement(Path, {"d":"M8 12C8 16.093 9.575 19.715 12 22C14.425 19.715 16 16.093 16 12C16 7.907 14.425 4.285 12 2C9.575 4.285 8 7.907 8 12Z","key":"0"}),
    createElement(Path, {"d":"M2.459 9L18 9","key":"1"}),
    createElement(Path, {"d":"M21.541 15L2.459 15","key":"2"}),
    createElement(Path, {"d":"M22 2L22 2","key":"3"}),
    createElement(Path, {"d":"M22 6L22 6","key":"4"}),
    createElement(Path, {"d":"M22 10L22 10","key":"5"}),
    createElement(Path, {"d":"M18 4.014C16.327 2.755 14.254 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C16.838 22 20.872 18.564 21.799 14","key":"6"})
  );
});

GlobeGridDots.displayName = 'GlobeGridDots';

module.exports = GlobeGridDots;
module.exports.GlobeGridDots = GlobeGridDots;
module.exports.default = GlobeGridDots;
