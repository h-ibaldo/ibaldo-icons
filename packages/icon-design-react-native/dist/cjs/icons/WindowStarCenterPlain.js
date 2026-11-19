'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const WindowStarCenterPlain = forwardRef(function WindowStarCenterPlain(
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
    createElement(Path, {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"0"}),
    createElement(Path, {"d":"M2 8L22 8","key":"1"}),
    createElement(Path, {"d":"M11.965 11L12.953 13.008C13.117 13.332 13.426 13.559 13.785 13.609L16 13.934L14.398 15.492C14.137 15.746 14.02 16.113 14.082 16.469L14.461 18.676L12.48 17.633C12.156 17.465 11.773 17.465 11.449 17.633L9.473 18.676L9.848 16.469C9.91 16.113 9.793 15.746 9.531 15.492L7.93 13.934L10.145 13.609C10.504 13.559 10.813 13.332 10.977 13.008Z","key":"2"})
  );
});

WindowStarCenterPlain.displayName = 'WindowStarCenterPlain';

module.exports = WindowStarCenterPlain;
module.exports.WindowStarCenterPlain = WindowStarCenterPlain;
module.exports.default = WindowStarCenterPlain;
