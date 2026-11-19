'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const WindowToggle = forwardRef(function WindowToggle(
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
    createElement(Path, {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z","key":"0"}),
    createElement(Path, {"d":"M2 8L22 8","key":"1"}),
    createElement(Path, {"d":"M5 5L5 5","key":"2"}),
    createElement(Path, {"d":"M8 5L8 5","key":"3"}),
    createElement(Path, {"d":"M11 5L11 5","key":"4"}),
    createElement(Path, {"d":"M16 17L8 17C6.895 17 6 16.105 6 15C6 13.895 6.895 13 8 13L16 13C17.105 13 18 13.895 18 15C18 16.105 17.105 17 16 17Z","key":"5"}),
    createElement(Path, {"d":"M10 13L10 17","key":"6"})
  );
});

WindowToggle.displayName = 'WindowToggle';

module.exports = WindowToggle;
module.exports.WindowToggle = WindowToggle;
module.exports.default = WindowToggle;
