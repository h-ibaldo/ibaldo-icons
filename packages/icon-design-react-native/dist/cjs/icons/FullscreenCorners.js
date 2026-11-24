'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FullscreenCorners = forwardRef(function FullscreenCorners(
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
    createElement(Path, {"d":"M2 7L2 2L7 2","key":"0"}),
    createElement(Path, {"d":"M22 17L22 22L17 22","key":"1"}),
    createElement(Path, {"d":"M7 22L2 22L2 17","key":"2"}),
    createElement(Path, {"d":"M17 2L22 2L22 7","key":"3"})
  );
});

FullscreenCorners.displayName = 'FullscreenCorners';

module.exports = FullscreenCorners;
module.exports.FullscreenCorners = FullscreenCorners;
module.exports.default = FullscreenCorners;
